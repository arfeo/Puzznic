import { PageComponent } from '../../core/components/Page';
import { Game } from '../Game';

import { CELL_SIZE_VMIN } from '../../constants/global';

import { getCellSize } from '../../core/utils/game';
import { renderLevelScoreWindow } from './render';
import { animateScorePoints } from './animations';
import { keyDownHandler } from './events';

class LevelScore extends PageComponent {
  private game: Game;
  private cellSize: number;
  private pageCanvas: HTMLCanvasElement;

  public animations: {
    animateScore: number;
  }

  public init(game: Game): void {
    this.game = game;

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

    this.animations = {
      animateScore: null,
    };
  }

  public afterMount(): void {
    animateScorePoints.call(this);
  }

  public render(): HTMLElement {
    return renderLevelScoreWindow.call(this);
  }
}

export { LevelScore };
