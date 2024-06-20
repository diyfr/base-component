export default abstract class BaseComponent {
  abstract element: HTMLElement;

  /**
   *
   * @param parent Si pas d'élément spécifié le body est pris par défaut
   * @returns
   */
  public render(parent?: HTMLElement | BaseComponent): Promise<void> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (!parent) {
          parent = document.body;
        }
        if (parent instanceof BaseComponent) {
          parent.element.appendChild(this.element);
        } else {
          parent.appendChild(this.element);
        }
        resolve();
        this.onInit();
      }, 300);
    });
  }

  /** 
    WIP
  */
  public onInit: () => void = () => {};

  public remove(parent?: HTMLElement | BaseComponent): Promise<void> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (!parent) {
          parent = document.body;
        }
        if (parent instanceof BaseComponent) {
          parent.element.removeChild(this.element);
        } else {
          parent.removeChild(this.element);
        }
        resolve();
      }, 300);
    });
  }

  /** 
    WIP
  */
  public resetTextEvent: (text: string) => void = (_text: string) => {};

  /** 
    WIP
  */
  public classListUpdate(
    element: HTMLElement,
    className: string,
    add: boolean,
  ) {
    if (!element.classList.contains(className) && add) {
      element.classList.add(className);
    } else if (element.classList.contains(className) && !add) {
      element.classList.remove(className);
    }
  }

  /**
   * Permet d'attendre que l'élément HTML soit vraiment disponible dans le DOM
   * @param itemId Id de l'élément HTML
   * @returns HTMLElement
   */
  public waitForRendering(itemId: string): Promise<HTMLElement | null> {
    return new Promise((resolve) => {
      if (document.getElementById(itemId)) {
        return resolve(document.getElementById(itemId));
      }
      const observer = new MutationObserver((_mutations) => {
        if (document.getElementById(itemId)) {
          observer.disconnect();
          resolve(document.getElementById(itemId));
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }
}
