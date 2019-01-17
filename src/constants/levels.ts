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
  },
  {
    id: 2,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [5, 4],
    blocks: [
      { id: 1, type: 1, position: [9, 3] },
      { id: 2, type: 1, position: [8, 4] },
      { id: 3, type: 2, position: [9, 2] },
      { id: 4, type: 2, position: [8, 3] },
      { id: 5, type: 2, position: [6, 4] },
      { id: 6, type: 3, position: [7, 3] },
      { id: 7, type: 3, position: [5, 4] },
      { id: 8, type: 4, position: [7, 4] },
      { id: 9, type: 4, position: [9, 4] },
      { id: 10, type: 4, position: [9, 6] },
    ],
    bonus: 400,
    password: 'itohmiwa',
  },
  {
    id: 3,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 2, 1, 1, 2, 0, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 2, 2, 1, 1, 2, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
    ],
    target: [7, 7],
    blocks: [
      { id: 1, type: 1, position: [7, 4] },
      { id: 2, type: 1, position: [9, 6] },
      { id: 3, type: 1, position: [8, 7] },
      { id: 4, type: 2, position: [7, 5] },
      { id: 5, type: 2, position: [9, 3] },
      { id: 6, type: 2, position: [8, 2] },
      { id: 7, type: 3, position: [7, 2] },
      { id: 8, type: 3, position: [7, 7] },
    ],
    bonus: 400,
    password: 'sawaitoh',
  },
];
