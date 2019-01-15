import { LEVELS } from '../../constants/levels';

import { ILevel } from '../../types/game';

class Game {
  level: ILevel;
  score: number;
  moves: number;

  constructor(level = 1, score = 0) {
    this.level = JSON.parse(JSON.stringify(LEVELS.filter((item: ILevel) => item.id === level)[0]));
    this.score = score;
    this.moves = 0;

    this.render();
  }

  render() {
    // ...
  }

  destroy() {
    // ...
  }
}

export { Game };
