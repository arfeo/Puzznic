import { LEVELS } from '../../constants/levels';
import { WINDOW_FONT } from '../../constants/pages';
import { PAGE_HEIGHT, PAGE_WIDTH } from '../../constants/game';

import { drawRectangle } from '../../core/utils/drawing';

import { Level } from '../Game/types';

function renderLevelScoreWindow(): HTMLElement {
  const pageWindow: HTMLElement = document.createElement('div');
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  const nextLevel: Level = LEVELS.find((level: Level) => level.id === this.game.level.id + 1);
  const password: string = nextLevel ? nextLevel.password : null;

  pageWindow.className = 'page-window';
  this.pageCanvas.className = '-page-canvas';

  this.pageCanvas.width = this.cellSize * PAGE_WIDTH;
  this.pageCanvas.height = this.cellSize * PAGE_HEIGHT;

  this.game.isLevelCompleted = true;

  drawRectangle(
    ctx,
    0,
    0,
    this.cellSize * PAGE_WIDTH,
    this.cellSize * PAGE_HEIGHT,
    {
      fillColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 3,
      edgingColor: 'rgb(189, 187, 189)',
    },
  );

  drawRectangle(
    ctx,
    this.cellSize / 6,
    this.cellSize / 6,
    this.cellSize * 14 - this.cellSize / 3,
    this.cellSize * 12 - this.cellSize / 3,
    {
      fillColor: 'rgb(255, 255, 255)',
      edgingWidth: this.cellSize / 12,
      edgingColor: 'rgb(94, 92, 94)',
    },
  );

  ctx.font = WINDOW_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgb(0, 0, 0)';

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

  pageWindow.appendChild(this.pageCanvas);

  return pageWindow;
}

export { renderLevelScoreWindow };
