import {
  BLOCK_LABEL_FONT,
  ELEMENTS_COLORS,
  ELEMENTS_LIST_FONT,
  MapDefinitions,
} from '../../constants/game';

import { drawRectangle, drawTriangle, drawLineToAngle } from '../../utils/drawing';
import { animateTarget } from './animations';

import { IBlock } from '../../types/game';

/**
 * Function creates game window element, game panel and all needed canvases
 */
function renderGameWindow() {
  const appRoot: HTMLElement = document.getElementById('root');
  const gameWindow: HTMLElement = document.createElement('div');
  const backgroundCanvas: HTMLCanvasElement = document.createElement('canvas');
  const gameBoard: HTMLElement = document.createElement('div');
  const gridContainer: HTMLElement = document.createElement('div');

  this.elementsCanvas = document.createElement('canvas');
  this.gridCanvas = document.createElement('canvas');
  this.blocksCanvas = document.createElement('canvas');
  this.targetCanvas = document.createElement('canvas');

  gameWindow.className = 'gameWindow';
  backgroundCanvas.className = '-background-canvas';
  gameBoard.className = 'gameBoard';
  gridContainer.className = 'gridContainer';
  this.elementsCanvas.className = '-elements-canvas';
  this.gridCanvas.className = '-grid-canvas';
  this.blocksCanvas.className = '-blocks-canvas';
  this.targetCanvas.className = '-target-canvas';

  backgroundCanvas.width = this.cellSize * 14;
  backgroundCanvas.height = this.cellSize * 12;
  this.elementsCanvas.width = this.cellSize * 3;
  this.elementsCanvas.height = this.cellSize * 11;
  this.gridCanvas.width = this.cellSize * 10;
  this.gridCanvas.height = this.cellSize * 12;
  this.blocksCanvas.width = this.cellSize * 10;
  this.blocksCanvas.height = this.cellSize * 12;
  this.targetCanvas.width = this.cellSize * 10;
  this.targetCanvas.height = this.cellSize * 12;

  appRoot.appendChild(gameWindow);
  gameWindow.appendChild(backgroundCanvas);
  gameWindow.appendChild(gameBoard);
  gameBoard.appendChild(this.elementsCanvas);
  gameBoard.appendChild(gridContainer);
  gridContainer.appendChild(this.gridCanvas);
  gridContainer.appendChild(this.blocksCanvas);
  gridContainer.appendChild(this.targetCanvas);

  renderBackground.call(
    this,
    backgroundCanvas.getContext('2d'),
    backgroundCanvas.width,
    backgroundCanvas.height,
  );
}

/**
 * Function renders the game window background (brick wall)
 *
 * @param ctx
 * @param width
 * @param height
 */
function renderBackground(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const brickWidth: number = this.cellSize * 2 / 3;
  const brickHeight: number = this.cellSize / 3;
  const borderWidth: number = this.cellSize / 12;
  const xCount: number = width / brickWidth;
  const yCount: number = height / (this.cellSize / 3);

  for (let y = 0; y <= yCount; y += 1) {
    for (let x = 0; x <= xCount; x += 1) {
      const left: number = brickWidth * x - (y % 2 === 0 ? brickWidth / 2 : 0);
      const top: number = brickHeight * y;

      drawRectangle(
        ctx,
        left,
        top,
        brickWidth,
        brickHeight,
        ELEMENTS_COLORS.brick.background,
      );
      drawLineToAngle(
        ctx,
        left,
        top,
        brickHeight,
        90,
        ELEMENTS_COLORS.brick.highlight,
        borderWidth,
      );
      drawLineToAngle(
        ctx,
        left,
        top,
        brickWidth,
        0,
        ELEMENTS_COLORS.brick.highlight,
        borderWidth,
      );
      drawLineToAngle(
        ctx,
        left,
        top + brickHeight - borderWidth,
        brickWidth,
        0,
        ELEMENTS_COLORS.brick.border,
        borderWidth,
      );
      drawLineToAngle(
        ctx,
        left + brickWidth - borderWidth,
        top,
        brickHeight,
        90,
        ELEMENTS_COLORS.brick.border,
        borderWidth,
      );
    }
  }
}

/**
 * Function renders game board as described in `constants/levels`
 * for the current level, including initial block states and the target
 */
function renderLevel() {
  const { map, blocks } = this.level;

  if (!map || !blocks) {
    return;
  }

  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y].length; x += 1) {
      renderMapElement.call(this, x, y);
    }
  }

  for (const block of blocks) {
    const top: number = this.cellSize * block.position[0];
    const left: number = this.cellSize * block.position[1];

    renderBlock.call(this, this.blocksCanvas.getContext('2d'), block.type, left, top);
  }

  animateTarget.call(this);

  renderElementsList.call(this);
}

/**
 * Render a single level map element depending on its type
 *
 * @param x
 * @param y
 */
