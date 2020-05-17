import { BLOCK_FALL_SPEED, ELEMENTS_COLORS } from '../../constants/game';

import { renderBlock, renderElementsList, renderTarget } from './render';
import { checkBlockGroups, checkObstacle } from './actions';

import { Block } from './types';

function animateTarget(): void {
  let start = performance.now();
  let state = 1;

  const animate = (time: number): void => {
    if (this.isLevelCompleted) {
      return cancelAnimationFrame(this.animations.animateTarget);
    }

    if (time - start >= this.targetBlinkDelay) {
      start = time;
      state += 1;

      if (state === 4) {
        state = 1;
      }
    }

    renderTarget.call(this, ELEMENTS_COLORS.target[`state${state}`]);

    this.animations.animateTarget = requestAnimationFrame(animate);
  };

  this.animations.animateTarget = requestAnimationFrame(animate);
}

function animateBlockMove(block: Block, nextX: number, nextY: number): void {
  if (!block || block.position === undefined) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');
  const isInstant: boolean = nextY === block.position[0];

  this.level.blocks = [
    ...this.level.blocks.filter((item: Block) => item.id !== block.id),
    {
      ...block,
      position: [nextY, nextX],
    },
  ];

  this.level.target = [nextY, nextX];

  if (isInstant) {
    ctx.clearRect(
      this.cellSize * block.position[1],
      this.cellSize * block.position[0],
      this.cellSize,
      this.cellSize,
    );

    renderBlock.call(
      this,
      ctx,
      block.type,
      this.cellSize * nextX,
      this.cellSize * nextY,
    );

    if (!checkObstacle.call(this, nextX, nextY + 1)) {
      return animateBlockMove.call(this, block, nextX, nextY + 1);
    }

    if (this.blocksMoving.length === 0) {
      checkBlockGroups.call(this);
    }
  } else {
    let frame: number;
    let step = 0;

    this.blocksMoving.push(block.id);

    const animate = (): void => {
      if (step > BLOCK_FALL_SPEED) {
        cancelAnimationFrame(frame);

        if (!checkObstacle.call(this, nextX, nextY + 1)) {
          return animateBlockMove.call(this, block, nextX, nextY + 1);
        }

        this.blocksMoving = this.blocksMoving.filter((item: number) => {
          return item !== block.id;
        });

        if (this.blocksMoving.length === 0) {
          checkBlockGroups.call(this);
        }

        return;
      }

      ctx.clearRect(
        this.cellSize * nextX,
        this.cellSize * (nextY - 1 - step / BLOCK_FALL_SPEED),
        this.cellSize,
        this.cellSize + this.cellSize * step / BLOCK_FALL_SPEED,
      );

      renderBlock.call(
        this,
        ctx,
        block.type,
        this.cellSize * nextX,
        this.cellSize * (nextY - 1 + step / BLOCK_FALL_SPEED),
      );

      step += 1;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
  }
}

function animateBlockElimination(blockId: number): Promise<void> {
  return new Promise((resolve) => {
    const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');
    const block: Block[] = this.level.blocks.filter((item: Block) => {
      return item.id === blockId;
    });

    if (block && block.length > 0) {
      const left: number = this.cellSize * block[0].position[1];
      const top: number = this.cellSize * block[0].position[0];
      const { type } = block[0];
      let start: number = performance.now();
      let frame: number;
      let step = 1;

      const animate = (time: number): void => {
        if (step === 6) {
          ctx.clearRect(
            left,
            top,
            this.cellSize,
            this.cellSize,
          );

          this.level.blocks = this.level.blocks.filter((item: Block) => {
            return item.id !== blockId;
          });

          renderElementsList.call(this);

          cancelAnimationFrame(frame);

          return resolve();
        }

        if (time - start > 100) {
          ctx.clearRect(
            left,
            top,
            this.cellSize,
            this.cellSize,
          );

          ctx.globalAlpha = step % 2 === 0 ? 1 : 0.5;

          renderBlock.call(this, ctx, type, left, top);

          ctx.globalAlpha = 1;

          start = time;
          step += 1;
        }

        frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
    }
  });
}

function animateBonusSize(left: number, top: number, size: number): void {
  const ctx: CanvasRenderingContext2D = this.bonusCanvas.getContext('2d');
  let frame: number;
  let alpha = 0;
  let pulse = 1;
  let yCorrection = 0;

  ctx.font = '700 5vmin Helvetica, Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = 'rgb(0, 0, 0)';
  ctx.lineWidth = 5;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = 'rgb(255, 255, 255)';
  ctx.shadowBlur = 20;

  const animate = (): void => {
    if (alpha >= 1) {
      pulse = -1;
    }

    ctx.clearRect(0, 0, this.cellSize * 10, this.cellSize * 12);

    if (alpha < 0) {
      return cancelAnimationFrame(frame);
    }

    alpha += pulse * 0.03;

    ctx.globalAlpha = alpha;

    ctx.strokeText(size.toString(), left, top - yCorrection);

    yCorrection += 1;

    frame = requestAnimationFrame(animate);
  };

  frame = requestAnimationFrame(animate);
}

export {
  animateTarget,
  animateBlockMove,
  animateBlockElimination,
  animateBonusSize,
};
