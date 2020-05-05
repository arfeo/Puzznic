import { ELEMENTS_COLORS, WINDOW_FONT } from '../../constants/pages';

import { drawRectangle } from '../../core/utils/drawing';

function renderGameOverWindow(): HTMLElement {
  const pageWindow: HTMLElement = document.createElement('div');
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  pageWindow.className = 'page-window';
  this.pageCanvas.className = '-page-canvas';

  this.pageCanvas.width = this.cellSize * 14;
  this.pageCanvas.height = this.cellSize * 12;

  drawRectangle(
    ctx,
    0,
    0,
    this.cellSize * 14,
    this.cellSize * 12,
    {
      fillColor: ELEMENTS_COLORS.window.background,
      edgingWidth: this.cellSize / 3,
      edgingColor: ELEMENTS_COLORS.window.outerBorder,
    },
  );

  drawRectangle(
    ctx,
    this.cellSize / 6,
    this.cellSize / 6,
    this.cellSize * 14 - this.cellSize / 3,
    this.cellSize * 12 - this.cellSize / 3,
    {
      fillColor: ELEMENTS_COLORS.window.background,
      edgingWidth: this.cellSize / 12,
      edgingColor: ELEMENTS_COLORS.window.innerBorder,
    },
  );

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText('CONGRATULATIONS!', this.cellSize * 7, this.cellSize * 4);
  ctx.fillText('THE END', this.cellSize * 7, this.cellSize * 8);

  pageWindow.appendChild(this.pageCanvas);

  return pageWindow;
}

export { renderGameOverWindow };
