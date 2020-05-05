import {
  BLOCK_LABEL_FONT,
  ELEMENTS_COLORS,
  ELEMENTS_LIST_FONT,
  MapDefinitions,
} from '../../constants/game';

import {
  drawRectangle,
  drawTriangle,
  drawLineToAngle,
  drawCircle,
} from '../../core/utils/drawing';

import { animateTarget } from './animations';

import { Block } from './types';

function renderGameWindow(): HTMLElement {
  const gameWindow: HTMLElement = document.createElement('div');
  const gameBoard: HTMLElement = document.createElement('div');
  const gridContainer: HTMLElement = document.createElement('div');

  gameWindow.className = 'game-window';
  gameBoard.className = 'game-board';
  gridContainer.className = 'grid-container';
  this.backgroundCanvas.className = '-background-canvas';
  this.elementsCanvas.className = '-elements-canvas';
  this.gridCanvas.className = '-grid-canvas';
  this.blocksCanvas.className = '-blocks-canvas';
  this.targetCanvas.className = '-target-canvas';
  this.bonusCanvas.className = '-bonus-canvas';

  this.backgroundCanvas.width = this.cellSize * 14;
  this.backgroundCanvas.height = this.cellSize * 12;
  this.elementsCanvas.width = this.cellSize * 3;
  this.elementsCanvas.height = this.cellSize * 11;
  this.gridCanvas.width = this.cellSize * 10;
  this.gridCanvas.height = this.cellSize * 12;
  this.blocksCanvas.width = this.cellSize * 10;
  this.blocksCanvas.height = this.cellSize * 12;
  this.targetCanvas.width = this.cellSize * 10;
  this.targetCanvas.height = this.cellSize * 12;
  this.bonusCanvas.width = this.cellSize * 10;
  this.bonusCanvas.height = this.cellSize * 12;

  gameWindow.appendChild(this.backgroundCanvas);
  gameWindow.appendChild(gameBoard);
  gameBoard.appendChild(this.elementsCanvas);
  gameBoard.appendChild(gridContainer);
  gridContainer.appendChild(this.gridCanvas);
  gridContainer.appendChild(this.blocksCanvas);
  gridContainer.appendChild(this.targetCanvas);
  gridContainer.appendChild(this.bonusCanvas);

  renderBackground.call(this);
  renderLevel.call(this);

  return gameWindow;
}

function renderBackground(): void {
  const ctx: CanvasRenderingContext2D = this.backgroundCanvas.getContext('2d');

  const brickWidth: number = this.cellSize * 2 / 3;
  const brickHeight: number = this.cellSize / 3;
  const borderWidth: number = this.cellSize / 12;
  const xCount: number = this.backgroundCanvas.width / brickWidth;
  const yCount: number = this.backgroundCanvas.height / (this.cellSize / 3);

  for (let y = 0; y <= yCount; y += 1) {
    for (let x = 0; x <= xCount; x += 1) {
      const left: number = brickWidth * x - (y % 2 === 0 ? brickWidth / 2 : 0) + borderWidth / 2;
      const top: number = brickHeight * y + borderWidth / 2;

      drawRectangle(
        ctx,
        left,
        top,
        brickWidth,
        brickHeight,
        {
          fillColor: ELEMENTS_COLORS.brick.background,
        },
      );
      drawLineToAngle(
        ctx,
        left,
        top,
        brickHeight,
        90,
        {
          edgingColor: ELEMENTS_COLORS.brick.highlight,
          edgingWidth: borderWidth,
        },
      );
      drawLineToAngle(
        ctx,
        left,
        top,
        brickWidth,
        0,
        {
          edgingColor: ELEMENTS_COLORS.brick.highlight,
          edgingWidth: borderWidth,
        },
      );
      drawLineToAngle(
        ctx,
        left,
        top + brickHeight - borderWidth,
        brickWidth,
        0,
        {
          edgingColor: ELEMENTS_COLORS.brick.border,
          edgingWidth: borderWidth,
        },
      );
      drawLineToAngle(
        ctx,
        left + brickWidth - borderWidth,
        top,
        brickHeight,
        90,
        {
          edgingColor: ELEMENTS_COLORS.brick.border,
          edgingWidth: borderWidth,
        },
      );
    }
  }
}