function renderMapElement(x: number, y: number) {
  const ctx: CanvasRenderingContext2D = this.gridCanvas.getContext('2d');
  const elementType: number = this.level.map[y][x];
  const top: number = this.cellSize * y;
  const left: number = this.cellSize * x;

  switch (elementType) {
    case MapDefinitions.Empty: {
      drawRectangle(
        ctx,
        left,
        top,
        this.cellSize,
        this.cellSize,
        ELEMENTS_COLORS.empty.background,
      );
      break;
    }
    case MapDefinitions.Wall: {
      drawRectangle(
        ctx,
        left,
        top,
        this.cellSize,
        this.cellSize,
        ELEMENTS_COLORS.wall.border,
      );
      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        ELEMENTS_COLORS.wall.background,
      );
      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize - this.cellSize / 6],
        ELEMENTS_COLORS.wall.shadow,
      );
      drawLineToAngle(
        ctx,
        left,
        top + this.cellSize - this.cellSize / 24,
        this.cellSize,
        0,
        ELEMENTS_COLORS.wall.margin,
        this.cellSize / 12,
      );
      drawLineToAngle(
        ctx,
        left + this.cellSize - this.cellSize / 24,
        top + this.cellSize,
        this.cellSize,
        270,
        ELEMENTS_COLORS.wall.margin,
        this.cellSize / 12,
      );
      break;
    }
    default: break;
  }
}

/**
 * Function renders a single block at the given coordinates
 *
 * @param ctx
 * @param type
 * @param left
 * @param top
 */
function renderBlock(ctx: CanvasRenderingContext2D, type: number, left: number, top: number) {
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize,
    this.cellSize,
    ELEMENTS_COLORS.block.border,
  );
  drawRectangle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize / 6,
    this.cellSize -  this.cellSize / 3,
    this.cellSize -  this.cellSize / 3,
    ELEMENTS_COLORS.block.background,
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize * 3 / 24,
    top + this.cellSize / 6,
    this.cellSize - this.cellSize / 3,
    90,
    ELEMENTS_COLORS.block.highlight,
    this.cellSize / 12,
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize * 3 / 24,
    this.cellSize - this.cellSize / 3,
    0,
    ELEMENTS_COLORS.block.highlight,
    this.cellSize / 12,
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize - this.cellSize * 3 / 24,
    this.cellSize - this.cellSize / 3,
    0,
    ELEMENTS_COLORS.block.background,
    this.cellSize / 12,
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize - this.cellSize * 3 / 24,
    top + this.cellSize / 6,
    this.cellSize - this.cellSize / 3,
    90,
    ELEMENTS_COLORS.block.background,
    this.cellSize / 12,
  );
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left + this.cellSize - this.cellSize / 12,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left + this.cellSize - this.cellSize / 12,
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left,
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );

  ctx.font = BLOCK_LABEL_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = ELEMENTS_COLORS.block.labelShadow;
  ctx.fillText(
    type.toString(),
    left + this.cellSize /2 + this.cellSize / 12,
    top + this.cellSize /2 + this.cellSize / 12,
  );

  ctx.fillStyle = ELEMENTS_COLORS.block.label;
  ctx.fillText(
    type.toString(),
    left + this.cellSize /2,
    top + this.cellSize /2,
  );
}

/**
 * Function renders the target -- a border with rectangle shape in the specified color
 *
 * @param color
 */
function renderTarget(color: string) {
  const ctx: CanvasRenderingContext2D = this.targetCanvas.getContext('2d');
  const top: number = this.cellSize * this.level.target[0];
  const left: number = this.cellSize * this.level.target[1];

  ctx.clearRect(
    left - this.cellSize * 2,
    top - this.cellSize * 2,
    this.cellSize * 5,
    this.cellSize * 5,
  );

  drawRectangle(
    ctx,
    left + this.cellSize / 12,
    top + this.cellSize / 12,
    this.cellSize - this.cellSize / 6,
    this.cellSize - this.cellSize / 6,
    null,
    this.cellSize / 6,
    color,
  );
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left + this.cellSize - this.cellSize / 12,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left + this.cellSize - this.cellSize / 12,
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
  drawRectangle(
    ctx,
    left,
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    ELEMENTS_COLORS.empty.background,
  );
}

/**
 * Function renders the list of currently available blocks (grouped by types) and their count
 */
function renderElementsList() {
  const { blocks } = this.level;

  if (!blocks) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.elementsCanvas.getContext('2d');
  let index = 1;

  ctx.clearRect(0, 0, this.cellSize * 3, this.cellSize * 11);

  for (let i = 1; i <= 8; i += 1) {
    const elements: IBlock[] = blocks.filter((block: IBlock) => {
      return block.type === i;
    });

    if (elements && elements.length > 0) {
      renderBlock.call(
        this,
        ctx,
        elements[0].type,
        this.cellSize / 3,
        this.cellSize * (index - 1) + this.cellSize * (index - 1) / 3 + this.cellSize / 3,
      );

      ctx.font = ELEMENTS_LIST_FONT;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = ELEMENTS_COLORS.elementsList.text;

      ctx.fillText(
        `X${elements.length}`,
        this.cellSize / 2 + this.cellSize,
        this.cellSize * (index - 1) + this.cellSize * (index - 1) / 3 + this.cellSize / 3 + this.cellSize,
      );

      index += 1;
    }
  }
}

export {
  renderGameWindow,
  renderLevel,
  renderBlock,
  renderTarget,
  renderElementsList,
};
