import { Menu } from './components/Menu';

import { APP } from './constants/global';

window.onload = () => {
  APP.pageInstance = new Menu();
};
