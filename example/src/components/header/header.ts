import BaseComponent from '@diyfr/base-component';
import { qd } from '@diyfr/quickdom';
import "./header.css";

export default class Header extends BaseComponent {
  readonly element: HTMLElement;
  constructor() {
    super();
    // On peut aussi untiliser du HTML directement
    this.element = qd("header", { className: "header", innerHTML: `<div class="title">Vanilla App with BaseComponent & Quickdom 🚧</div>` });
  }
}
