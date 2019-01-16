import { animateBlockMove, animateBlocksElimination } from './animations';

import { IBlock } from '../../types/game';

/**
 * Function returns false if the target can not move in the specified direction
 * (if the next and/or the cell after the next does not contain any map objects);
 * otherwise it returns true
 *
 * @param direction
 */
function checkTargetMove(direction: string): boolean {
  const { map } = this.level;
  const x: number = this.level.target[1];
  const y: number = this.level.target[0];
  let nextCell: number;
  let afterNextCell: number;

  switch (direction) {
    case 'up': {
      nextCell = map[y - 1][x];
      afterNextCell = map[y - 2][x];
      break;
    }
    case 'right': {
      nextCell = map[y][x + 1];
      afterNextCell = map[y][x + 2];
      break;
    }
    case 'down': {
      nextCell = map[y + 1][x];
      afterNextCell = map[y + 2][x];
      break;
    }
    case 'left': {
      nextCell = map[y][x - 1];
      afterNextCell = map[y][x - 2];
      break;
    }
    default: break;
  }

  return !!nextCell && !!afterNextCell;
}

/**
 * Function returns an object if a block exists at the given position; otherwise it returns false
 *
 * @param x
 * @param y
 */
function checkBlockPosition(x: number, y: number): IBlock | boolean {
  const block: IBlock[] = this.level.blocks.filter((item: IBlock) => {
    return item.position[0] === y && item.position[1] === x;
  });

  return !!block && block.length > 0 ? block[0] : false;
}

/**
 * Function returns true if a cell at the specified position contains something besides
 * an empty cell (i.e., wall or block)
 *
 * @param x
 * @param y
 */
function checkObstacle(x: number, y: number): boolean {
  return this.level.map[y][x] !== 1 || checkBlockPosition.call(this, x, y);
}

/**
 * Function checks which blocks have no obstacle below and have to fall
 */
function checkBlocksToFall() {
  const { blocks } = this.level;

  if (!blocks) {
    return;
  }

  blocks.map((block: IBlock) => {
    const x: number = block.position[1];
    const y: number = block.position[0];

    if (!checkObstacle.call(this, x, y + 1) && this.blocksMoving.indexOf(block.id) === -1) {
      animateBlockMove.call(this, block, x, y + 1);
    }
  });
}

/**
 * Function checks which blocks form groups (neighbours by X and Y axises)
 */
function checkBlockGroups() {
  const { blocks } = this.level;
  const neighbours: number[] = [];

  if (!blocks) {
    return;
  }

  blocks.map((block: IBlock) => {
    const nextToRight: IBlock[] = blocks.filter((item: IBlock) => {
      return item.position[0] === block.position[0] + 1 &&
        item.position[1] === block.position[1] &&
        item.type === block.type;
    });
    const nextToBottom: IBlock[] = blocks.filter((item: IBlock) => {
      return item.position[1] === block.position[1] + 1 &&
        item.position[0] === block.position[0] &&
        item.type === block.type;
    });

    if (nextToRight && nextToRight.length > 0) {
      if (neighbours.indexOf(block.id) === -1) {
        neighbours.push(block.id);
      }

      if (neighbours.indexOf(nextToRight[0].id) === -1) {
        neighbours.push(nextToRight[0].id);
      }
    }

    if (nextToBottom && nextToBottom.length > 0) {
      if (neighbours.indexOf(block.id) === -1) {
        neighbours.push(block.id);
      }

      if (neighbours.indexOf(nextToBottom[0].id) === -1) {
        neighbours.push(nextToBottom[0].id);
      }
    }
  });

  animateBlocksElimination.call(this, neighbours);
}

export {
  checkTargetMove,
  checkBlockPosition,
  checkObstacle,
  checkBlocksToFall,
  checkBlockGroups,
};
