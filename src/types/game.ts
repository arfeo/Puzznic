export interface ILevel {
  id: number;
  map: number[][];
  target: number[];
  blocks: IBlock[];
  bonus: number;
  password?: string;
}

export interface IBlock {
  id: number;
  type: number;
  position: number[];
}
