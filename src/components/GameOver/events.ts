import { Menu } from '../Menu';

import { FunctionalKeys } from '../../constants/pages';

function onKeyDown(event: KeyboardEvent): void {
  if (event.key === FunctionalKeys.Continue) {
    this.destroy();

    new Menu();
  }
}

export { onKeyDown };
