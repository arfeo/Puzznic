import { Page } from '../common/Page';

import { renderMenuContent } from './render';
import { setUpEventHandlers, removeEventHandlers } from './events';

class Menu extends Page {
  currentItem: number;

  constructor() {
    super(false);
  }

  init(): void {
    this.currentItem = 1;
  }

  render(): void {
    renderMenuContent.call(this);

    setUpEventHandlers.call(this);
  }

  destroy(): void {
    removeEventHandlers.call(this);
  }
}

export { Menu };
