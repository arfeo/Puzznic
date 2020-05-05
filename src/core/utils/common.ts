function getRandomNum(min = 1, max = 1000, discard: number[] = []): number {
  const num: number = Math.floor(min + Math.random() * (max + 1 - min));

  if (discard.includes(num)) {
    return getRandomNum(min, max, discard);
  }

  return num;
}

function isObject(item: any): boolean {
  return !!item && Object.prototype.toString.call(item) === '[object Object]';
}

function isEmpty(item: any): boolean {
  return isObject(item) && Object.keys(item).length === 0;
}

function sleep(delay: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export {
  getRandomNum,
  isObject,
  isEmpty,
  sleep,
};
