import { WINDOW_FONT } from '../../constants/pages';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../../constants/game';

import { drawTriangle } from '../../core/utils/drawing';

function renderMenuContent(): HTMLElement {
  const pageWindow: HTMLElement = document.createElement('div');
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  pageWindow.className = 'page-window';
  this.pageCanvas.className = '-page-canvas';

  this.pageCanvas.width = this.cellSize * PAGE_WIDTH;
  this.pageCanvas.height = this.cellSize * PAGE_HEIGHT;

  // Logo
  ctx.save();

  ctx.font = 'italic 20vmin Impact';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgb(0, 0, 0)';
  ctx.shadowOffsetX = this.cellSize / 3;
  ctx.shadowOffsetY = this.cellSize / 3;
  ctx.shadowBlur = 0;
  ctx.lineWidth = this.cellSize / 3;
  ctx.strokeStyle = 'rgb(189, 187, 189)';
  ctx.fillStyle = 'rgb(95, 94, 95)';

  ctx.strokeText('PUZZNIC', this.cellSize * 6.6, this.cellSize * 2.5);
  ctx.fillText('PUZZNIC', this.cellSize * 6.7, this.cellSize * 2.5);

  // Menu items
  ctx.restore();

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = 'rgb(0, 0, 0)';

  ctx.fillText('Play', this.cellSize * 5, this.cellSize * 7.5);
  ctx.fillText('Password', this.cellSize * 5, this.cellSize * 9);

  renderPointer.call(this);

  pageWindow.appendChild(this.pageCanvas);

  return pageWindow;
}

function renderPointer(): void {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  const yOffset: number = (this.currentItem - 1) * 1.5;

  ctx.clearRect(
    this.cellSize * 3.5,
    this.cellSize * 6.5,
    this.cellSize * 1.4,
    this.cellSize * 2.5,
  );

  drawTriangle(
    ctx,
    [this.cellSize * 4, this.cellSize * (yOffset + 6.8)],
    [this.cellSize * 4 + 30, this.cellSize * (yOffset + 7.1)],
    [this.cellSize * 4, this.cellSize * (yOffset + 7.4)],
    {
      fillColor: 'rgb(0, 0, 0)',
    },
  );
}

export { renderMenuContent, renderPointer };
