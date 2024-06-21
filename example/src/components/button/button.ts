import "./button.css";
import BaseComponent from '@diyfr/base-component';
import {qd} from '@diyfr/quickdom';

export default class Button extends BaseComponent {
  readonly element: HTMLButtonElement;
  private isDisabled: boolean = false;

  public onClick: () => void = () => {
    throw new Error(
      "The click handler has not been defined in a Button component."
    );
  };

  constructor(
    text: string,
    title?: string,
    className?: string,
    id?: string,
    iconSVG?: string
  ) {
    super();
    this.element = qd("button", { className: 'btn' })
    if (className) {
      this.element.classList.add(className);
    }
    if (id) {
      this.element.id = id;
    }
    if (title) {
      this.element.title = title;
    }
    if (iconSVG) {
      let icon = document.createElement("i");
      icon.innerHTML = iconSVG;
      this.element.append(icon);

      let span = document.createElement("span");
      span.textContent = text;
      this.element.append(span);
    } else {
      this.element.textContent = text;
    }
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.isDisabled)
        this.onClick();
    });
  }

  public disabled(disable: boolean): void {
    this.isDisabled = disable
    if (disable) {
      this.element.classList.add("btn-disabled");
    } else {
      this.element.classList.remove("btn-disabled");
    }
  }
}
