import { Page } from '../common/Page';
import { Game } from '../Game';

import { renderLevelScoreWindow } from './render';
import { setUpEventHandlers } from './events';

class LevelScore extends Page {
  animateScore: number;

  constructor(game: Game) {
    super(true, game);
  }

  init(game?: Game) {
    this.game = game;
  }

  render() {
    renderLevelScoreWindow.call(this);

    setUpEventHandlers.call(this);
  }

  destroy() {
    cancelAnimationFrame(this.animateScore);
  }
}

export { LevelScore };
