import { ILevel } from '../types/game';

/**
 * Map legend:
 *
 * 0 - Nothing
 * 1--8 - Blocks
 * 9 - Wall
 * 10 - Empty space
 */

export const LEVELS: ILevel[] = [
  {
    id: 1,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 9, 9, 9, 9, 9, 9, 0, 0],
      [0, 0, 9, 1, 2, 10, 10, 9, 0, 0],
      [0, 0, 9, 9, 9, 10, 10, 9, 0, 0],
      [0, 0, 9, 10, 10, 10, 10, 9, 0, 0],
      [0, 0, 9, 2, 10, 10, 1, 9, 0, 0],
      [0, 0, 0, 9, 2, 1, 9, 0, 0, 0],
      [0, 0, 0, 0, 9, 9, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    bonus: 700,
  }
];
