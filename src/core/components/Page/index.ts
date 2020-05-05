import { BaseComponent } from '../BaseComponent';

const DEFAULT_LOOP_TIMEOUT = 4;

export abstract class PageComponent<TState = {}> extends BaseComponent {
  private loopRequestId: number;
  public appRoot: HTMLElement;
  public state: TState;
  public loopTimeout: number;
  public animations: { [key: string]: number[] | number };
  public afterUpdate?(): void;
  public loop?(): void;

  public constructor(...args: any[]) {
    super();

    this.eventHandlers = [];
    this.loopTimeout = DEFAULT_LOOP_TIMEOUT;
    this.animations = {};

    this.beforeMount(...args).then((): void => {
      this.loadImages(this.images).then((): void => {
        if (!this.appRoot) {
          return;
        }

        if (typeof this.render === 'function') {
          this.renderComponent();
        }

        typeof this.afterMount === 'function' && this.afterMount();
        typeof this.loop === 'function' && this.startLoop(() => this.loop());

        if (Array.isArray(this.eventHandlers) && this.eventHandlers.length > 0) {
          this.setUpEventHandlers();
        }
      });
    });
  }

  private startLoop(handler: () => void): void {
    if (typeof handler !== 'function') {
      return;
    }

    let start: number = performance.now();

    const loop = (time: number): void => {
      if (time - start > this.loopTimeout) {
        handler();

        start = time;
      }

      this.loopRequestId = window.requestAnimationFrame(loop);
    };

    this.loopRequestId = window.requestAnimationFrame(loop);
  }

  private renderComponent(): void {
    while (this.appRoot.firstChild) {
      this.appRoot.removeChild(this.appRoot.firstChild);
    }

    this.appRoot.appendChild(this.render());

    typeof this.afterUpdate === 'function' && this.afterUpdate();
  }

  public setState<K extends keyof TState>(state: (Pick<TState, K> | TState | null)): void {
    this.state = {
      ...this.state,
      ...state,
    };

    if (typeof this.render === 'function' && this.shouldUpdate(this.state)) {
      this.renderComponent();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public shouldUpdate(state: TState): boolean {
    return true;
  }

  public destroy(): void {
    typeof this.beforeUnmount === 'function' && this.beforeUnmount();

    if (typeof this.animations === 'object') {
      Object.keys(this.animations).forEach((key: string) => {
        const item: number[] | number = this.animations[key];

        if (Array.isArray(item)) {
          for (const requestId of item) {
            typeof requestId === 'number' && window.cancelAnimationFrame(requestId);
          }
        } else {
          typeof item === 'number' && window.cancelAnimationFrame(item);
        }
      });
    }

    window.cancelAnimationFrame(this.loopRequestId);

    if (Array.isArray(this.eventHandlers) && this.eventHandlers.length > 0) {
      this.removeEventHandlers();
    }
  }
}
