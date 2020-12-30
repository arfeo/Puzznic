import { LevelScore } from '../LevelScore';

import { animateBlockMove, animateBlockElimination, animateBonusSize } from './animations';
import { findCornerBlocks } from './helpers';

import { Block } from './types';

function checkTargetMove(direction: string): boolean {
  const { map } = this.level;
  const x: number = this.level.target[1];
  const y: number = this.level.target[0];
  let nextCell: number = null;
  let afterNextCell: number = null;

  switch (direction) {
    case 'up': {
      nextCell = map[y - 1] ? map[y - 1][x] : null;
      afterNextCell = map[y - 2] ? map[y - 2][x] : null;
      break;
    }
    case 'right': {
      nextCell = map[y] ? map[y][x + 1] : null;
      afterNextCell = map[y] ? map[y][x + 2] : null;
      break;
    }
    case 'down': {
      nextCell = map[y + 1] ? map[y + 1][x] : null;
      afterNextCell = map[y + 2] ? map[y + 2][x] : null;
      break;
    }
    case 'left': {
      nextCell = map[y] ? map[y][x - 1] : null;
      afterNextCell = map[y] ? map[y][x - 2] : null;
      break;
    }
    default: break;
  }

  return !!nextCell && !!afterNextCell;
}

function checkBlockPosition(x: number, y: number): Block | boolean {
  const block: Block[] = this.level.blocks.filter((item: Block) => {
    return item && item.position[0] === y && item.position[1] === x;
  });

  return !!block && block.length > 0 ? block[0] : false;
}

function checkObstacle(x: number, y: number): boolean {
  return this.level.map[y][x] !== 1 || checkBlockPosition.call(this, x, y);
}

function checkBlocksToFall(): void {
  const { blocks } = this.level;

  if (!blocks || this.isSplashOn) {
    return;
  }

  blocks.map((block: Block) => {
    const x: number = block.position[1];
    const y: number = block.position[0];

    if (!checkObstacle.call(this, x, y + 1) && this.blocksMoving.indexOf(block.id) === -1) {
      animateBlockMove.call(this, block, x, y + 1);
    }
  });
}

function checkBlockGroups(): void {
  const { blocks } = this.level;
  const neighbours: number[] = [];

  if (!blocks) {
    return;
  }

  blocks.map((block: Block) => {
    const nextToRight: Block[] = blocks.filter((item: Block) => {
      return item.position[0] === block.position[0] + 1 &&
        item.position[1] === block.position[1] &&
        item.type === block.type;
    });

    const nextToBottom: Block[] = blocks.filter((item: Block) => {
      return item.position[1] === block.position[1] + 1 &&
        item.position[0] === block.position[0] &&
        item.type === block.type;
    });

    if (nextToRight && nextToRight.length > 0) {
      if (!neighbours.includes(block.id)) {
        neighbours.push(block.id);
      }

      if (!neighbours.includes(nextToRight[0].id)) {
        neighbours.push(nextToRight[0].id);
      }
    }

    if (nextToBottom && nextToBottom.length > 0) {
      if (!neighbours.includes(block.id)) {
        neighbours.push(block.id);
      }

      if (!neighbours.includes(nextToBottom[0].id)) {
        neighbours.push(nextToBottom[0].id);
      }
    }
  });

  if (neighbours.length > 0) {
    if (neighbours.length === 2) {
      this.clearBonus += 100;
    }

    if (neighbours.length === 3) {
      this.clearBonus += 200;
    }

    if (neighbours.length >= 4) {
      const corners: number[][] = findCornerBlocks.call(this, neighbours);
      const topLeft: number[] = corners[0];
      const bottomRight: number[] = corners[1];
      const middleX: number = this.cellSize * (bottomRight[1] + topLeft[1] + 1) / 2;
      const middleY: number = this.cellSize * (bottomRight[0] + topLeft[0] + 1) / 2;
      const bonusSize = 1000;

      animateBonusSize.call(this, middleX, middleY, bonusSize);

      this.clearBonus += bonusSize;
    }

    Promise.all(neighbours.map((id: number) => animateBlockElimination.call(this, id))).then(() => {
      if (this.level.blocks.length === 0) {
        window.setTimeout(() => {
          this.destroy();

          new LevelScore(this);
        }, 1000);
      }
    });
  }
}

export {
  checkTargetMove,
  checkBlockPosition,
  checkObstacle,
  checkBlocksToFall,
  checkBlockGroups,
};
