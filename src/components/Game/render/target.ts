import { drawRectangle } from '../../../core/utils/drawing';

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
    top + this.cellSize - this.cellSize / 12,
    this.cellSize / 12,
    this.cellSize / 12,
    {
      fillColor: 'rgb(255, 255, 255)',
    },
  );
}

export { renderTarget };
