import {
  BLOCK_ELIMINATION_DELAY,
  BLOCK_FALL_SPEED,
  BONUS_SIZE_LABEL_FONT,
  ELEMENTS_COLORS,
  FADE_OUT_ANIMATION_SPEED,
} from '../../constants/game';

import { renderBlock, renderElementsList, renderTarget } from './render';
import { checkBlockGroups, checkBlocksToFall, checkObstacle } from './actions';

import { IBlock } from '../../types/game';

/**
 * Function animates the target
 */
function animateTarget(): void {
  let start = performance.now();
  let state = 1;

  const animate = (time: number): void => {
    if (this.isLevelCompleted) {
      return cancelAnimationFrame(this.animateTarget);
    }

    if (time - start >= this.targetBlinkDelay) {
      start = time;
      state += 1;

      if (state === 4) {
        state = 1;
      }
    }

    renderTarget.call(this, ELEMENTS_COLORS.target[`state${state}`]);

    this.animateTarget = requestAnimationFrame(animate);
  };

  this.animateTarget = requestAnimationFrame(animate);
}

/**
 * Function animates block move; if the block has to be moved to the left or to the right,
 * no animation needed, block just instantly moves to the next cell;
 * otherwise (in case of falling), the block moves smoothly
 *
 * @param block
 * @param nextX
 * @param nextY
 */
function animateBlockMove(block: IBlock, nextX: number, nextY: number): void {
  if (block.position === undefined) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');
  const isInstant: boolean = nextY === block.position[0];

  this.level.blocks = [
    ...this.level.blocks.filter((item: IBlock) => item.id !== block.id),
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

  checkBlocksToFall.call(this);
}

/**
 * Function animates elimination of the specified block
 *
 * @param blockId
 */
function animateBlockElimination(blockId: number): Promise<void> {
  return new Promise((resolve) => {
    const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');
    const block: IBlock[] = this.level.blocks.filter((item: IBlock) => {
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

          this.level.blocks = this.level.blocks.filter((item: IBlock) => {
            return item.id !== blockId;
          });

          renderElementsList.call(this);

          cancelAnimationFrame(frame);

          return resolve();
        }

        if (time - start > BLOCK_ELIMINATION_DELAY) {
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

/**
 * Function animates bonus size label, fading in and out
 * whilst floating above the given point's coords
 *
 * @param left
 * @param top
 * @param size
 */
function animateBonusSize(left: number, top: number, size: number): void {
  const ctx: CanvasRenderingContext2D = this.bonusCanvas.getContext('2d');
  let frame: number;
  let alpha = 0;
  let pulse = 1;
  let yCorrection = 0;

  ctx.font = BONUS_SIZE_LABEL_FONT;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = ELEMENTS_COLORS.bonus.stroke;
  ctx.lineWidth = 5;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowColor = ELEMENTS_COLORS.bonus.shadow;
  ctx.shadowBlur = 20;

  const animate = (): void => {
    if (alpha >= 1) {
      pulse = -1;
    }

    ctx.clearRect(0, 0, this.cellSize * 10, this.cellSize * 12);

    if (alpha < 0) {
      return cancelAnimationFrame(frame);
    }

    alpha += pulse * FADE_OUT_ANIMATION_SPEED;

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
