import { FunctionalKeys } from '../../constants/pages';
import { Menu } from '../Menu';

function keyDownHandler(event: KeyboardEvent): void {
  if (event.key === FunctionalKeys.Continue) {
    this.destroy();

    new Menu();
  }
}

export { keyDownHandler };