function renderLevel(): void {
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

function renderMapElement(x: number, y: number): void {
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
        {
          fillColor: ELEMENTS_COLORS.empty.background,
        },
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
        {
          fillColor: ELEMENTS_COLORS.wall.border,
        },
      );
      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        {
          fillColor: ELEMENTS_COLORS.wall.background,
        },
      );
      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize - this.cellSize / 6],
        {
          fillColor: ELEMENTS_COLORS.wall.shadow,
        },
      );
      drawLineToAngle(
        ctx,
        left,
        top + this.cellSize - this.cellSize / 24,
        this.cellSize,
        0,
        {
          edgingColor: ELEMENTS_COLORS.wall.margin,
          edgingWidth: this.cellSize / 12,
        },
      );
      drawLineToAngle(
        ctx,
        left + this.cellSize - this.cellSize / 24,
        top + this.cellSize,
        this.cellSize,
        270,
        {
          edgingColor: ELEMENTS_COLORS.wall.margin,
          edgingWidth: this.cellSize / 12,
        },
      );
      break;
    }
    default: break;
  }
}

function renderBlock(ctx: CanvasRenderingContext2D, type: number, left: number, top: number): void {
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize,
    this.cellSize,
    {
      fillColor: ELEMENTS_COLORS.block.border,
    },
  );
  drawRectangle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize / 6,
    this.cellSize * 2 / 3,
    this.cellSize * 2 / 3,
    {
      fillColor: ELEMENTS_COLORS.block.background,
    },
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize * 3 / 24,
    top + this.cellSize / 6,
    this.cellSize * 2 / 3,
    90,
    {
      edgingColor: ELEMENTS_COLORS.block.highlight,
      edgingWidth: this.cellSize / 12,
    },
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize * 3 / 24,
    this.cellSize * 2 / 3,
    0,
    {
      edgingColor: ELEMENTS_COLORS.block.highlight,
      edgingWidth: this.cellSize / 12,
    },
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize * 21 / 24,
    this.cellSize * 2 / 3,
    0,
    {
      edgingColor: ELEMENTS_COLORS.block.background,
      edgingWidth: this.cellSize / 12,
    },
  );
  drawLineToAngle(
    ctx,
    left + this.cellSize * 21 / 24,
    top + this.cellSize / 6,
    this.cellSize * 2 / 3,
    90,
    {
      edgingColor: ELEMENTS_COLORS.block.background,
      edgingWidth: this.cellSize / 12,
    }
  );
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top + this.cellSize * 11 / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left,
    top + this.cellSize * 11 / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );

  if (this.isIconModeOn) {
    renderBlockIcon.call(this, ctx, this.blocksIcons[type], left, top);
  } else {
    ctx.font = BLOCK_LABEL_FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = ELEMENTS_COLORS.block.labelShadow;
    ctx.fillText(
      type.toString(),
      left + this.cellSize * 7 / 12,
      top + this.cellSize * 7 / 12,
    );

    ctx.fillStyle = ELEMENTS_COLORS.block.label;
    ctx.fillText(
      type.toString(),
      left + this.cellSize / 2,
      top + this.cellSize / 2,
    );
  }
}

