import { renderBlock } from './block';

import { Block } from '../types';

function renderElementsList(): void {
  const { blocks } = this.level;

  if (!blocks) {
    return;
  }

  const ctx: CanvasRenderingContext2D = this.elementsCanvas.getContext('2d');
  let index = 1;

  ctx.clearRect(0, 0, this.cellSize * 3, this.cellSize * 11);

  for (let i = 1; i <= 8; i += 1) {
    const elements: Block[] = blocks.filter((block: Block) => {
      return block.type === i;
    });

    if (elements && elements.length > 0) {
      renderBlock.call(
        this,
        ctx,
        elements[0].type,
        this.cellSize / 3,
        this.cellSize * (index - 1) + this.cellSize * (index - 1) / 3 + this.cellSize / 3,
      );

      ctx.font = '5vmin Courier';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = 'rgb(0, 0, 0)';

      ctx.fillText(
        `X${elements.length}`,
        this.cellSize / 2 + this.cellSize,
        this.cellSize * (index - 1) + this.cellSize * (index - 1) / 3 + this.cellSize / 3 + this.cellSize,
      );

      index += 1;
    }
  }
}

export { renderElementsList };
