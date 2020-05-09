import { ELEMENTS_COLORS } from '../../../constants/game';

import { drawCircle, drawLineToAngle, drawRectangle, drawTriangle } from '../../../core/utils/drawing';

function renderBlock(ctx: CanvasRenderingContext2D, type: number, left: number, top: number): void {
  drawRectangle(
    ctx,
    left,
    top,
    this.cellSize,
    this.cellSize,
    {
      fillColor: 'rgb(0, 0, 0)',
    },
  );

  drawRectangle(
    ctx,
    left + this.cellSize / 6,
    top + this.cellSize / 6,
    this.cellSize * 2 / 3,
    this.cellSize * 2 / 3,
    {
      fillColor: 'rgb(96, 95, 96)',
    },
  );

  drawLineToAngle(
    ctx,
    left + this.cellSize * 3 / 24,
    top + this.cellSize / 6,
    this.cellSize * 2 / 3,
    90,
    {
      edgingColor: 'rgb(187, 186, 188)',
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
      edgingColor: 'rgb(187, 186, 188)',
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
      edgingColor: 'rgb(96, 95, 96)',
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
      edgingColor: 'rgb(96, 95, 96)',
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
      fillColor: 'rgb(255, 255, 255)',
    },
  );

  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: 'rgb(255, 255, 255)',
    },
  );

  drawRectangle(
    ctx,
    left + this.cellSize * 11 / 12,
    top + this.cellSize * 11 / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: 'rgb(255, 255, 255)',
    },
  );

  drawRectangle(
    ctx,
    left,
    top + this.cellSize * 11 / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: 'rgb(255, 255, 255)',
    },
  );

  if (this.isIconModeOn) {
    renderBlockIcon.call(this, ctx, this.blocksIcons[type], left, top);
  } else {
    ctx.font = '3vmin Courier';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillText(
      type.toString(),
      left + this.cellSize * 7 / 12,
      top + this.cellSize * 7 / 12,
    );

    ctx.fillStyle = 'rgb(255, 255, 255)';
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

export { renderBlock };
