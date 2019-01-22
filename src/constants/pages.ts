export enum FunctionalKeys {
  Up = 'ArrowUp',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Continue = 'Enter',
  GoToMenu = 'q',
}

export const ELEMENTS_COLORS: { [key: string]: { [key: string]: string } } = {
  logo: {
    text: 'rgb(95, 94, 95)',
    shadow: 'rgb(0, 0, 0)',
    stroke: 'rgb(189, 187, 189)',
  },
  window: {
    background: 'rgb(255, 255, 255)',
    outerBorder: 'rgb(189, 187, 189)',
    innerBorder: 'rgb(94, 92, 94)',
    text: 'rgb(0, 0, 0)',
  },
};

export const LOGO_FONT = 'italic 20vmin Impact';

export const WINDOW_FONT = '5vmin Courier';

export const SCORE_ANIMATION_SPEED = 50;

export const PASSWORD_SYMBOLS: string[][] = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
  ['J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
  ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '.'],
];
