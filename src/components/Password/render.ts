/**
 * Function renders the component window
 */
function renderPasswordWindow() {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  ctx.font = '5vmin Courier';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgb(0, 0, 0)';

  ctx.fillText('PASSWORD', this.cellSize * 7, this.cellSize);
}

export { renderPasswordWindow };
