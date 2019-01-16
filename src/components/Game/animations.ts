import { ELEMENTS_COLORS, TARGET_BLINK_DELAY } from '../../constants/game';
import { renderTarget } from './render';

/**
 * Function animates the target
 */
function animateTarget() {
  let start = performance.now();
  let state = 1;

  const animate = (time: number) => {
    if (time - start >= TARGET_BLINK_DELAY) {
      start = time;

      state += 1;

      if (state === 4) {
        state = 1;
      }
    }

    renderTarget.call(this, ELEMENTS_COLORS.target[`state${state}`]);

    this.animateTarget = requestAnimationFrame(animate);
  };

  this.animateTarget = requestAnimationFrame(animate);
}

export { animateTarget };
