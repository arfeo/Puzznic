import { getRandomNum } from '../../core/utils/common';

import { Block, BlockIcons, Level } from './types';

function getInitialTargetPosition(level: Level): [number, number] {
  const topBlocksY: number = level.blocks.reduce((min: number, curr: Block) => {
    return curr.position[0] < min ? curr.position[0] : min;
  }, 11);

  const topBlocksX: number = level.blocks.filter((block: Block) => {
    return block.position[0] === topBlocksY;
  }).reduce((max: number, curr: Block) => {
    return curr.position[1] > max ? curr.position[1] : max;
  }, 0);

  return [topBlocksY, topBlocksX];
}

function generateBlocksIconsCorrelation (): BlockIcons {
  const result: BlockIcons = {};

  for (let i = 1; i <= 8; i+= 1) {
    result[i] = getRandomNum(1, 8, Object.values(result));
  }

  return result;
}

function findCornerBlocks(blockIds: number[]): number[][] {
  if (blockIds.length === 0) {
    return;
  }

  const { blocks } = this.level;
  let topLeft: number[] = [];
  let bottomRight: number[] = [];

  for (let i = 0; i < blockIds.length; i += 1) {
    const currentBlockPosition: number[] = blocks.find((item: Block) => {
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

export {
  getInitialTargetPosition,
  generateBlocksIconsCorrelation,
  findCornerBlocks,
};
