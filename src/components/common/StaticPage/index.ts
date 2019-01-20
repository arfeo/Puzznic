import { Game } from '../../Game';

import { setCellSize } from '../../../utils/common';
import { drawRectangle } from '../../../utils/drawing';

abstract class StaticPage {
  game: Game;
  cellSize: number;
  staticPageCanvas: HTMLCanvasElement;
  init?(game?: Game): void;
  abstract render(): void;

  protected constructor(bordered = true, game?: Game) {
    const appRoot: HTMLElement = document.getElementById('root');
    const staticPageWindow: HTMLElement = document.createElement('div');
    this.staticPageCanvas = document.createElement('canvas');

    this.cellSize = setCellSize();

    staticPageWindow.className = 'staticPageWindow';
    this.staticPageCanvas.className = '-static-page-canvas';

    this.staticPageCanvas.width = this.cellSize * 14;
    this.staticPageCanvas.height = this.cellSize * 12;

    appRoot.innerHTML = '';

    appRoot.appendChild(staticPageWindow);
    staticPageWindow.appendChild(this.staticPageCanvas);

    if (bordered) {
      const ctx: CanvasRenderingContext2D = this.staticPageCanvas.getContext('2d');

      drawRectangle(
        ctx,
        0,
        0,
        this.cellSize * 14,
        this.cellSize * 12,
        'rgb(255, 255, 255)',
        this.cellSize / 3,
        'rgb(189, 187, 189)',
      );
      drawRectangle(
        ctx,
        this.cellSize / 6,
        this.cellSize / 6,
        this.cellSize * 14 - this.cellSize / 3,
        this.cellSize * 12 - this.cellSize / 3,
        'rgb(255, 255, 255)',
        this.cellSize / 12,
        'rgb(94, 92, 94)',
      );
    }

    if (typeof this.init === 'function') {
      this.init(game);
    }

    this.render();
  }
}

export { StaticPage };
