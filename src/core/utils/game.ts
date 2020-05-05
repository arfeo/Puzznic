function getCellSize(vmin: number, denom?: number): number {
  const vpWidth: number = window.innerWidth;
  const vpHeight: number = window.innerHeight;
  const vMin: number = vpWidth >= vpHeight ? (vpHeight / 100) : (vpWidth / 100);
  const result: number = Math.round(vMin * vmin  / 10) * 10;

  return !denom || result % denom === 0 ? result : denom * (Math.abs(result / denom) + 1);
}

function getMapItemsByType(map: number[][], type: number | number[]): number[][] {
  const result: number[][] = [];

  if (!map || !Array.isArray(map)) {
    return result;
  }

  for (let y = 0; y < map.length; y += 1) {
    for (let x = 0; x < map[y].length; x += 1) {
      if ((typeof type === 'number' && map[y][x] === type) || (Array.isArray(type) && type.indexOf(map[y][x]) > - 1)) {
        result.push([y, x]);
      }
    }
  }

  return result;
}

function changeMapValue(boardMap: number[][], x: number, y: number, value: number): number[][] {
  return boardMap.map((row: number[], rowIndex: number) => row.map((column: number, columnIndex: number) => {
    return rowIndex === y && columnIndex === x ? value : boardMap[rowIndex][columnIndex];
  }));
}

export {
  getCellSize,
  getMapItemsByType,
  changeMapValue,
};
