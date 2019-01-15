import { LEVELS } from '../../constants/levels';

import { renderGameWindow, renderLevelMap } from './render';
import { setCellSize } from './utils';

import { ILevel } from '../../types/game';

class Game {
  level: ILevel;
  score: number;
  moves: number;
  cellSize: number;
  elementsCanvas: HTMLCanvasElement;
  gridCanvas: HTMLCanvasElement;
  blocksCanvas: HTMLCanvasElement;

  constructor(level = 1, score = 0) {
    this.level = JSON.parse(JSON.stringify(LEVELS.filter((item: ILevel) => item.id === level)[0]));
    this.score = score;
    this.moves = 0;

    this.cellSize = setCellSize();

    this.render();
  }

  render() {
    renderGameWindow.call(this);
    renderLevelMap.call(this);
  }

  destroy() {
    // ...
  }
}

export { Game };
