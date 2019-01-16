import { ELEMENTS_COLORS, MapDefinitions } from '../../constants/game';

import { drawRectangle, drawTriangle, drawLineToAngle } from '../../utils/drawing';

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
}

/**
 * Function renders game board as described in `constants/levels`
 * for the current level, including initial block states
 */
function renderLevelMap() {
  if (!this.level.map) {
    return;
  }

  for (let y = 0; y < this.level.map.length; y += 1) {
    for (let x = 0; x < this.level.map[y].length; x += 1) {
      renderMapElement.call(this, x, y);
    }
  }

  if (!this.level.blocks) {
    return;
  }

  for (const block of this.level.blocks) {
    const top: number = this.cellSize * block.position[0];
    const left: number = this.cellSize * block.position[1];

    renderBlock.call(this, block.type, left, top);
  }
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
 * @param type
 * @param left
 * @param top
 */
function renderBlock(type: number, left: number, top: number) {
  const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');

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
}

export { renderGameWindow, renderLevelMap };
