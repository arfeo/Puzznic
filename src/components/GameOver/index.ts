import { StaticPage } from '../common/StaticPage';
import { Menu } from '../Menu';

import { APP } from '../../constants/global';

class GameOver extends StaticPage {
  constructor() {
    super();
  }

  render() {
    const ctx: CanvasRenderingContext2D = this.staticPageCanvas.getContext('2d');

    ctx.font = '5vmin Courier';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgb(0, 0, 0)';

    ctx.fillText('CONGRATULATIONS!', this.cellSize * 7, this.cellSize * 4);
    ctx.fillText('THE END', this.cellSize * 7, this.cellSize * 8);

    APP.eventListeners = {
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);

          APP.pageInstance = new Menu();
        }
      },
    };

    document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
  }
}

export { GameOver };
