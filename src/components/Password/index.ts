import { Page } from '../common/Page';

import { setUpEventHandlers, removeEventHandlers } from './events';
import { renderPasswordWindow } from './render';

class Password extends Page {
  constructor() {
    super();
  }

  render() {
    renderPasswordWindow.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }
}

export { Password };
