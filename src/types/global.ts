import { Game } from '../components/Game';

export interface IGlobals {
  pageInstance: Game;
  eventListeners: {
    onKeyDown: EventListener;
    onKeyUp: EventListener;
  };
  cellSize: number;
}
