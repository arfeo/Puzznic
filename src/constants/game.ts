export enum MapDefinitions {
  Empty = 1,
  Wall,
}

export enum FunctionalKeys {
  Catch = 'Shift',
  Up = 'ArrowUp',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  SwitchIconMode = ' ',
  GoToMenu = 'q',
  Restart = 'r',
}

export const TARGET_BLINK_DELAY = 300;

export const BLOCK_FALL_SPEED = 10;

export const ELEMENTS_COLORS: Record<'icon' | 'target', Record<string, string>> = {
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
} as const;
