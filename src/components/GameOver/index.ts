import { PageComponent } from '../../core/components/Page';

import { CELL_SIZE_VMIN } from '../../constants/global';

import { getCellSize } from '../../core/utils/game';
import { renderGameOverWindow } from './render';
import { keyDownHandler } from './events';

class GameOver extends PageComponent {
  private cellSize: number;
  private pageCanvas: HTMLCanvasElement;
  private isBordered: boolean;

  public init(isBordered = true): void {
    this.isBordered = isBordered;
    this.cellSize = getCellSize(CELL_SIZE_VMIN);

    this.appRoot = document.getElementById('root');
    this.pageCanvas = document.createElement('canvas');

    this.eventHandlers = [
      {
        target: document,
        type: 'keydown',
        listener: keyDownHandler.bind(this),
      },
    ];
  }

  public render(): HTMLElement {
    return renderGameOverWindow.call(this);
  }
}

export { GameOver };
