import { getRandomNum } from '../../utils/common';

import { IBlock } from '../../types/game';

/**
 * Function returns an object containing correlation
 * of blocks numbers with icon ids
 */
export function generateBlocksIconsCorrelation (): { [key: number]: number } {
  const result: { [key: number]: number } = {};

  for (let i = 1; i <= 8; i+= 1) {
    result[i] = getRandomNum(1, 8, Object.values(result));
  }

  return result;
}

/**
 * Function returns top left and bottom right positions
 * of blocks in a given block group
 *
 * @param blockIds
 */
export function findCornerBlocks(blockIds: number[]): number[][] {
  if (blockIds.length === 0) {
    return;
  }

  const { blocks } = this.level;
  let topLeft: number[] = [];
  let bottomRight: number[] = [];

  for (let i = 0; i < blockIds.length; i += 1) {
    const currentBlockPosition: number[] = blocks.find((item: IBlock) => {
      return item.id === blockIds[i];
    }).position;

    const currentY: number = currentBlockPosition[0];
    const currentX: number = currentBlockPosition[1];

    if (i === 0) {
      topLeft = [currentY, currentX];
      bottomRight = [currentY, currentX];
    } else {
      if (currentX <= topLeft[1] && currentY <= topLeft[0]) {
        topLeft = [currentY, currentX];
      }

      if (currentX >= bottomRight[1] && currentY >= bottomRight[0]) {
        bottomRight = [currentY, currentX];
      }
    }
  }

  return [topLeft, bottomRight];
}
