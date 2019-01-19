export enum MapDefinitions {
  Empty = 1,
  Wall = 2,
}

export enum FunctionalKeys {
  Catch = 'Shift',
  Up = 'ArrowUp',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Continue = 'Enter',
}

export const ELEMENTS_COLORS: { [key: string]: { [key: string]: string } } = {
  empty: {
    background: 'rgb(255, 255, 255)',
  },
  wall: {
    border: 'rgb(96, 95, 96)',
    background: 'rgb(255, 255, 255)',
    shadow: 'rgb(190, 188, 191)',
    margin: 'rgb(0, 0, 0)',
  },
  block: {
    border: 'rgb(0, 0, 0)',
    background: 'rgb(96, 95, 96)',
    highlight: 'rgb(187, 186, 188)',
    label: 'rgb(255, 255, 255)',
    labelShadow: 'rgb(0, 0, 0)',
  },
  icon: {
    color1: 'rgb(255, 255, 255)',
    color2: 'rgb(0, 0, 0)',
    color3: 'rgb(190, 188, 191)',
  },
  target: {
    state1: 'rgb(190, 188, 191)',
    state2: 'rgb(96, 95, 96)',
    state3: 'rgb(255, 255, 255)',
  },
  elementsList: {
    text: 'rgb(0, 0, 0)',
  },
  brick: {
    border: 'rgb(0, 0, 0)',
    background: 'rgb(95, 94, 95)',
    highlight: 'rgb(191, 189, 191)',
  },
  scoreScreen: {
    background: 'rgb(255, 255, 255)',
    outerBorder: 'rgb(189, 187, 189)',
    innerBorder: 'rgb(94, 92, 94)',
    text: 'rgb(0, 0, 0)',
  },
};

export const TARGET_BLINK_DELAY = 300;

export const BLOCK_FALL_SPEED = 10;

export const SCORE_ANIMATION_SPEED = 50;

export const BLOCK_ELIMINATION_DELAY = 100;

export const ELEMENTS_LIST_FONT = '5vmin Courier';

export const BLOCK_LABEL_FONT = '3vmin Courier';

export const SCORE_SCREEN_FONT = '5vmin Courier';
