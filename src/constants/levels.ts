import { ILevel } from '../types/game';

/**
 * Map legend:
 *
 * 0 - Nothing
 * 1 - Empty cell
 * 2 - Wall
 */

export const LEVELS: ILevel[] = [
  {
    id: 1,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 2, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [5, 4],
    blocks: [
      { id: 1, type: 1, position: [5, 3] },
      { id: 2, type: 2, position: [5, 4] },
      { id: 3, type: 2, position: [8, 3] },
      { id: 4, type: 2, position: [9, 4] },
      { id: 5, type: 1, position: [9, 5] },
      { id: 6, type: 1, position: [8, 6] },
    ],
    bonus: 400,
  }
];
