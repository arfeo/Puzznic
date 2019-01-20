import { LEVELS } from '../../constants/levels';
import { TARGET_BLINK_DELAY } from '../../constants/game';

import { renderGameWindow, renderLevel } from './render';
import { setCellSize } from '../../utils/common';
import { removeEventHandlers, setUpEventHandlers } from './events';
import { generateBlocksIconsCorrelation } from './utils';

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
  animateScore: number;
  targetBlinkDelay: number;
  currentBlock: IBlock;
  blocksMoving: number[];
  clearBonus: number;
  blocksIcons: { [key: number]: number };
  isIconModeOn: boolean;
  isLevelCompleted: boolean;
  isGameOver: boolean;

  constructor(level = 1, score = 0, isIconMode = true, icons: { [key: number]: number } = {}) {
    this.level = JSON.parse(JSON.stringify(LEVELS.find((item: ILevel) => item.id === level)));
    this.score = score;
    this.moves = 0;

    this.cellSize = setCellSize();
    this.blocksIcons = Object.keys(icons).length > 0 ? icons : generateBlocksIconsCorrelation();

    this.targetBlinkDelay = TARGET_BLINK_DELAY;

    this.currentBlock = null;
    this.blocksMoving = [];
    this.clearBonus = 0;

    this.isIconModeOn = isIconMode;
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
    cancelAnimationFrame(this.animateScore);
  }
}

export { Game };
