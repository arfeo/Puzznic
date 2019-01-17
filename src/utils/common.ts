import { APP } from '../constants/global';

/**
 * Function calculates the analogue of CSS vmin in pixels
 */
export const calculateVMin = (): number => {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;

  return vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
};

/**
 * Function returns the cell size (atomic canvas measure)
 * depending on the screen size if no cell size is given in the app settings,
 * or cell size given in the app settings
 */
export const setCellSize = (): number => {
  return APP.cellSize > 0 ? APP.cellSize : Math.round(calculateVMin() * 6  / 10) * 10;
};
