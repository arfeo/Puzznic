import { Page } from '../common/Page';
import { Game } from '../Game';

import { renderLevelScoreWindow } from './render';
import { setUpEventHandlers } from './events';

class LevelScore extends Page {
  animateScore: number;

  constructor(game: Game) {
    super(true, game);
  }

  init(game?: Game): void {
    this.game = game;
  }

  render(): void {
    renderLevelScoreWindow.call(this);

    setUpEventHandlers.call(this);
  }

  destroy(): void {
    cancelAnimationFrame(this.animateScore);
  }
}

export { LevelScore };
