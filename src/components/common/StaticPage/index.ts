import { setCellSize } from '../../../utils/common';

abstract class StaticPage {
  cellSize: number;
  staticPageCanvas: HTMLCanvasElement;
  init?(): void;
  abstract render(): void;

  protected constructor() {
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

    if (typeof this.init === 'function') {
      this.init();
    }

    this.render();
  }
}

export { StaticPage };
