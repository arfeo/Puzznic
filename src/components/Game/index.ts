import { PageComponent } from '../../core/components/Page';

import { LEVELS } from '../../constants/levels';
import { TARGET_BLINK_DELAY } from '../../constants/game';
import { CELL_SIZE_VMIN } from '../../constants/global';

import { getCellSize } from '../../core/utils/game';
import { checkBlocksToFall } from './actions';
import { onKeyDown, onKeyUp } from './events';
import { generateBlocksIconsCorrelation, getInitialTargetPosition } from './helpers';
import { animateTarget } from './animations';
import { renderGameWindow } from './render';

import { Block, BlockIcons, KeysDown, Level } from './types';

class Game extends PageComponent {
  private level: Level & { target: [number, number] };
  private score: number;
  private moves: number;
  private cellSize: number;
  private keysDown: KeysDown;
  private backgroundCanvas: HTMLCanvasElement;
  private elementsCanvas: HTMLCanvasElement;
  private gridCanvas: HTMLCanvasElement;
  private blocksCanvas: HTMLCanvasElement;
  private targetCanvas: HTMLCanvasElement;
  private bonusCanvas: HTMLCanvasElement;
  private targetBlinkDelay: number;
  private currentBlock: Block;
  private blocksMoving: number[];
  private clearBonus: number;
  private blocksIcons: BlockIcons;
  private isIconModeOn: boolean;
  private isLevelCompleted: boolean;
  private isGameOver: boolean;

  public animations: {
    animateTarget: number;
  };

  public init(level = 1, score = 0, isIconMode = true, icons: BlockIcons = {}): void {
    this.level = JSON.parse(JSON.stringify(LEVELS.find((item: Level) => item.id === level)));
    this.score = score;
    this.moves = 0;

    this.level.target = getInitialTargetPosition(this.level);

    this.cellSize = getCellSize(CELL_SIZE_VMIN);
    this.blocksIcons = Object.keys(icons).length > 0 ? icons : generateBlocksIconsCorrelation();

    this.appRoot = document.getElementById('root');
    this.backgroundCanvas = document.createElement('canvas');
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
        listener: onKeyDown.bind(this),
      },
      {
        target: document,
        type: 'keyup',
        listener: onKeyUp.bind(this),
      },
    ];

    this.animations = {
      animateTarget: null,
    };
  }

  public afterMount(): void {
    animateTarget.call(this);
  }

  public loop(): void {
    checkBlocksToFall.call(this);
  }

  public render(): HTMLElement {
    return renderGameWindow.call(this);
  }
}

export { Game };
