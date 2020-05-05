import { Game } from '../Game';
import { GameOver } from '../GameOver';

import { FunctionalKeys } from '../../constants/pages';

function onKeyDown(event: KeyboardEvent): void {
  if (event.key === FunctionalKeys.Continue) {
    if (this.game.isLevelCompleted) {
      if (!this.game.isGameOver) {
        this.destroy();

        new Game(this.game.level.id + 1, this.game.score, this.game.isIconModeOn);
      } else {
        this.destroy();

        new GameOver();
      }
    }
  }
}

export { onKeyDown };