function renderBlockIcon(ctx: CanvasRenderingContext2D, id: number, left: number, top: number): void {
  switch (id) {
    case 1: {
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 2,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 4,
          top + this.cellSize * 3 / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 2,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize * 3 / 4,
          top + this.cellSize * 3 / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      break;
    }
    case 2: {
      drawRectangle(
        ctx,
        left + this.cellSize / 3,
        top + this.cellSize / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 4,
        top + this.cellSize * 3 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 2 / 3,
        top + this.cellSize / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 7 / 12,
        top + this.cellSize / 4,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 3,
        top + this.cellSize * 2 / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 4,
        top + this.cellSize * 7 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 2 / 3,
        top + this.cellSize * 2 / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 7 / 12,
        top + this.cellSize * 7 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      break;
    }
    case 3: {
      drawRectangle(
        ctx,
        left + this.cellSize / 2,
        top + this.cellSize / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 5 / 12,
        top + this.cellSize / 4,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 3,
        top + this.cellSize / 2,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 4,
        top + this.cellSize * 5 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 2 / 3,
        top + this.cellSize / 2,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 7 / 12,
        top + this.cellSize * 5 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 2,
        top + this.cellSize * 2 / 3,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize * 5 / 12,
        top + this.cellSize * 7 / 12,
        this.cellSize / 6,
        this.cellSize / 6,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      break;
    }
    case 4: {
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 4,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize * 3 / 4,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 8,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 4,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 8,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color3,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize * 3 / 4,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 8,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      break;
    }
    case 5: {
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 2,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 4,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize / 2,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 4,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color3,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize * 3 / 4,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize * 3 / 4,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawTriangle(
        ctx,
        [
          left + this.cellSize / 2,
          top + this.cellSize / 4,
        ],
        [
          left + this.cellSize / 2,
          top + this.cellSize / 2,
        ],
        [
          left + this.cellSize * 3 / 4,
          top + this.cellSize / 2,
        ],
        {
          fillColor: ELEMENTS_COLORS.icon.color3,
        },
      );
      break;
    }
    case 6: {
      drawRectangle(
        ctx,
        left + this.cellSize / 3,
        top + this.cellSize / 3,
        this.cellSize / 2,
        this.cellSize / 2,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawRectangle(
        ctx,
        left + this.cellSize / 4,
        top + this.cellSize / 4,
        this.cellSize / 2,
        this.cellSize / 2,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      break;
    }
    case 7: {
      drawCircle(
        ctx,
        left + this.cellSize * 13 / 24,
        top + this.cellSize * 13 / 24,
        this.cellSize / 4,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawCircle(
        ctx,
        left + this.cellSize / 2,
        top + this.cellSize / 2,
        this.cellSize / 4,
        {
          fillColor: ELEMENTS_COLORS.icon.color3,
        },
      );
      drawCircle(
        ctx,
        left + this.cellSize * 11 / 24,
        top + this.cellSize * 11 / 24,
        this.cellSize / 8,
        {
          fillColor: ELEMENTS_COLORS.icon.color1,
        },
      );
      break;
    }
    case 8: {
      drawCircle(
        ctx,
        left + this.cellSize * 13 / 24,
        top + this.cellSize * 13 / 24,
        this.cellSize / 12,
        {
          fillColor: ELEMENTS_COLORS.icon.color2,
        },
      );
      drawCircle(
        ctx,
        left + this.cellSize / 2,
        top + this.cellSize / 2,
        this.cellSize / 12,
        {
          fillColor: ELEMENTS_COLORS.icon.color3,
        },
      );
      break;
    }
    default: break;
  }
}

function renderTarget(color: string): void {
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
    this.cellSize * 5 / 6,
    this.cellSize * 5 / 6,
    {
      edgingWidth: this.cellSize / 6,
      edgingColor: color,
    },
  );
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top + this.cellSize * 11 / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
  drawRectangle(
    ctx,
    left,
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: ELEMENTS_COLORS.empty.background,
    },
  );
}

function renderElementsList(): void {
  const { blocks } = this.level;

  if (!blocks) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.elementsCanvas.getContext('2d');
  let index = 1;

  ctx.clearRect(0, 0, this.cellSize * 3, this.cellSize * 11);

  for (let i = 1; i <= 8; i += 1) {
    const elements: Block[] = blocks.filter((block: Block) => {
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
