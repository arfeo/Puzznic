import { renderBlockIcon } from './blockIcon';
import { drawLineToAngle, drawRectangle } from '../../../core/utils/drawing';

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

export { renderBlock };
