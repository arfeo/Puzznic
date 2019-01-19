import { getRandomNum } from '../../utils/common';

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
