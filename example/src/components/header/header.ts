import "./header.css";
import BaseComponent from '@diyfr/base-component';
import {qd} from '@diyfr/quickdom';

export default class Header extends BaseComponent {
  readonly element: HTMLElement;
  constructor() {
    super();

    
    this.element = qd("header");
    this.element.className = "header";
    // On peut aussi untiliser du HTML directement
    this.element.innerHTML = `<div class="title">Vanilla App with BaseComponent & Quickdom 🚧</div>`;
  }
}
