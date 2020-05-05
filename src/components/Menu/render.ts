import {
  ELEMENTS_COLORS,
  LOGO_FONT,
  WINDOW_FONT,
} from '../../constants/pages';

function renderMenuContent(): HTMLElement {
  const pageWindow: HTMLElement = document.createElement('div');
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

  pageWindow.className = 'page-window';
  this.pageCanvas.className = '-page-canvas';

  this.pageCanvas.width = this.cellSize * 14;
  this.pageCanvas.height = this.cellSize * 12;

  // Logo
  ctx.save();

  ctx.font = LOGO_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = ELEMENTS_COLORS.logo.shadow;
  ctx.shadowOffsetX = this.cellSize / 3;
  ctx.shadowOffsetY = this.cellSize / 3;
  ctx.shadowBlur = 0;
  ctx.lineWidth = this.cellSize / 3;
  ctx.strokeStyle = ELEMENTS_COLORS.logo.stroke;
  ctx.fillStyle = ELEMENTS_COLORS.logo.text;

  ctx.strokeText('PUZZNIC', this.cellSize * 6.6, this.cellSize * 2.5);
  ctx.fillText('PUZZNIC', this.cellSize * 6.7, this.cellSize * 2.5);

  // Menu items
  ctx.restore();

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

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

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText('➧', this.cellSize * 4, this.cellSize * (yOffset + 7.55));
}

export { renderMenuContent, renderPointer };
