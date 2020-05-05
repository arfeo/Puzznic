import { Menu } from '../Menu';
import { Game } from '../Game';

import { APP } from '../../constants/global';
import { LEVELS } from '../../constants/levels';
import { FunctionalKeys, PASSWORD_SYMBOLS } from '../../constants/pages';

import { renderControls, renderInputSlots, renderSymbols } from './render';

import { Level } from '../Game/types';

function setUpEventHandlers(): void {
  APP.eventListeners = {
    onKeyDown: keyDownHandler.bind(this),
  };

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
}

function removeEventHandlers(): void {
  document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);
}

function keyDownHandler(event: KeyboardEvent): void {
  switch (event.key) {
    case FunctionalKeys.Up: {
      if (this.currentControl > 0) {
        let symbolX: number;

        switch (this.currentControl) {
          case 1: {
            symbolX = 1;
            break;
          }
          case 2: {
            symbolX = 4;
            break;
          }
          case 3: {
            symbolX = 7;
            break;
          }
          default: break;
        }

        this.currentSymbol = [2, symbolX];
        this.currentControl = 0;
      } else {
        if (PASSWORD_SYMBOLS[this.currentSymbol[0] - 1] !== undefined) {
          this.currentSymbol[0] -= 1;
        }
      }

      renderSymbols.call(this);
      renderControls.call(this);
      break;
    }
    case FunctionalKeys.Right: {
      if (this.currentControl > 0) {
        if (this.currentControl > 0 && this.currentControl < 3) {
          this.currentControl += 1;
        }
      } else {
        if (PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1] + 1] !== undefined) {
          this.currentSymbol[1] += 1;
        } else if (PASSWORD_SYMBOLS[this.currentSymbol[0] + 1] !== undefined) {
          this.currentSymbol[0] += 1;
          this.currentSymbol[1] = 0;
        }
      }

      renderSymbols.call(this);
      renderControls.call(this);
      break;
    }
    case FunctionalKeys.Down: {
      if (PASSWORD_SYMBOLS[this.currentSymbol[0] + 1] !== undefined) {
        this.currentSymbol[0] += 1;
      } else {
        if (this.currentControl === 0) {
          this.currentControl = this.currentSymbol[1] >= 0 && this.currentSymbol[1] < 3
            ? 1 : this.currentSymbol[1] >= 3 && this.currentSymbol[1] < 6
              ? 2 : 3;
        }

        this.currentSymbol = [-1, -1];
      }

      renderSymbols.call(this);
      renderControls.call(this);
      break;
    }
    case FunctionalKeys.Left: {
      if (this.currentControl > 0) {
        if (this.currentControl > 1 && this.currentControl <= 3) {
          this.currentControl -= 1;
        }
      } else {
        if (PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1] - 1] !== undefined) {
          this.currentSymbol[1] -= 1;
        } else if (PASSWORD_SYMBOLS[this.currentSymbol[0] - 1] !== undefined) {
          this.currentSymbol[0] -= 1;
          this.currentSymbol[1] = PASSWORD_SYMBOLS[this.currentSymbol[0]].length - 1;
        }
      }

      renderSymbols.call(this);
      renderControls.call(this);
      break;
    }
    case FunctionalKeys.Continue: {
      if (this.currentControl > 0) {
        switch (this.currentControl) {
          case 1: {
            if (this.currentSlot < 8) {
              this.currentSlot += 1;
            }
            break;
          }
          case 2: {
            if (this.currentSlot > 1) {
              this.currentSlot -= 1;
            }
            break;
          }
          case 3: {
            const level: Level = LEVELS.find((item: Level) => {
              return item.password === this.password.join('').toLowerCase();
            });

            if (level) {
              this.destroy();

              APP.pageInstance = new Game(level.id);
            }
            break;
          }
          default: break;
        }
      } else {
        this.password[this.currentSlot - 1] = PASSWORD_SYMBOLS[this.currentSymbol[0]][this.currentSymbol[1]];

        if (this.currentSlot < 8) {
          this.currentSlot += 1;
        }
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
