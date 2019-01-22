import { Menu } from '../Menu';

import { APP } from '../../constants/global';
import { FunctionalKeys, PASSWORD_SYMBOLS } from '../../constants/pages';

import { renderInputSlots, renderSymbols } from './render';

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
      if (PASSWORD_SYMBOLS[this.currentSymbol[0] - 1] !== undefined) {
        this.currentSymbol[0] -= 1;
      }

      renderSymbols.call(this);
      break;
    }
    case FunctionalKeys.Right: {
      if (PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1] + 1] !== undefined) {
        this.currentSymbol[1] += 1;
      } else if (PASSWORD_SYMBOLS[this.currentSymbol[0] + 1] !== undefined) {
        this.currentSymbol[0] += 1;
        this.currentSymbol[1] = 0;
      }

      renderSymbols.call(this);
      break;
    }
    case FunctionalKeys.Down: {
      if (PASSWORD_SYMBOLS[this.currentSymbol[0] + 1] !== undefined) {
        this.currentSymbol[0] += 1;
      }

      renderSymbols.call(this);
      break;
    }
    case FunctionalKeys.Left: {
      if (PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1] - 1] !== undefined) {
        this.currentSymbol[1] -= 1;
      } else if (PASSWORD_SYMBOLS[this.currentSymbol[0] - 1] !== undefined) {
        this.currentSymbol[0] -= 1;
        this.currentSymbol[1] = PASSWORD_SYMBOLS[this.currentSymbol[0]].length - 1;
      }

      renderSymbols.call(this);
      break;
    }
    case FunctionalKeys.Continue: {
      this.password[this.currentSlot - 1] = PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1]];

      if (this.currentSlot < 8) {
        this.currentSlot += 1;
      }

      renderInputSlots.call(this);
      break;
    }
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
