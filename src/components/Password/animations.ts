import { renderSlot } from './render';

/**
 * Function animates the current password input slot: its horizontal bottom line blinks
 */
function animateCurrentSlot() {
  let start: number = performance.now();
  let isUnderlined = true;

  cancelAnimationFrame(this.animateCurrentSlot);

  const animate = (time: number) => {
    if (time - start > 500) {
      isUnderlined = !isUnderlined;
      start = time;

      renderSlot.call(this, this.currentSlot, isUnderlined);
    }

    this.animateCurrentSlot = requestAnimationFrame(animate);
  };

  this.animateCurrentSlot = requestAnimationFrame(animate);
}

export { animateCurrentSlot };
