import {
  MENU_ELEMENTS_COLORS,
  LOGO_FONT,
  MENU_ITEMS_FONT,
} from '../../constants/menu';

/**
 * Function creates menu window element and all needed canvases
 */
function renderMenuWindow() {
  const appRoot: HTMLElement = document.getElementById('root');
  const menuWindow: HTMLElement = document.createElement('div');
  this.menuCanvas = document.createElement('canvas');

  menuWindow.className = 'menuWindow';
  this.menuCanvas.className = '-menu-canvas';

  this.menuCanvas.width = this.cellSize * 14;
  this.menuCanvas.height = this.cellSize * 12;

  appRoot.innerHTML = '';

  appRoot.appendChild(menuWindow);
  menuWindow.appendChild(this.menuCanvas);
}

/**
 * Function renders the menu, including logo
 */
function renderMenuContent() {
  const ctx: CanvasRenderingContext2D = this.menuCanvas.getContext('2d');

  // Logo
  ctx.save();

  ctx.font = LOGO_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = MENU_ELEMENTS_COLORS.logo.shadow;
  ctx.shadowOffsetX = this.cellSize / 3;
  ctx.shadowOffsetY = this.cellSize / 3;
  ctx.shadowBlur = 0;
  ctx.lineWidth = this.cellSize / 3;
  ctx.strokeStyle = MENU_ELEMENTS_COLORS.logo.stroke;
  ctx.fillStyle = MENU_ELEMENTS_COLORS.logo.text;

  ctx.strokeText('PUZZNIC', this.cellSize * 6.6, this.cellSize * 2.5);
  ctx.fillText('PUZZNIC', this.cellSize * 6.7, this.cellSize * 2.5);

  // Menu items
  ctx.restore();

  ctx.font = MENU_ITEMS_FONT;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillStyle = MENU_ELEMENTS_COLORS.items.text;

  ctx.fillText('Play', this.cellSize * 5, this.cellSize * 7.5);
  ctx.fillText('Password', this.cellSize * 5, this.cellSize * 9);
}

export { renderMenuWindow, renderMenuContent };
