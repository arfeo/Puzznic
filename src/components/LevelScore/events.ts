import { Game } from '../Game';
import { GameOver } from '../GameOver';

import { APP } from '../../constants/global';
import { FunctionalKeys } from '../../constants/pages';

/**
 * Function creates all components's event listeners
 */
function setUpEventHandlers() {
  APP.eventListeners = {
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === FunctionalKeys.Continue) {
        document.body.removeEventListener('keydown', APP.eventListeners.onKeyDown);

        if (this.game.isLevelCompleted) {
          if (!this.game.isGameOver) {
            this.destroy();

            APP.pageInstance = new Game(this.game.level.id + 1, this.game.score, this.game.isIconModeOn);
          } else {
            this.destroy();

            APP.pageInstance = new GameOver();
          }
        }
      }
    },
  };

  document.body.addEventListener('keydown', APP.eventListeners.onKeyDown);
}

export { setUpEventHandlers };
