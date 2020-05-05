import { Game } from './index';
import { Menu } from '../Menu';

import { FunctionalKeys, TARGET_BLINK_DELAY } from '../../constants/game';

import { renderElementsList, renderMap } from './render';
import { checkBlockPosition, checkObstacle, checkTargetMove } from './actions';
import { animateBlockMove } from './animations';

function onKeyDown(event: KeyboardEvent): void {
  let key = '';

  switch (event.key) {
    case FunctionalKeys.Catch: {
      if (!this.isLevelCompleted) {
        key = 'catch';

        this.currentBlock = checkBlockPosition.call(this, this.level.target[1], this.level.target[0]);

        if (this.currentBlock !== false) {
          this.targetBlinkDelay = TARGET_BLINK_DELAY / 3;
        }
      }
      break;
    }
    case FunctionalKeys.Up: {
      if (!this.isLevelCompleted) {
        key = 'up';

        if (checkTargetMove.call(this, key)) {
          this.level.target = [this.level.target[0] - 1, this.level.target[1]];
        }
      }
      break;
    }
    case FunctionalKeys.Right: {
      if (!this.isLevelCompleted) {
        const nextX: number = this.level.target[1] + 1;
        const nextY: number = this.level.target[0];

        key = 'right';

        if (!this.keysDown.catch && checkTargetMove.call(this, key)) {
          this.level.target = [nextY, nextX];
        } else {
          if (!checkObstacle.call(this, nextX, nextY) && this.blocksMoving.length === 0) {
            animateBlockMove.call(this, this.currentBlock, nextX, nextY);
          }
        }
      }
      break;
    }
    case FunctionalKeys.Down: {
      if (!this.isLevelCompleted) {
        key = 'down';

        if (checkTargetMove.call(this, key)) {
          this.level.target = [this.level.target[0] + 1, this.level.target[1]];
        }
      }
      break;
    }
    case FunctionalKeys.Left: {
      if (!this.isLevelCompleted) {
        const nextX: number = this.level.target[1] - 1;
        const nextY: number = this.level.target[0];

        key = 'left';

        if (!this.keysDown.catch && checkTargetMove.call(this, key)) {
          this.level.target = [nextY, nextX];
        } else {
          if (!checkObstacle.call(this, nextX, nextY) && this.blocksMoving.length === 0) {
            animateBlockMove.call(this, this.currentBlock, nextX, nextY);
          }
        }
      }
      break;
    }
    case FunctionalKeys.SwitchIconMode: {
      if (this.blocksMoving.length === 0) {
        this.isIconModeOn = !this.isIconModeOn;

        renderMap.call(this);
        renderElementsList.call(this);
      }
      break;
    }
    case FunctionalKeys.GoToMenu: {
      this.destroy();

      new Menu();
      break;
    }
    case FunctionalKeys.Restart:
    case FunctionalKeys.Restart.toLowerCase(): {
      if (!this.isLevelCompleted) {
        this.destroy();

        new Game(this.level.id, this.score, this.isIconModeOn, this.blocksIcons);
      }
      break;
    }
    default: break;
  }

  if (Object.prototype.hasOwnProperty.call(this.keysDown, key)) {
    setActiveKey.call(this, key);
  }
}

function onKeyUp(): void {
  setActiveKey.call(this);

  this.targetBlinkDelay = TARGET_BLINK_DELAY;
  this.currentBlock = null;
}

function setActiveKey(key?: string): void {
  this.keysDown = {
    catch: false,
    up: false,
    right: false,
    down: false,
    left: false,
  };

  if (key) {
    this.keysDown[key] = true;
  }
}

export {
  onKeyDown,
  onKeyUp,
};
