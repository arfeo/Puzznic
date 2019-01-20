import { StaticPage } from '../common/StaticPage';

import { setUpEventHandlers, removeEventHandlers } from './events';
import { renderPasswordWindow } from './render';

class Password extends StaticPage {
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
