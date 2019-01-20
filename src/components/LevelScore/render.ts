import { Game } from '../Game';
import { GameOver } from '../GameOver';

import { APP } from '../../constants/global';
import { LEVELS } from '../../constants/levels';

import { ILevel } from '../../types/game';

/**
 * Function renders the component window
 */
function renderLevelScoreWindow() {
  const ctx: CanvasRenderingContext2D = this.staticPageCanvas.getContext('2d');
  const nextLevel: ILevel = LEVELS.find((level: ILevel) => level.id === this.game.level.id + 1);
  const password: string = nextLevel ? nextLevel.password : null;
  let scoreCloned: number = this.game.score;
  let start: number = performance.now();

  this.game.isLevelCompleted = true;
  this.game.clearBonus += this.game.level.bonus;
  this.game.score += this.game.clearBonus;

  ctx.font = '5vmin Courier';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgb(0, 0, 0)';

  ctx.fillText('SCORE', this.cellSize * 7, this.cellSize * 2);
  ctx.fillText(scoreCloned.toString().padStart(8, '0'), this.cellSize * 7, this.cellSize * 4 - this.cellSize / 2);
  ctx.fillText('CLEAR BONUS', this.cellSize * 7, this.cellSize * 6);
  ctx.fillText(
    this.game.clearBonus.toString().padStart(8, '0'),
    this.cellSize * 7,
    this.cellSize * 8 - this.cellSize / 2,
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

  const animate = (time: number) => {
    if (this.game.clearBonus === 0) {
      return cancelAnimationFrame(this.animateScore);
    }

    if (time - start > 50) {
      scoreCloned += 50;
      this.game.clearBonus -= 50;

      ctx.clearRect(
        this.cellSize,
        this.cellSize * 4 - this.cellSize * 3 / 2,
        this.cellSize * 14 - this.cellSize * 2,
        this.cellSize * 2,
      );
      ctx.clearRect(
        this.cellSize,
        this.cellSize * 8 - this.cellSize * 3 / 2,
        this.cellSize * 14 - this.cellSize * 2,
        this.cellSize * 2,
      );

      ctx.fillStyle = 'rgb(0, 0, 0)';

      ctx.fillText(
        scoreCloned.toString().padStart(8, '0'),
        this.cellSize * 7,
        this.cellSize * 4 - this.cellSize / 2,
      );
      ctx.fillText(
        this.game.clearBonus.toString().padStart(8, '0'),
        this.cellSize * 7,
        this.cellSize * 8 - this.cellSize / 2,
      );

      start = time;
    }

    this.animateScore = requestAnimationFrame(animate);
  };

  window.setTimeout(() => {
    this.animateScore = requestAnimationFrame(animate);
  }, 1000);

  APP.eventListeners = {
    onKeyDown: (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
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

export { renderLevelScoreWindow };
