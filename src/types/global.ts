import { Game } from '../components/Game';
import { Menu } from '../components/Menu';

export interface IGlobals {
  pageInstance: Game | Menu;
  eventListeners: {
    onKeyDown?: EventListener;
    onKeyUp?: EventListener;
  };
  cellSize: number;
}
