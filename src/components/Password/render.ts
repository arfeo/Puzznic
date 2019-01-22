import { ELEMENTS_COLORS, PASSWORD_SYMBOLS, WINDOW_FONT } from '../../constants/pages';

import { drawLineToAngle } from '../../utils/drawing';
import { animateCurrentSlot } from './animations';

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
  for (let i = 1; i <= 8; i += 1) {
    renderSlot.call(this, i);
  }

  animateCurrentSlot.call(this);
}

/**
 * Function renders a single password input slot by the given index number
 *
 * @param index
 * @param underlined
 */
function renderSlot(index: number, underlined = true) {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  const left: number = this.cellSize + this.cellSize * (index - 1) * 1.5 + (index >= 5 ? this.cellSize * 0.5 : 0);
  const top: number = this.cellSize * 4;

  ctx.clearRect(
    left - this.cellSize * 0.25,
    top - this.cellSize * 1.5,
    this.cellSize * 1.5,
    this.cellSize * 1.75,
  );

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText(this.password[index - 1], left + this.cellSize * 0.5, top - this.cellSize * 0.5);

  if (underlined) {
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

  ctx.clearRect(
    this.cellSize * 0.25,
    this.cellSize * 5.5,
    this.cellSize * 13.5,
    this.cellSize * 3,
  );

  for (let y = 0; y < PASSWORD_SYMBOLS.length; y += 1) {
    for (let x = 0; x < PASSWORD_SYMBOLS[y].length; x += 1) {
      const left: number = this.cellSize + this.cellSize * x * 1.5;
      const top: number = this.cellSize * 6 + this.cellSize * y;
      const isCurrent: boolean = this.currentSymbol[0] === y && this.currentSymbol[1] === x;

      ctx.font = WINDOW_FONT;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = ELEMENTS_COLORS.window.text;

      ctx.fillText(PASSWORD_SYMBOLS[y][x], left, top);

      if (isCurrent) {
        ctx.fillText('➧', left - this.cellSize * 0.5, top + this.cellSize / 24);
      }
    }
  }
}

/**
 * Function renders the password window's controls: NEXT, BACK, END
 */
function renderControls() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  const controlX: number = this.cellSize * 1.75;
  const controlY: number = this.cellSize * 10;

  ctx.clearRect(
    this.cellSize * 0.25,
    controlY - this.cellSize * 0.5,
    this.cellSize * 13.5,
    this.cellSize,
  );

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText('NEXT', controlX, controlY);
  ctx.fillText('BACK', controlX + this.cellSize * 4.5, controlY);
  ctx.fillText('END', controlX + this.cellSize * 9, controlY);

  if (this.currentControl > 0) {
    ctx.fillText(
      '➧',
      controlX - this.cellSize * 0.5 + this.cellSize * (this.currentControl - 1) * 4.5,
      controlY + this.cellSize / 24,
    );
  }
}

export {
  renderPasswordWindow,
  renderInputSlots,
  renderSlot,
  renderSymbols,
  renderControls,
};
