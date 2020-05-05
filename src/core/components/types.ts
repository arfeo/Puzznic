export interface EventHandler {
  target: Window | Document | HTMLElement | string;
  type: string;
  listener: EventListener;
}

export interface ImageProps {
  element?: HTMLImageElement;
  src: string;
  loaded?: boolean;
}

export interface Images {
  [key: string]: ImageProps;
}

export type ModalSize = 'large' | 'medium' | 'small';

export interface ModalOptions {
  className?: string;
  size?: ModalSize;
}
