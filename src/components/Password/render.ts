import { ELEMENTS_COLORS, WINDOW_FONT } from '../../constants/pages';

/**
 * Function renders the page window
 */
function renderPasswordWindow() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText('PASSWORD', this.cellSize * 7, this.cellSize);
}

export { renderPasswordWindow };
