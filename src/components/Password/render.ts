import { ELEMENTS_COLORS, PASSWORD_COMPONENT_FONT } from '../../constants/password';

/**
 * Function renders the password window
 */
function renderPasswordWindow() {
  const ctx: CanvasRenderingContext2D = this.staticPageCanvas.getContext('2d');

  ctx.font = PASSWORD_COMPONENT_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.element.text;

  ctx.fillText('PASSWORD', this.cellSize * 7, this.cellSize);
}

export { renderPasswordWindow };
