import { Page } from '../common/Page';

import { setUpEventHandlers, removeEventHandlers } from './events';
import { renderInputSlots, renderPasswordWindow } from './render';

class Password extends Page {
  constructor() {
    super();
  }

  render() {
    renderPasswordWindow.call(this);
    renderInputSlots.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }
}

export { Password };
