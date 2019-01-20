export interface IGlobals {
  pageInstance: any;
  eventListeners: {
    onKeyDown?: EventListener;
    onKeyUp?: EventListener;
  };
  cellSize: number;
}
