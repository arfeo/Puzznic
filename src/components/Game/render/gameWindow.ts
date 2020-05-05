import { renderBackground } from './background';
import { renderMap } from './map';
import { renderElementsList } from './elementsList';

function renderGameWindow(): HTMLElement {
  const gameWindow: HTMLElement = document.createElement('div');
  const gameBoard: HTMLElement = document.createElement('div');
  const gridContainer: HTMLElement = document.createElement('div');

  gameWindow.className = 'game-window';
  gameBoard.className = 'game-board';
  gridContainer.className = 'grid-container';
  this.backgroundCanvas.className = '-background-canvas';
  this.elementsCanvas.className = '-elements-canvas';

  this.gridCanvas.className = '-grid-canvas';
  this.blocksCanvas.className = '-blocks-canvas';
  this.targetCanvas.className = '-target-canvas';
  this.bonusCanvas.className = '-bonus-canvas';

  this.backgroundCanvas.width = this.cellSize * 14;
  this.backgroundCanvas.height = this.cellSize * 12;
  this.elementsCanvas.width = this.cellSize * 3;
  this.elementsCanvas.height = this.cellSize * 11;
  this.gridCanvas.width = this.cellSize * 10;
  this.gridCanvas.height = this.cellSize * 12;
  this.blocksCanvas.width = this.cellSize * 10;
  this.blocksCanvas.height = this.cellSize * 12;
  this.targetCanvas.width = this.cellSize * 10;
  this.targetCanvas.height = this.cellSize * 12;
  this.bonusCanvas.width = this.cellSize * 10;
  this.bonusCanvas.height = this.cellSize * 12;

  gameWindow.appendChild(this.backgroundCanvas);
  gameWindow.appendChild(gameBoard);
  gameBoard.appendChild(this.elementsCanvas);
  gameBoard.appendChild(gridContainer);
  gridContainer.appendChild(this.gridCanvas);
  gridContainer.appendChild(this.blocksCanvas);
  gridContainer.appendChild(this.targetCanvas);
  gridContainer.appendChild(this.bonusCanvas);

  renderBackground.call(this);
  renderMap.call(this);
  renderElementsList.call(this);

  return gameWindow;
}

export { renderGameWindow };
