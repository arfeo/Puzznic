import { Game } from '../Game';
import { Password } from '../Password';

import { FunctionalKeys } from '../../constants/pages';

import { renderPointer } from './render';

enum MenuItems {
  PlayItem = 1,
  PasswordItem,
}

function onKeyDown(event: KeyboardEvent): void {
  switch (event.key) {
    case FunctionalKeys.Up: {
      if (this.currentItem > 1) {
        this.currentItem -= 1;
        renderPointer.call(this);
      }
      break;
    }
    case FunctionalKeys.Down: {
      if (this.currentItem < Object.keys(MenuItems).length / 2) {
        this.currentItem += 1;
        renderPointer.call(this);
      }
      break;
    }
    case FunctionalKeys.Continue: {
      switch (this.currentItem) {
        case MenuItems.PlayItem: {
          this.destroy();

          new Game();
          break;
        }
        case MenuItems.PasswordItem: {
          this.destroy();

          new Password();
          break;
        }
        default: break;
      }
      break;
    }
    default: break;
  }
}

export { onKeyDown };
