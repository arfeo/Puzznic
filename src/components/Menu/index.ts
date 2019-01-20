import { Page } from '../common/Page';

import { renderMenuContent } from './render';
import { setUpEventHandlers, removeEventHandlers } from './events';

class Menu extends Page {
  currentItem: number;

  constructor() {
    super(false);
  }

  init() {
    this.currentItem = 1;
  }

  render() {
    renderMenuContent.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }
}

export { Menu };
