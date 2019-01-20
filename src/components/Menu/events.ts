import { Game } from '../Game';

import { APP } from '../../constants/global';
import { FunctionalKeys } from '../../constants/menu';

import { renderPointer } from './render';

/**
 * Function creates all game's event listeners
 */
function setUpEventHandlers() {
  APP.eventListeners = {
    onKeyDown: keyDownHandler.bind(this),
  };

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
}

/**
 * Function removes all game's event listeners
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
