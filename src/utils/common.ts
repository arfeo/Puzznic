import { APP } from '../constants/global';

/**
 * Function calculates the analogue of CSS vmin in pixels
 */
const calculateVMin = (): number => {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
};

/**
 * Function returns the cell size (atomic canvas measure)
 * depending on the screen size if no cell size is given in the app settings,
 * or cell size given in the app settings
 */
const setCellSize = (): number => {
  return APP.cellSize > 0 ? APP.cellSize : Math.round(calculateVMin() * 6  / 10) * 10;
};

/**
 * Function returns a random number in a given interval;
 * as an option it discards one or more numbers given in the `discard` array
 *
 * @param min
 * @param max
 * @param discard
 */
const getRandomNum = (min = 1, max = 1, discard: number[] = []): number => {
  const num: number = Math.floor(min + Math.random() * (max + 1 - min));

  if (discard.indexOf(num) > -1) {
    return getRandomNum(min, max, discard);
  }

  return num;
};

export { setCellSize, getRandomNum };
