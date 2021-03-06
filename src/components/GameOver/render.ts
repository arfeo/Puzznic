import { WINDOW_FONT } from '../../constants/pages';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../../constants/game';

import { drawRectangle } from '../../core/utils/drawing';

function renderGameOverWindow(): HTMLElement {
  const pageWindow: HTMLElement = document.createElement('div');
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  pageWindow.className = 'page-window';
  this.pageCanvas.className = '-page-canvas';

  this.pageCanvas.width = this.cellSize * PAGE_WIDTH;
  this.pageCanvas.height = this.cellSize * PAGE_HEIGHT;

  drawRectangle(
    ctx,
    0,
    0,
    this.cellSize * PAGE_WIDTH,
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
    this.cellSize * PAGE_WIDTH - this.cellSize / 3,
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

  ctx.fillText('CONGRATULATIONS!', this.cellSize * 7, this.cellSize * 4);
  ctx.fillText('THE END', this.cellSize * 7, this.cellSize * 8);

  pageWindow.appendChild(this.pageCanvas);

  return pageWindow;
}

export { renderGameOverWindow };
