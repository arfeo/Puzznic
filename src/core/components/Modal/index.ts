import { BaseComponent } from '../BaseComponent';
import { PageComponent } from '../Page';

import { ModalOptions } from '../types';

export abstract class ModalComponent extends BaseComponent {
  private readonly parent: PageComponent;
  private readonly modalContainer: HTMLElement;
  private readonly modalMask: HTMLElement;
  private readonly modalWindow: HTMLElement;
  private readonly modalClose: HTMLElement;
  private readonly modalBody: HTMLElement;

  protected constructor(parent: PageComponent, options: ModalOptions = {}, ...args: any[]) {
    super();

    const { className, size } = options;

    this.parent = parent;
    this.eventHandlers = [];

    this.modalContainer = document.createElement('div');
    this.modalMask = document.createElement('div');
    this.modalWindow = document.createElement('div');
    this.modalClose = document.createElement('div');
    this.modalBody = document.createElement('div');

    this.modalContainer.classList.add('modal-container', className || 'modal-container');
    this.modalMask.className = 'modal-mask';
    this.modalWindow.classList.add('modal-window', size || 'medium');
    this.modalClose.className = 'modal-close';
    this.modalBody.className = 'modal-body';

    document.body.appendChild(this.modalContainer);
    this.modalContainer.appendChild(this.modalMask);
    this.modalContainer.appendChild(this.modalWindow);
    this.modalWindow.appendChild(this.modalClose);
    this.modalWindow.appendChild(this.modalBody);

    const { eventHandlers: parentEventHandlers } = this.parent;

    if (Array.isArray(parentEventHandlers) && parentEventHandlers.length > 0) {
      this.parent.removeEventHandlers.call(this.parent);
    }

    this.modalClose.addEventListener('click', this.destroy.bind(this));

    this.beforeMount(...args).then((): void => {
      this.loadImages(this.images).then((): void => {
        if (typeof this.render === 'function') {
          this.renderComponent();
        }

        typeof this.afterMount === 'function' && this.afterMount();

        if (Array.isArray(this.eventHandlers) && this.eventHandlers.length > 0) {
          this.setUpEventHandlers();
        }
      });
    });
  }

  private renderComponent(): void {
    while (this.modalBody.firstChild) {
      this.modalBody.removeChild(this.modalBody.firstChild);
    }

    this.modalBody.appendChild(this.render());
  }

  public destroy(restoreParentHandlers = true): void {
    const { eventHandlers: parentEventHandlers } = this.parent;

    typeof this.beforeUnmount === 'function' && this.beforeUnmount();

    if (Array.isArray(this.eventHandlers) && this.eventHandlers.length > 0) {
      this.removeEventHandlers();
    }

    this.modalContainer.remove();

    if (restoreParentHandlers && Array.isArray(parentEventHandlers) && parentEventHandlers.length > 0) {
      this.parent.setUpEventHandlers.call(this.parent);
    }
  }
}
