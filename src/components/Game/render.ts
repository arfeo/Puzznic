import { MAP_ELEMENT_COLORS, MapDefinitions } from '../../constants/game';

import { drawFilledRectangle, drawFilledTriangle, drawLineToAngle } from '../../utils/drawing';

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

/**
 * Function renders game board as described in `constants/levels`
 * for the current level
 */
function renderLevelMap() {
  if (!this.level.map) {
    return;
  }

  for (let y = 0; y < this.level.map.length; y += 1) {
    for (let x = 0; x < this.level.map[y].length; x += 1) {
      renderMapElement.call(this, x, y);
    }
  }
}

/**
 * Render a single level map element depending on its type
 *
 * @param x
 * @param y
 */
function renderMapElement(x: number, y: number) {
  const ctx: CanvasRenderingContext2D = this.gridCanvas.getContext('2d');
  const elementType: number = this.level.map[y][x];
  const top: number = this.cellSize * y;
  const left: number = this.cellSize * x;

  switch (elementType) {
    case MapDefinitions.Empty: {
      drawFilledRectangle(
        ctx,
        left,
        top,
        this.cellSize,
        this.cellSize,
        MAP_ELEMENT_COLORS.empty.background,
      );
      break;
    }
    case MapDefinitions.Wall: {
      drawFilledRectangle(
        ctx,
        left,
        top,
        this.cellSize,
        this.cellSize,
        MAP_ELEMENT_COLORS.wall.border,
      );
      drawFilledTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        MAP_ELEMENT_COLORS.wall.background,
      );
      drawFilledTriangle(
        ctx,
        [left + this.cellSize / 12, top + this.cellSize - this.cellSize / 6],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize / 12],
        [left + this.cellSize - this.cellSize / 6, top + this.cellSize - this.cellSize / 6],
        MAP_ELEMENT_COLORS.wall.shadow,
      );
      drawLineToAngle(
        ctx,
        left,
        top + this.cellSize - this.cellSize / 24,
        this.cellSize,
        0,
        MAP_ELEMENT_COLORS.wall.margin,
        this.cellSize / 12,
      );
      drawLineToAngle(
        ctx,
        left + this.cellSize - this.cellSize / 24,
        top + this.cellSize,
        this.cellSize,
        270,
        MAP_ELEMENT_COLORS.wall.margin,
        this.cellSize / 12,
      );
      break;
    }
    default: break;
  }
}

export { renderGameWindow, renderLevelMap };
