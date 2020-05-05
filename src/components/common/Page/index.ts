import { Game } from '../../Game';

import { ELEMENTS_COLORS } from '../../../constants/pages';
import { CELL_SIZE_VMIN } from '../../../constants/global';

import { getCellSize } from '../../../core/utils/game';
import { drawRectangle } from '../../../core/utils/drawing';

abstract class Page {
  game: Game;
  cellSize: number;
  pageCanvas: HTMLCanvasElement;
  init?(game?: Game): void;
  abstract render(): void;

  constructor(bordered = true, game?: Game) {
    const appRoot: HTMLElement = document.getElementById('root');
    const pageWindow: HTMLElement = document.createElement('div');

    this.cellSize = getCellSize(CELL_SIZE_VMIN);

    this.pageCanvas = document.createElement('canvas');

    pageWindow.className = 'page-window';
    this.pageCanvas.className = '-page-canvas';

    this.pageCanvas.width = this.cellSize * 14;
    this.pageCanvas.height = this.cellSize * 12;

    while (appRoot.firstChild) {
      appRoot.removeChild(appRoot.firstChild);
    }

    appRoot.appendChild(pageWindow);
    pageWindow.appendChild(this.pageCanvas);

    if (bordered) {
      const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

      drawRectangle(
        ctx,
        0,
        0,
        this.cellSize * 14,
        this.cellSize * 12,
        {
          fillColor: ELEMENTS_COLORS.window.background,
          edgingWidth: this.cellSize / 3,
          edgingColor: ELEMENTS_COLORS.window.outerBorder,
        },
      );
      drawRectangle(
        ctx,
        this.cellSize / 6,
        this.cellSize / 6,
        this.cellSize * 14 - this.cellSize / 3,
        this.cellSize * 12 - this.cellSize / 3,
        {
          fillColor: ELEMENTS_COLORS.window.background,
          edgingWidth: this.cellSize / 12,
          edgingColor: ELEMENTS_COLORS.window.innerBorder,
        },
      );
    }

    if (typeof this.init === 'function') {
      this.init(game);
    }

    this.render();
  }
}

export { Page };
