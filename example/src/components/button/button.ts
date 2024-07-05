import BaseComponent from '@diyfr/base-component';
import { qd } from '@diyfr/quickdom';
import "./button.css";

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
      let icon = qd("i", { innerHTML: iconSVG });
      this.element.append(icon);

      let span = qd("span", { textContent: text });
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
    this.classListUpdate(this.element, "btn-disabled", disable);
  }
}
