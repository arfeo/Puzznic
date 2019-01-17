import { LEVELS } from '../../constants/levels';
import { TARGET_BLINK_DELAY } from '../../constants/game';

import { renderGameWindow, renderLevel } from './render';
import { setCellSize } from './utils';
import { removeEventHandlers, setUpEventHandlers } from './events';

import { IBlock, IKeysDown, ILevel } from '../../types/game';

class Game {
  level: ILevel;
  score: number;
  moves: number;
  cellSize: number;
  keysDown: IKeysDown;
  elementsCanvas: HTMLCanvasElement;
  gridCanvas: HTMLCanvasElement;
  blocksCanvas: HTMLCanvasElement;
  targetCanvas: HTMLCanvasElement;
  scoreCanvas: HTMLCanvasElement;
  animateTarget: number;
  targetBlinkDelay: number;
  currentBlock: IBlock;
  blocksMoving: number[];
  clearBonus: number;
  isLevelCompleted: boolean;
  isGameOver: boolean;

  constructor(level = 1, score = 0) {
    this.level = JSON.parse(JSON.stringify(LEVELS.filter((item: ILevel) => item.id === level)[0]));
    this.score = score;
    this.moves = 0;

    this.cellSize = setCellSize();

    this.targetBlinkDelay = TARGET_BLINK_DELAY;

    this.currentBlock = null;
    this.blocksMoving = [];
    this.clearBonus = 0;

    this.isLevelCompleted = false;
    this.isGameOver = false;

    this.render();
  }

  render() {
    renderGameWindow.call(this);
    renderLevel.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);

    cancelAnimationFrame(this.animateTarget);
  }
}

export { Game };
