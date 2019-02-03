export interface IGlobals {
  pageInstance: any;
  eventListeners: { [key: string]: EventListener };
  cellSize: number;
}
