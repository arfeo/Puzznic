import { Level } from '../components/Game/types';

/**
 * Map legend:
 *
 * 0 - Nothing
 * 1 - Empty space
 * 2 - Wall
 */

export const LEVELS: Level[] = [
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
    bonus: 500,
    password: 'sawaitoh',
  },
  {
    id: 4,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 1, 2, 2, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 2, 2, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 1, 2, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [4, 3],
    blocks: [
      { id: 1, type: 1, position: [5, 3] },
      { id: 2, type: 1, position: [7, 3] },
      { id: 3, type: 1, position: [7, 5] },
      { id: 4, type: 2, position: [4, 3] },
      { id: 5, type: 2, position: [8, 5] },
      { id: 6, type: 3, position: [5, 2] },
      { id: 7, type: 3, position: [6, 3] },
      { id: 8, type: 3, position: [6, 5] },
    ],
    bonus: 500,
    password: 'gotagoto',
  },
  {
    id: 5,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 2, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [3, 6],
    blocks: [
      { id: 1, type: 1, position: [3, 6] },
      { id: 2, type: 1, position: [8, 4] },
      { id: 3, type: 2, position: [4, 4] },
      { id: 4, type: 2, position: [4, 6] },
      { id: 5, type: 2, position: [6, 6] },
      { id: 6, type: 3, position: [3, 4] },
      { id: 7, type: 3, position: [8, 6] },
      { id: 8, type: 4, position: [5, 6] },
      { id: 9, type: 4, position: [7, 6] },
    ],
    bonus: 400,
    password: 'don.doko',
  },
  {
    id: 6,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 2, 2, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 1, 1, 2, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [6, 3],
    blocks: [
      { id: 1, type: 1, position: [6, 2] },
      { id: 2, type: 1, position: [8, 4] },
      { id: 3, type: 1, position: [9, 6] },
      { id: 4, type: 2, position: [7, 3] },
      { id: 5, type: 2, position: [8, 6] },
      { id: 6, type: 3, position: [6, 3] },
      { id: 7, type: 3, position: [7, 4] },
    ],
    bonus: 400,
    password: 'puzznic.',
  },
  {
    id: 7,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [5, 6],
    blocks: [
      { id: 1, type: 1, position: [7, 5] },
      { id: 2, type: 1, position: [8, 6] },
      { id: 3, type: 1, position: [9, 5] },
      { id: 4, type: 2, position: [5, 6] },
      { id: 5, type: 2, position: [7, 6] },
      { id: 6, type: 2, position: [9, 6] },
      { id: 7, type: 2, position: [8, 5] },
      { id: 8, type: 2, position: [9, 4] },
      { id: 9, type: 2, position: [7, 3] },
      { id: 10, type: 3, position: [6, 3] },
      { id: 11, type: 3, position: [7, 2] },
      { id: 12, type: 3, position: [8, 3] },
      { id: 13, type: 4, position: [5, 2] },
      { id: 14, type: 4, position: [8, 2] },
      { id: 15, type: 4, position: [9, 3] },
    ],
    bonus: 500,
    password: 'yupontan',
  },
  {
    id: 8,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [4, 6],
    blocks: [
      { id: 1, type: 1, position: [4, 6] },
      { id: 2, type: 1, position: [5, 5] },
      { id: 3, type: 1, position: [7, 6] },
      { id: 4, type: 2, position: [4, 5] },
      { id: 5, type: 2, position: [6, 6] },
      { id: 6, type: 2, position: [7, 5] },
      { id: 7, type: 3, position: [6, 5] },
      { id: 8, type: 3, position: [5, 6] },
    ],
    bonus: 500,
    password: 'zun.doko',
  },
  {
    id: 9,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 1, 1, 1, 2, 1, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [4, 7],
    blocks: [
      { id: 1, type: 1, position: [4, 7] },
      { id: 2, type: 1, position: [8, 4] },
      { id: 3, type: 2, position: [5, 7] },
      { id: 4, type: 2, position: [7, 5] },
      { id: 5, type: 2, position: [7, 3] },
      { id: 6, type: 2, position: [8, 2] },
      { id: 7, type: 3, position: [6, 5] },
      { id: 8, type: 3, position: [7, 2] },
      { id: 9, type: 4, position: [6, 2] },
      { id: 10, type: 4, position: [8, 3] },
      { id: 11, type: 4, position: [8, 6] },
      { id: 12, type: 4, position: [6, 7] },
    ],
    bonus: 600,
    password: 'zun.tata',
  },
  {
    id: 10,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 1, 1, 2, 2, 0],
      [0, 0, 2, 1, 1, 1, 1, 1, 2, 0],
      [0, 0, 2, 2, 1, 1, 1, 1, 2, 0],
      [0, 0, 0, 2, 2, 1, 1, 2, 2, 0],
      [0, 0, 0, 0, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    target: [5, 6],
    blocks: [
      { id: 1, type: 1, position: [5, 6] },
      { id: 2, type: 1, position: [6, 7] },
      { id: 3, type: 1, position: [7, 6] },
      { id: 4, type: 2, position: [6, 6] },
      { id: 5, type: 2, position: [7, 7] },
      { id: 6, type: 2, position: [8, 6] },
      { id: 7, type: 3, position: [6, 3] },
      { id: 8, type: 3, position: [7, 4] },
    ],
    bonus: 500,
    password: 'takamine',
  },
  {
    id: 11,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 2, 1, 1, 1, 2, 0],
      [0, 2, 2, 2, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    ],
    blocks: [
      { id: 1, type: 1, position: [9, 6] },
      { id: 2, type: 1, position: [10, 7] },
      { id: 3, type: 2, position: [9, 7] },
      { id: 4, type: 2, position: [10, 6] },
      { id: 5, type: 2, position: [4, 6] },
      { id: 6, type: 2, position: [10, 2] },
      { id: 7, type: 3, position: [8, 2] },
      { id: 8, type: 3, position: [4, 7] },
      { id: 9, type: 4, position: [6, 4] },
      { id: 10, type: 4, position: [10, 5] },
    ],
    target: [4, 7],
    bonus: 300,
    password: 'nisiyama',
  },
  {
    id: 12,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 2, 2, 2, 1, 2, 2, 2, 2, 0],
      [0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 0, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 2, position: [3, 3] },
      { id: 2, type: 2, position: [3, 5] },
      { id: 3, type: 2, position: [9, 5] },
      { id: 4, type: 3, position: [3, 2] },
      { id: 5, type: 3, position: [3, 6] },
      { id: 6, type: 3, position: [6, 2] },
      { id: 7, type: 3, position: [6, 6] },
      { id: 8, type: 3, position: [9, 4] },
      { id: 9, type: 4, position: [3, 1] },
      { id: 10, type: 4, position: [3, 7] },
      { id: 11, type: 4, position: [9, 3] },
    ],
    target: [3, 7],
    bonus: 500,
    password: 'darius..',
  },
  {
    id: 13,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 1, 2, 2, 2, 2],
      [0, 2, 2, 2, 2, 1, 1, 2, 2, 0],
      [0, 0, 2, 2, 2, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 1, 2, 2, 0, 0],
      [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 7, position: [4, 1] },
      { id: 2, type: 7, position: [4, 8] },
      { id: 3, type: 6, position: [4, 2] },
      { id: 4, type: 6, position: [4, 4] },
      { id: 5, type: 6, position: [4, 7] },
      { id: 6, type: 5, position: [4, 3] },
      { id: 7, type: 5, position: [4, 6] },
      { id: 8, type: 5, position: [8, 4] },
    ],
    target: [4, 8],
    bonus: 500,
    password: 'flippull',
  },
  {
    id: 14,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 1, 1, 2, 2, 0],
      [0, 0, 2, 1, 1, 1, 1, 1, 2, 0],
      [0, 0, 2, 2, 1, 2, 1, 2, 2, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 8, position: [6, 4] },
      { id: 2, type: 8, position: [9, 6] },
      { id: 3, type: 8, position: [8, 7] },
      { id: 4, type: 1, position: [7, 4] },
      { id: 5, type: 1, position: [9, 4] },
      { id: 6, type: 2, position: [8, 4] },
      { id: 7, type: 2, position: [8, 6] },
    ],
    target: [7, 4],
    bonus: 400,
    password: 'naomi.n.',
  },
  {
    id: 15,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
      [0, 2, 2, 2, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 2, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 2, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 3, position: [8, 2] },
      { id: 2, type: 3, position: [9, 3] },
      { id: 3, type: 4, position: [6, 2] },
      { id: 4, type: 4, position: [7, 4] },
      { id: 5, type: 4, position: [5, 4] },
      { id: 6, type: 3, position: [6, 4] },
      { id: 7, type: 3, position: [8, 5] },
      { id: 8, type: 3, position: [7, 6] },
      { id: 9, type: 4, position: [6, 6] },
      { id: 10, type: 4, position: [8, 6] },
    ],
    target: [5, 4],
    bonus: 500,
    password: 'yuyanisi',
  },
  {
    id: 16,
    map: [
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 1, 2, 1, 1, 1, 2],
      [2, 1, 1, 1, 2, 2, 2, 1, 1, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 2, 1, 1, 1, 1, 2, 1, 2],
      [2, 2, 2, 2, 1, 1, 2, 2, 2, 2],
      [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
      [2, 1, 1, 2, 2, 2, 1, 1, 1, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    blocks: [
      { id: 1, type: 3, position: [2, 4] },
      { id: 2, type: 7, position: [2, 6] },
      { id: 3, type: 8, position: [2, 5] },
      { id: 4, type: 2, position: [3, 4] },
      { id: 5, type: 5, position: [3, 6] },
      { id: 6, type: 3, position: [5, 1] },
      { id: 7, type: 3, position: [5, 3] },
      { id: 8, type: 5, position: [5, 2] },
      { id: 9, type: 5, position: [6, 1] },
      { id: 10, type: 4, position: [6, 3] },
      { id: 11, type: 1, position: [5, 6] },
      { id: 12, type: 8, position: [5, 8] },
      { id: 13, type: 7, position: [6, 8] },
      { id: 14, type: 5, position: [6, 6] },
      { id: 15, type: 2, position: [8, 3] },
      { id: 16, type: 3, position: [8, 4] },
      { id: 17, type: 2, position: [8, 5] },
      { id: 18, type: 4, position: [9, 3] },
      { id: 19, type: 1, position: [9, 5] },
    ],
    target: [2, 6],
    bonus: 1000,
    password: 'mogumogu',
  },
  {
    id: 17,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 1, 1, 1, 2, 0, 0, 0],
      [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 4, position: [4, 1] },
      { id: 2, type: 4, position: [4, 3] },
      { id: 3, type: 4, position: [5, 2] },
      { id: 4, type: 4, position: [4, 6] },
      { id: 5, type: 5, position: [4, 2] },
      { id: 6, type: 5, position: [5, 6] },
      { id: 7, type: 5, position: [6, 5] },
      { id: 8, type: 2, position: [5, 3] },
      { id: 9, type: 2, position: [5, 5] },
      { id: 10, type: 2, position: [4, 7] },
      { id: 11, type: 2, position: [7, 4] },
      { id: 12, type: 3, position: [6, 3] },
      { id: 13, type: 3, position: [4, 5] },
    ],
    target: [4, 7],
    bonus: 600,
    password: 'tomoyo.h',
  },
  {
    id: 18,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 0],
      [0, 0, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 2, 2, 1, 2, 1, 2, 1, 2, 0],
      [0, 2, 2, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 2, 2, 1, 2, 2, 2, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 2, 0],
      [0, 2, 1, 1, 2, 1, 1, 2, 2, 0],
      [0, 2, 2, 1, 1, 1, 2, 2, 0, 0],
      [0, 0, 2, 2, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 8, position: [2, 3] },
      { id: 2, type: 8, position: [2, 7] },
      { id: 3, type: 8, position: [4, 7] },
      { id: 4, type: 6, position: [2, 5] },
      { id: 5, type: 6, position: [4, 3] },
      { id: 6, type: 6, position: [4, 5] },
      { id: 7, type: 7, position: [3, 3] },
      { id: 8, type: 7, position: [3, 5] },
      { id: 9, type: 7, position: [3, 7] },
      { id: 10, type: 7, position: [6, 4] },
      { id: 11, type: 7, position: [7, 2] },
      { id: 12, type: 7, position: [10, 4] },
    ],
    target: [2, 7],
    bonus: 700,
    password: 'takasuzu',
  },
  {
    id: 19,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 2, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 2, 2, 2, 2, 0, 0],
      [0, 2, 2, 1, 2, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 2, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 2, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 4, position: [2, 6] },
      { id: 2, type: 4, position: [3, 5] },
      { id: 3, type: 4, position: [2, 2] },
      { id: 4, type: 4, position: [8, 3] },
      { id: 5, type: 6, position: [3, 6] },
      { id: 6, type: 6, position: [2, 4] },
      { id: 7, type: 5, position: [2, 3] },
      { id: 8, type: 5, position: [4, 6] },
      { id: 9, type: 3, position: [3, 2] },
      { id: 10, type: 3, position: [3, 4] },
      { id: 11, type: 3, position: [4, 5] },
      { id: 12, type: 3, position: [7, 2] },
      { id: 13, type: 2, position: [4, 2] },
      { id: 14, type: 2, position: [4, 4] },
      { id: 15, type: 2, position: [7, 3] },
      { id: 16, type: 2, position: [8, 2] },
    ],
    target: [2, 6],
    bonus: 800,
    password: 'akitoshi',
  },
  {
    id: 20,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 2, 2, 1, 1, 2, 2, 0, 0],
      [0, 2, 2, 2, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 2, 1, 2, 2, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 7, position: [6, 2] },
      { id: 2, type: 7, position: [6, 4] },
      { id: 3, type: 6, position: [4, 4] },
      { id: 4, type: 6, position: [9, 4] },
      { id: 5, type: 5, position: [8, 4] },
      { id: 6, type: 5, position: [7, 2] },
      { id: 7, type: 5, position: [5, 4] },
      { id: 8, type: 6, position: [7, 4] },
    ],
    target: [4, 4],
    bonus: 500,
    password: 'horimoto',
  },
  {
    id: 21,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
      [0, 0, 0, 2, 1, 1, 2, 0, 0, 0],
      [0, 2, 2, 2, 2, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 0, 2, 2, 1, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 5, position: [3, 4] },
      { id: 2, type: 5, position: [4, 6] },
      { id: 3, type: 5, position: [6, 6] },
      { id: 4, type: 8, position: [5, 2] },
      { id: 5, type: 8, position: [6, 3] },
      { id: 6, type: 7, position: [7, 2] },
      { id: 7, type: 7, position: [5, 3] },
      { id: 8, type: 7, position: [7, 6] },
      { id: 9, type: 7, position: [6, 7] },
      { id: 10, type: 6, position: [5, 6] },
      { id: 11, type: 6, position: [7, 5] },
      { id: 12, type: 6, position: [7, 3] },
      { id: 13, type: 6, position: [6, 2] },
    ],
    target: [3, 4],
    bonus: 700,
    password: 'babuchan',
  },
  {
    id: 22,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
      [0, 0, 2, 2, 1, 1, 2, 0, 0, 0],
      [0, 2, 2, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 1, 1, 2, 1, 2, 0, 0],
      [0, 0, 2, 2, 2, 2, 1, 2, 0, 0],
      [0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 2, position: [5, 5] },
      { id: 2, type: 2, position: [8, 3] },
      { id: 3, type: 1, position: [6, 5] },
      { id: 4, type: 1, position: [8, 4] },
      { id: 5, type: 3, position: [7, 5] },
      { id: 6, type: 3, position: [8, 6] },
      { id: 7, type: 8, position: [7, 2] },
      { id: 8, type: 8, position: [9, 6] },
    ],
    target: [5, 5],
    bonus: 600,
    password: 'dokugasu',
  },
  {
    id: 23,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 0, 0, 0, 0],
      [0, 0, 2, 1, 1, 2, 2, 0, 0, 0],
      [0, 2, 2, 2, 1, 1, 2, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 2, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 2, position: [5, 4] },
      { id: 2, type: 2, position: [7, 4] },
      { id: 3, type: 3, position: [6, 4] },
      { id: 4, type: 3, position: [7, 5] },
      { id: 5, type: 8, position: [8, 2] },
      { id: 6, type: 8, position: [8, 5] },
      { id: 7, type: 1, position: [7, 2] },
      { id: 8, type: 1, position: [8, 4] },
      { id: 9, type: 1, position: [6, 5] },
    ],
    target: [5, 4],
    bonus: 500,
    password: 'sugapee.',
  },
  {
    id: 24,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 2, 0, 0],
      [0, 2, 2, 2, 2, 1, 1, 2, 0, 0],
      [0, 2, 1, 1, 1, 1, 1, 1, 2, 0],
      [0, 2, 2, 2, 1, 1, 2, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 1, 1, 1, 2, 0, 0],
      [0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocks: [
      { id: 1, type: 1, position: [3, 2] },
      { id: 2, type: 1, position: [5, 6] },
      { id: 3, type: 1, position: [8, 4] },
      { id: 4, type: 2, position: [5, 2] },
      { id: 5, type: 2, position: [5, 7] },
      { id: 6, type: 2, position: [7, 4] },
    ],
    target: [3, 2],
    bonus: 400,
    password: 'inemuri.',
  },
  {
    id: 25,
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 2, 0],
      [2, 2, 2, 2, 2, 2, 2, 1, 2, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 1, 1, 1, 1, 1, 1, 1, 2, 0],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    ],
    blocks: [
      { id: 1, type: 6, position: [8, 1] },
      { id: 2, type: 6, position: [10, 1] },
      { id: 3, type: 4, position: [9, 7] },
      { id: 4, type: 4, position: [9, 5] },
      { id: 5, type: 1, position: [10, 5] },
      { id: 6, type: 1, position: [10, 7] },
      { id: 7, type: 1, position: [8, 3] },
      { id: 8, type: 2, position: [9, 3] },
      { id: 9, type: 2, position: [6, 7] },
      { id: 10, type: 3, position: [10, 3] },
      { id: 11, type: 3, position: [8, 5] },
      { id: 12, type: 5, position: [7, 5] },
      { id: 13, type: 5, position: [8, 7] },
      { id: 14, type: 8, position: [9, 1] },
      { id: 15, type: 8, position: [7, 7] },
    ],
    target: [6, 7],
    bonus: 700,
    password: 'sexyitoh',
  },
];
