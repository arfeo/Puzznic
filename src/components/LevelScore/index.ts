import { Page } from '../common/Page';
import { Game } from '../Game';

import { renderLevelScoreWindow } from './render';

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
  }

  destroy() {
    cancelAnimationFrame(this.animateScore);
  }
}

export { LevelScore };
