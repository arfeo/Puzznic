import { Game } from '../Game';
import { Password } from '../Password';

import { APP } from '../../constants/global';
import { FunctionalKeys } from '../../constants/pages';

import { renderPointer } from './render';

/**
 * Function creates all components's event listeners
 */
function setUpEventHandlers() {
  APP.eventListeners = {
    onKeyDown: keyDownHandler.bind(this),
  };

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
}

/**
 * Function removes all components's event listeners
 */
function removeEventHandlers() {
  document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);
}

/**
 * Function fires at key down event
 *
 * @param event
 */
function keyDownHandler(event: KeyboardEvent) {
  switch (event.key) {
    case FunctionalKeys.Up: {
      if (this.currentItem > 1) {
        this.currentItem -= 1;
        renderPointer.call(this);
      }
      break;
    }
    case FunctionalKeys.Down: {
      if (this.currentItem < 2) {
        this.currentItem += 1;
        renderPointer.call(this);
      }
      break;
    }
    case FunctionalKeys.Continue: {
      switch (this.currentItem) {
        case 1: {
          this.destroy();

          APP.pageInstance = new Game();
          break;
        }
        case 2: {
          this.destroy();

          APP.pageInstance = new Password();
          break;
        }
        default: break;
      }
      break;
    }
    default: break;
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
};
