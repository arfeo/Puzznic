import { PageComponent } from '../../core/components/Page';

import { CELL_SIZE_VMIN } from '../../constants/global';

import { getCellSize } from '../../core/utils/game';
import { keyDownHandler } from './events';
import { renderPasswordWindow } from './render';

class Password extends PageComponent {
  private cellSize: number;
  private pageCanvas: HTMLCanvasElement;
  private password: string[];
  private currentSlot: number;
  private currentSymbol: number[];
  private currentControl: number;

  public animations: {
    animateCurrentSlot: number;
  };

  public init(): void {
    this.cellSize = getCellSize(CELL_SIZE_VMIN);

    this.appRoot = document.getElementById('root');
    this.pageCanvas = document.createElement('canvas');

    this.password = new Array(8).fill('');
    this.currentSlot = 1;
    this.currentSymbol = [0, 0];
    this.currentControl = 0;

    this.eventHandlers = [
      {
        target: document,
        type: 'keydown',
        listener: keyDownHandler.bind(this),
      },
    ];

    this.animations = {
      animateCurrentSlot: null,
    };
  }

  public render(): HTMLElement {
    return renderPasswordWindow.call(this);
  }
}

export { Password };
