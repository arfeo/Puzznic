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

export { checkTargetMove, checkBlockPosition };
