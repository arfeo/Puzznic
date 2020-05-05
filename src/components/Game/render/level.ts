import { renderBlock } from './block';
import { renderMapElement } from './mapElement';

function renderLevel(): void {
  const { map, blocks } = this.level;

  if (!map || !blocks) {
    return;
  }

  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y].length; x += 1) {
      renderMapElement.call(this, x, y);
    }
  }

  for (const block of blocks) {
    const top: number = this.cellSize * block.position[0];
    const left: number = this.cellSize * block.position[1];

    renderBlock.call(this, this.blocksCanvas.getContext('2d'), block.type, left, top);
  }
}

export { renderLevel };
