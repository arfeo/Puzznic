export interface Level {
  id: number;
  map: number[][];
  blocks: Block[];
  password?: string;
}

export interface Block {
  id: number;
  type: number;
  position: [number, number];
}

export interface BlockIcons {
  [key: number]: number;
}

export interface KeysDown {
  catch: boolean;
  up: boolean;
  right: boolean;
  down: boolean;
  left: boolean;
}
