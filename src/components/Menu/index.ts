import { StaticPage } from '../common/StaticPage';

import { renderMenuContent } from './render';
import { setUpEventHandlers, removeEventHandlers } from './events';

class Menu extends StaticPage {
  currentItem: number;

  constructor() {
    super();
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
