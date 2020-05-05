import { MapDefinitions } from '../../../constants/game';

import { drawLineToAngle, drawRectangle, drawTriangle } from '../../../core/utils/drawing';

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
          fillColor: 'rgb(255, 255, 255)',
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
          fillColor: 'rgb(96, 95, 96)',
        },
      );

      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        {
          fillColor: 'rgb(255, 255, 255)',
        },
      );

      drawTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize - this.cellSize / 6],
        {
          fillColor: 'rgb(190, 188, 191)',
        },
      );

      drawLineToAngle(
        ctx,
        left,
        top + this.cellSize - this.cellSize / 24,
        this.cellSize,
        0,
        {
          edgingColor: 'rgb(0, 0, 0)',
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
          edgingColor: 'rgb(0, 0, 0)',
          edgingWidth: this.cellSize / 12,
        },
      );
      break;
    }
    default: break;
  }
}

export { renderMapElement };
