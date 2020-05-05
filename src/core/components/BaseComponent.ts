import { Images, EventHandler } from './types';

export abstract class BaseComponent {
  public eventHandlers: EventHandler[];
  public images: Images;
  public init?(...args: any[]): Promise<any> | void;
  public abstract render(): HTMLElement;
  public afterMount?(): void;
  public beforeUnmount?(): void;

  protected async beforeMount(...args: any[]): Promise<void> {
    typeof this.init === 'function' && await this.init(...args);

    return Promise.resolve();
  }

  protected loadImages(images: Images): Promise<any[]> {
    if (images === undefined || typeof images !== 'object' || Object.keys(images).length === 0) {
      return Promise.resolve([]);
    }

    return Promise.all(Object.keys(images).map((key: string): Promise<void> => new Promise((resolve, reject): void => {
      if (images[key] === undefined) {
        return reject();
      }

      if (!(images[key].element instanceof Image)) {
        images[key].element = new Image();
      }

      images[key].element.src = images[key].src;

      images[key].element.onload = () => {
        images[key].loaded = true;

        return resolve();
      };

      images[key].element.onerror = () => {
        images[key].loaded = false;

        return resolve();
      };
    })));
  }

  private processEventHandlers(actionType: 'add' | 'remove'): void {
    if (!Array.isArray(this.eventHandlers) || this.eventHandlers.length === 0) {
      return;
    }

    for (const prop of this.eventHandlers) {
      const { target, type, listener } = prop;

      const isApplicable: boolean = (
        target instanceof Element ||
        target instanceof HTMLDocument ||
        target instanceof Window
      );

      const element: HTMLElement = isApplicable ? target as HTMLElement : document.getElementById(target as string);

      if (!element) {
        break;
      }

      switch (actionType) {
        case 'add':
          element.addEventListener(type, listener);
          break;
        case 'remove':
          element.removeEventListener(type, listener);
          break;
        default:
          break;
      }
    }
  }

  public setUpEventHandlers(): void {
    this.processEventHandlers('add');
  }

  public removeEventHandlers(): void {
    this.processEventHandlers('remove');
  }
}
