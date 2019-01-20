import { Page } from '../common/Page';
import { Menu } from '../Menu';

import { APP } from '../../constants/global';
import { ELEMENTS_COLORS, WINDOW_FONT, FunctionalKeys } from '../../constants/pages';

class GameOver extends Page {
  constructor() {
    super();
  }

  render() {
    const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');

    ctx.font = WINDOW_FONT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = ELEMENTS_COLORS.window.text;

    ctx.fillText('CONGRATULATIONS!', this.cellSize * 7, this.cellSize * 4);
    ctx.fillText('THE END', this.cellSize * 7, this.cellSize * 8);

    APP.eventListeners = {
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === FunctionalKeys.Continue) {
          document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);

          APP.pageInstance = new Menu();
        }
      },
    };

    document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
  }
}

export { GameOver };
