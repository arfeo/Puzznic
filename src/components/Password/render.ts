import { ELEMENTS_COLORS, WINDOW_FONT } from '../../constants/pages';

import { drawLineToAngle } from '../../utils/drawing';

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

/**
 * Function renders 8 password input slots divided by space after the fourth one
 */
function renderInputSlots() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  for (let i = 0; i < 8; i += 1) {
    const left: number = this.cellSize + this.cellSize * 1.5 * i + (i >= 4 ? this.cellSize * 0.5 : 0);
    const top: number = this.cellSize * 3;

    drawLineToAngle(
      ctx,
      left,
      top,
      this.cellSize,
      0,
      'black',
      2,
    );
  }
}

export { renderPasswordWindow, renderInputSlots };
