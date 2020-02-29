import { LEVELS } from '../../constants/levels';
import { ELEMENTS_COLORS, WINDOW_FONT } from '../../constants/pages';

import { animateScorePointsTransition } from './animations';

import { ILevel } from '../../types/game';

/**
 * Function renders the page window
 */
function renderLevelScoreWindow(): void {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  const nextLevel: ILevel = LEVELS.find((level: ILevel) => level.id === this.game.level.id + 1);
  const password: string = nextLevel ? nextLevel.password : null;

  this.game.isLevelCompleted = true;
  this.game.clearBonus += this.game.level.bonus;

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = ELEMENTS_COLORS.window.text;

  ctx.fillText('SCORE', this.cellSize * 7, this.cellSize * 2);
  ctx.fillText(
    this.game.score.toString().padStart(8, '0'),
    this.cellSize * 7,
    this.cellSize * 3.5,
  );
  ctx.fillText('CLEAR BONUS', this.cellSize * 7, this.cellSize * 6);
  ctx.fillText(
    this.game.clearBonus.toString().padStart(8, '0'),
    this.cellSize * 7,
    this.cellSize * 7.5,
  );

  if (password) {
    ctx.fillText(
      `${password.toUpperCase().slice(0, 4)} ${password.toUpperCase().slice(4, 8)}`,
      this.cellSize * 7,
      this.cellSize * 10,
    );
  } else {
    this.game.isGameOver = true;
  }

  animateScorePointsTransition.call(this);
}

export { renderLevelScoreWindow };
