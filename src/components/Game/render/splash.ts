import { GRID_WIDTH, PAGE_HEIGHT } from '../../../constants/game';
import { WINDOW_FONT } from '../../../constants/pages';

import { drawRectangle } from '../../../core/utils/drawing';

function renderSplash(): void {
  const ctx: CanvasRenderingContext2D = this.splashCanvas.getContext('2d');

  drawRectangle(
    ctx,
    0,
    0,
    this.cellSize * GRID_WIDTH,
    this.cellSize * PAGE_HEIGHT,
    {
      fillColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 3,
      edgingColor: 'rgb(189, 187, 189)',
    },
  );

  drawRectangle(
    ctx,
    this.cellSize / 6,
    this.cellSize / 6,
    this.cellSize * GRID_WIDTH - this.cellSize / 3,
    this.cellSize * PAGE_HEIGHT - this.cellSize / 3,
    {
      fillColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 12,
      edgingColor: 'rgb(94, 92, 94)',
    },
  );

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgb(0, 0, 0)';

  ctx.fillText('ROUND', this.cellSize * GRID_WIDTH / 2, this.cellSize * 3);
  ctx.fillText(
    this.level.id.toString().padStart(3, '0'),
    this.cellSize * GRID_WIDTH / 2,
    this.cellSize * 4.5,
  );
  ctx.fillText('SCORE', this.cellSize * GRID_WIDTH / 2, this.cellSize * 7);
  ctx.fillText(
    this.score.toString().padStart(8, '0'),
    this.cellSize * GRID_WIDTH / 2,
    this.cellSize * 8.5,
  );
}

export { renderSplash };
