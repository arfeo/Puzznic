import { StaticPage } from '../common/StaticPage';
import { Game } from '../Game';

import { renderLevelScoreWindow } from './render';

class LevelScore extends StaticPage {
  animateScore: number;

  constructor(game: Game) {
    super(game);
  }

  init(game?: Game) {
    this.game = game;
  }

  render() {
    renderLevelScoreWindow.call(this);
  }

  destroy() {
    cancelAnimationFrame(this.animateScore);
  }
}

export { LevelScore };
