import { ELEMENTS_COLORS } from '../../constants/game';

import { renderBlock, renderTarget } from './render';

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
  const ctx: CanvasRenderingContext2D = this.blocksCanvas.getContext('2d');
  const isInstant: boolean = nextY === block.position[0];
  const blockCloned: IBlock = JSON.parse(JSON.stringify(block));

  if (isInstant) {
    ctx.clearRect(
      this.cellSize * block.position[1],
      this.cellSize * block.position[0],
      this.cellSize,
      this.cellSize,
    );

    renderBlock.call(
      this,
      block.type,
      this.cellSize * nextX,
      this.cellSize * nextY,
    );

    blockCloned.position = [nextY, nextX];

    this.level.blocks = [
      ...this.level.blocks.filter((item: IBlock) => item.id !== block.id),
      blockCloned,
    ];

    this.level.target = [nextY, nextX];
  }
}

export { animateTarget, animateBlockMove };
