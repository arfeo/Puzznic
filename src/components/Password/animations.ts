import { renderSlot } from './render';

function animateCurrentSlot(): void {
  let start: number = performance.now();
  let isUnderlined = true;

  cancelAnimationFrame(this.animations.animateCurrentSlot);

  const animate = (time: number): void => {
    if (time - start > 500) {
      isUnderlined = !isUnderlined;
      start = time;

      renderSlot.call(this, this.currentSlot, isUnderlined);
    }

    this.animations.animateCurrentSlot = requestAnimationFrame(animate);
  };

  this.animations.animateCurrentSlot = requestAnimationFrame(animate);
}

export { animateCurrentSlot };
