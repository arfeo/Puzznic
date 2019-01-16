import { APP } from '../../constants/global';
import { FunctionalKeys } from '../../constants/game';

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
  switch (event.key) {
    case FunctionalKeys.Catch: {
      setActiveKey.call(this, 'catch');
      break;
    }
    case FunctionalKeys.Right: {
      if (!this.keysDown.catch) {
        this.level.target = [this.level.target[0], this.level.target[1] + 1];
      }

      setActiveKey.call(this, 'right');
      break;
    }
    case FunctionalKeys.Left: {
      if (!this.keysDown.catch) {
        this.level.target = [this.level.target[0], this.level.target[1] - 1];
      }

      setActiveKey.call(this, 'left');
      break;
    }
    case FunctionalKeys.Top: {
      this.level.target = [this.level.target[0] - 1, this.level.target[1]];

      setActiveKey.call(this, 'top');
      break;
    }
    case FunctionalKeys.Down: {
      this.level.target = [this.level.target[0] + 1, this.level.target[1]];

      setActiveKey.call(this, 'down');
      break;
    }
    default: break;
  }
}

/**
 * Function fires at key up event
 */
function keyUpHandler() {
  setActiveKey.call(this);
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
    right: false,
    left: false,
    top: false,
    down: false,
  };

  if (type) {
    this.keysDown[type] = true;
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
};
