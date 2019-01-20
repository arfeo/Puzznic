import { Menu } from '../Menu';

import { APP } from '../../constants/global';
import { FunctionalKeys } from '../../constants/pages';

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
    case FunctionalKeys.GoToMenu: {
      this.destroy();

      APP.pageInstance = new Menu();
      break;
    }
    default: break;
  }
}

export {
  setUpEventHandlers,
  removeEventHandlers,
};
