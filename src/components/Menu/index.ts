import { PageComponent } from '../../core/components/Page';

import { CELL_SIZE_VMIN } from '../../constants/global';

import { getCellSize } from '../../core/utils/game';
import { keyDownHandler } from './events';
import { renderMenuContent } from './render';

class Menu extends PageComponent {
  private cellSize: number;
  private pageCanvas: HTMLCanvasElement;
  private currentItem: number;

  public init(): void {
    this.cellSize = getCellSize(CELL_SIZE_VMIN);

    this.appRoot = document.getElementById('root');
    this.pageCanvas = document.createElement('canvas');

    this.currentItem = 1;

    this.eventHandlers = [
      {
        target: document,
        type: 'keydown',
        listener: keyDownHandler.bind(this),
      },
    ];
  }

  public render(): HTMLElement {
    return renderMenuContent.call(this);
  }
}

export { Menu };
