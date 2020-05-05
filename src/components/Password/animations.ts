import { renderSlot } from './render';

function animateCurrentSlot(): void {
  let start: number = performance.now();
  let isUnderlined = true;

  cancelAnimationFrame(this.animateCurrentSlot);

  const animate = (time: number): void => {
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
