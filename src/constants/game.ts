export enum MapDefinitions {
  Empty = 1,
  Wall = 2,
}

export enum FunctionalKeys {
  Catch = ' ',
  Right = 'ArrowRight',
  Left = 'ArrowLeft',
  Top = 'ArrowUp',
  Down = 'ArrowDown',
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
  },
  target: {
    state1: 'rgb(190, 188, 191)',
    state2: 'rgb(96, 95, 96)',
    state3: 'rgb(255, 255, 255)',
  },
};

export const TARGET_BLINK_DELAY = 300;
