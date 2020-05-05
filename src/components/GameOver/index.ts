import { PageComponent } from '../../core/components/Page';
import { Menu } from '../Menu';

import { CELL_SIZE_VMIN } from '../../constants/global';
import { FunctionalKeys } from '../../constants/pages';

import { getCellSize } from '../../core/utils/game';
import { renderGameOverWindow } from './render';

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
        listener: (event: KeyboardEvent) => {
          if (event.key === FunctionalKeys.Continue) {
            this.destroy();

            new Menu();
          }
        },
      },
    ];
  }

  public render(): HTMLElement {
    return renderGameOverWindow.call(this);
  }
}

export { GameOver };
