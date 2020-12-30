import { GRID_WIDTH, PAGE_HEIGHT, PAGE_WIDTH } from '../../../constants/game';

import { renderBackground } from './background';
import { renderMap } from './map';
import { renderElementsList } from './elementsList';
import { renderSplash } from './splash';

function renderGameWindow(): HTMLElement {
  const gameWindow: HTMLElement = document.createElement('div');
  const gameBoard: HTMLElement = document.createElement('div');
  const gridContainer: HTMLElement = document.createElement('div');

  gameWindow.className = 'game-window';
  gameBoard.className = 'game-board';
  gridContainer.className = 'grid-container';

  this.splashCanvas.className = '-splash-canvas';
  this.backgroundCanvas.className = '-background-canvas';
  this.elementsCanvas.className = '-elements-canvas';
  this.gridCanvas.className = '-grid-canvas';
  this.blocksCanvas.className = '-blocks-canvas';
  this.targetCanvas.className = '-target-canvas';
  this.bonusCanvas.className = '-bonus-canvas';

  this.splashCanvas.width = this.cellSize * GRID_WIDTH;
  this.splashCanvas.height = this.cellSize * PAGE_HEIGHT;
  this.backgroundCanvas.width = this.cellSize * PAGE_WIDTH;
  this.backgroundCanvas.height = this.cellSize * PAGE_HEIGHT;
  this.elementsCanvas.width = this.cellSize * 3;
  this.elementsCanvas.height = this.cellSize * 11;
  this.gridCanvas.width = this.cellSize * GRID_WIDTH;
  this.gridCanvas.height = this.cellSize * PAGE_HEIGHT;
  this.blocksCanvas.width = this.cellSize * GRID_WIDTH;
  this.blocksCanvas.height = this.cellSize * PAGE_HEIGHT;
  this.targetCanvas.width = this.cellSize * GRID_WIDTH;
  this.targetCanvas.height = this.cellSize * PAGE_HEIGHT;
  this.bonusCanvas.width = this.cellSize * GRID_WIDTH;
  this.bonusCanvas.height = this.cellSize * PAGE_HEIGHT;

  gameWindow.appendChild(this.backgroundCanvas);
  gameWindow.appendChild(gameBoard);
  gameBoard.appendChild(this.elementsCanvas);
  gameBoard.appendChild(gridContainer);
  gridContainer.appendChild(this.splashCanvas);
  gridContainer.appendChild(this.gridCanvas);
  gridContainer.appendChild(this.blocksCanvas);
  gridContainer.appendChild(this.targetCanvas);
  gridContainer.appendChild(this.bonusCanvas);

  renderBackground.call(this);
  renderMap.call(this);
  renderElementsList.call(this);

  this.isSplashOn && renderSplash.call(this);

  return gameWindow;
}

export { renderGameWindow };
