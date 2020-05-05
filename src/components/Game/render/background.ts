import { drawLineToAngle, drawRectangle } from '../../../core/utils/drawing';

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
          fillColor: 'rgb(95, 94, 95)',
        },
      );

      drawLineToAngle(
        ctx,
        left,
        top,
        brickHeight,
        90,
        {
          edgingColor: 'rgb(191, 189, 191)',
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
          edgingColor: 'rgb(191, 189, 191)',
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
          edgingColor: 'rgb(0, 0, 0)',
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
          edgingColor: 'rgb(0, 0, 0)',
          edgingWidth: borderWidth,
        },
      );
    }
  }
}

export { renderBackground };
