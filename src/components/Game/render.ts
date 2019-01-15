/**
 * Function creates game window element, game panel and all needed canvases
 */
function renderGameWindow() {
  const appRoot: HTMLElement = document.getElementById('root');
  const gameWindow: HTMLElement = document.createElement('div');
  const backgroundCanvas: HTMLCanvasElement = document.createElement('canvas');
  const gridContainer: HTMLElement = document.createElement('div');

  this.elementsCanvas = document.createElement('canvas');
  this.gridCanvas = document.createElement('canvas');

  gameWindow.className = 'gameWindow';
  backgroundCanvas.className = '-background-canvas';
  gridContainer.className = 'gridContainer';
  this.elementsCanvas.className = '-elements-canvas';
  this.gridCanvas.className = '-grid-canvas';

  backgroundCanvas.width = this.cellSize * 14;
  backgroundCanvas.height = this.cellSize * 12;
  this.elementsCanvas.width = this.cellSize * 3;
  this.elementsCanvas.height = this.cellSize * 11;
  this.gridCanvas.width = this.cellSize * 10;
  this.gridCanvas.height = this.cellSize * 12;

  appRoot.appendChild(gameWindow);
  gameWindow.appendChild(backgroundCanvas);
  gameWindow.appendChild(gridContainer);
  gridContainer.appendChild(this.elementsCanvas);
  gridContainer.appendChild(this.gridCanvas);
}

export { renderGameWindow };
