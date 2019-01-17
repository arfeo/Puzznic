import { renderMenuContent, renderMenuWindow } from './render';
import { setCellSize } from '../../utils/common';
import { setUpEventHandlers, removeEventHandlers } from './events';

class Menu {
  cellSize: number;
  menuCanvas: HTMLCanvasElement;
  currentItem: number;

  constructor() {
    this.cellSize = setCellSize();

    this.currentItem = 1;

    this.render();
  }

  render() {
    renderMenuWindow.call(this);
    renderMenuContent.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }
}

export { Menu };
