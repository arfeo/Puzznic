import { APP } from '../../constants/global';
import { MenuFunctionalKeys } from '../../constants/menu';

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
    case MenuFunctionalKeys.Up: {
      console.log('Up');
      break;
    }
    case MenuFunctionalKeys.Down: {
      console.log('Down');
      break;
    }
    case MenuFunctionalKeys.Continue: {
      console.log('Enter');
      break;
    }
    default: break;
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
};
