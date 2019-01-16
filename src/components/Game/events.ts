import { APP } from '../../constants/global';
import { FunctionalKeys, TARGET_BLINK_DELAY } from '../../constants/game';

import { checkBlockPosition, checkTargetMove } from './actions';

/**
 * Function creates all game's event listeners
 */
function setUpEventHandlers() {
  APP.eventListeners = {
    onKeyDown: keyDownHandler.bind(this),
    onKeyUp: keyUpHandler.bind(this),
  };

  setActiveKey.call(this);

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
  document.body.addEventListener('keyup', APP.eventListeners.onKeyUp);
}

/**
 * Function removes all game's event listeners
 */
function removeEventHandlers() {
  document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);
  document.body.removeEventListener('keyup', APP.eventListeners.onKeyUp);
}

/**
 * Function fires at key down event
 *
 * @param event
 */
function keyDownHandler(event: KeyboardEvent) {
  let key = '';

  switch (event.key) {
    case FunctionalKeys.Catch: {
      key = 'catch';

      if (checkBlockPosition.call(this, this.level.target[1], this.level.target[0])) {
        this.targetBlinkDelay = TARGET_BLINK_DELAY / 3;
      }
      break;
    }
    case FunctionalKeys.Up: {
      key = 'up';

      if (checkTargetMove.call(this, key)) {
        this.level.target = [this.level.target[0] - 1, this.level.target[1]];
      }
      break;
    }
    case FunctionalKeys.Right: {
      key = 'right';

      if (!this.keysDown.catch && checkTargetMove.call(this, key)) {
        this.level.target = [this.level.target[0], this.level.target[1] + 1];
      }
      break;
    }
    case FunctionalKeys.Down: {
      key = 'down';

      if (checkTargetMove.call(this, key)) {
        this.level.target = [this.level.target[0] + 1, this.level.target[1]];
      }
      break;
    }
    case FunctionalKeys.Left: {
      key = 'left';

      if (!this.keysDown.catch && checkTargetMove.call(this, key)) {
        this.level.target = [this.level.target[0], this.level.target[1] - 1];
      }
      break;
    }
    default: break;
  }

  if (this.keysDown.hasOwnProperty(key)) {
    setActiveKey.call(this, key);
  }
}

/**
 * Function fires at key up event
 */
function keyUpHandler() {
  setActiveKey.call(this);

  this.targetBlinkDelay = TARGET_BLINK_DELAY;
}

/**
 * Function stores currently pressed key (if any) in a state variable;
 * if no key type is passed, all previously stored states are cleared
 *
 * @param type
 */
function setActiveKey(type?: string) {
  this.keysDown = {
    catch: false,
    up: false,
    right: false,
    down: false,
    left: false,
  };

  if (type) {
    this.keysDown[type] = true;
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
};
