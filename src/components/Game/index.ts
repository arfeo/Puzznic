import { PageComponent } from '../../core/components/Page';

import { LEVELS } from '../../constants/levels';
import { TARGET_BLINK_DELAY } from '../../constants/game';
import { CELL_SIZE_VMIN } from '../../constants/global';

import { renderGameWindow } from './render';
import { getCellSize } from '../../core/utils/game';
import { keyDownHandler, keyUpHandler } from './events';
import { generateBlocksIconsCorrelation } from './helpers';

import { Block, KeysDown, Level } from './types';

class Game extends PageComponent {
  private level: Level;
  private score: number;
  private moves: number;
  private cellSize: number;
  private keysDown: KeysDown;
  private elementsCanvas: HTMLCanvasElement;
  private gridCanvas: HTMLCanvasElement;
  private blocksCanvas: HTMLCanvasElement;
  private targetCanvas: HTMLCanvasElement;
  private bonusCanvas: HTMLCanvasElement;
  private targetBlinkDelay: number;
  private currentBlock: Block;
  private blocksMoving: number[];
  private clearBonus: number;
  private blocksIcons: { [key: number]: number };
  private isIconModeOn: boolean;
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  public animations: {
    animateTarget: number;
  };

  public init(level = 1, score = 0, isIconMode = true, icons: { [key: number]: number } = {}): void {
    this.level = JSON.parse(JSON.stringify(LEVELS.find((item: Level) => item.id === level)));
    this.score = score;
    this.moves = 0;

    this.appRoot = document.getElementById('root');

    this.cellSize = getCellSize(CELL_SIZE_VMIN);
    this.blocksIcons = Object.keys(icons).length > 0 ? icons : generateBlocksIconsCorrelation();

    this.elementsCanvas = document.createElement('canvas');
    this.gridCanvas = document.createElement('canvas');
    this.blocksCanvas = document.createElement('canvas');
    this.targetCanvas = document.createElement('canvas');
    this.bonusCanvas = document.createElement('canvas');

    this.targetBlinkDelay = TARGET_BLINK_DELAY;

    this.currentBlock = null;
    this.blocksMoving = [];
    this.clearBonus = 0;

    this.isIconModeOn = isIconMode;
    this.isLevelCompleted = false;
    this.isGameOver = false;

    this.keysDown = {
      catch: false,
      up: false,
      right: false,
      down: false,
      left: false,
    };

    this.eventHandlers = [
      {
        target: document,
        type: 'keydown',
        listener: keyDownHandler.bind(this),
      },
      {
        target: document,
        type: 'keyup',
        listener: keyUpHandler.bind(this),
      },
    ];

    this.animations = {
      animateTarget: null,
    };
  }

  render(): HTMLElement {
    return renderGameWindow.call(this);
  }
}

export { Game };
