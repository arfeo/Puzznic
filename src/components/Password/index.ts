import { Page } from '../common/Page';

import {
  renderControls,
  renderInputSlots,
  renderPasswordWindow,
  renderSymbols,
} from './render';

import { setUpEventHandlers, removeEventHandlers } from './events';

class Password extends Page {
  password: string[];
  currentSlot: number;
  currentSymbol: number[];
  currentControl: number;
  animateCurrentSlot: number;

  constructor() {
    super();
  }

  init() {
    this.password = new Array(8).fill('');
    this.currentSlot = 1;
    this.currentSymbol = [0, 0];
    this.currentControl = 0;
  }

  render() {
    renderPasswordWindow.call(this);
    renderInputSlots.call(this);
    renderSymbols.call(this);
    renderControls.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    removeEventHandlers.call(this);

    cancelAnimationFrame(this.animateCurrentSlot);
  }
}

export { Password };