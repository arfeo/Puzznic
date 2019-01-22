import { ELEMENTS_COLORS, PASSWORD_SYMBOLS, WINDOW_FONT } from '../../constants/pages';

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

  ctx.fillText('PASSWORD', this.cellSize * 7, this.cellSize * 1.5);
}

/**
 * Function renders 8 password input slots divided by space after the fourth one
 */
function renderInputSlots() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  for (let i = 0; i < 8; i += 1) {
    const left: number = this.cellSize + this.cellSize * i * 1.5 + (i >= 4 ? this.cellSize * 0.5 : 0);
    const top: number = this.cellSize * 4;

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

/**
 * Function renders the block of symbols as defined in `PASSWORD_SYMBOLS` array
 */
function renderSymbols() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  for (let y = 0; y < PASSWORD_SYMBOLS.length; y += 1) {
    for (let x = 0; x < PASSWORD_SYMBOLS[y].length; x += 1) {
      const left: number = this.cellSize + this.cellSize * x * 1.5;
      const top: number = this.cellSize * 5.5 + this.cellSize * y;

      ctx.font = WINDOW_FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = ELEMENTS_COLORS.window.text;

      ctx.fillText(PASSWORD_SYMBOLS[y][x], left, top);
    }
  }
}

export {
  renderPasswordWindow,
  renderInputSlots,
  renderSymbols,
};
