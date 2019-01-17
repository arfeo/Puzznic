import { BLOCK_FALL_SPEED, ELEMENTS_COLORS } from '../../constants/game';

import { renderBlock, renderElementsList, renderTarget } from './render';
import { checkBlockGroups, checkBlocksToFall, checkObstacle } from './actions';

import { IBlock } from '../../types/game';

/**
 * Function animates the target
 */
function animateTarget() {
  let start = performance.now();
  let state = 1;

  const animate = (time: number) => {
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
function animateBlockMove(block: IBlock, nextX: number, nextY: number) {
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

    const animate = () => {
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
 * Function animates the elimination of specified blocks
 *
 * @param blockIds
 */
function animateBlocksElimination(blockIds: number[]) {
  if (blockIds.length === 0) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');

  blockIds.map((id: number) => {
    const block: IBlock[] = this.level.blocks.filter((item: IBlock) => {
      return item.id === id;
    });

    if (block && block.length > 0) {
      ctx.clearRect(
        this.cellSize * block[0].position[1],
        this.cellSize * block[0].position[0],
        this.cellSize,
        this.cellSize,
      );

      this.level.blocks = this.level.blocks.filter((item: IBlock) => {
        return item.id !== id;
      });

      renderElementsList.call(this);
    }
  });

  checkBlocksToFall.call(this);
}

export { animateTarget, animateBlockMove, animateBlocksElimination };
