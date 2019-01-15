import { Game } from './components/Game';

import { APP } from './constants/global';

window.onload = () => {
  APP.pageInstance = new Game();
};
