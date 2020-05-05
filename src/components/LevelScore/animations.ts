function animateScorePoints(): void {
  const ctx: CanvasRenderingContext2D = this.pageCanvas.getContext('2d');
  let scoreCloned: number = this.game.score;
  let start: number = performance.now();

  this.game.score += this.game.clearBonus;

  const animate = (time: number): void => {
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
}

export { animateScorePoints };
