import { FunctionalKeys } from '../../constants/pages';
import { Menu } from '../Menu';

function onKeyDown(event: KeyboardEvent): void {
  if (event.key === FunctionalKeys.Continue) {
    this.destroy();

    new Menu();
  }
}

export { onKeyDown };
