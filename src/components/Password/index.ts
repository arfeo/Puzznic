import { Page } from '../common/Page';

import {
  renderInputSlots,
  renderPasswordWindow,
  renderSymbols,
} from './render';

import { setUpEventHandlers, removeEventHandlers } from './events';

class Password extends Page {
  currentSlot: number;
  currentSymbol: number[];

  constructor() {
    super();
  }

  render() {
    renderPasswordWindow.call(this);
    renderInputSlots.call(this);
    renderSymbols.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);
  }
}

export { Password };
