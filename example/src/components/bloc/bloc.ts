import "./bloc.css";
import BaseComponent from '@diyfr/base-component';
import {qd} from '@diyfr/quickdom';
import expandIcon from "./expand.svg?raw";
import reduceIcon from "./reduce.svg?raw";

export default class Bloc extends BaseComponent {
  readonly element: HTMLDivElement;
  readonly iconElement: HTMLDivElement;
  readonly blocContent: HTMLDivElement;

  constructor(
    title: string,
    canReduce: boolean,
    reduce?: boolean,
    id?: string
  ) {
    super();
    this.element = qd("div");
    this.element.className = "bloc";
    if (id) {
      this.element.id = id;
    }
    let headerElement = qd("div");
    headerElement.className = "bloc-header";
    let titleElement = qd("div");
    titleElement.className = "title";
    titleElement.innerHTML = title;
    headerElement.appendChild(titleElement);
    this.iconElement = qd("div");
    this.iconElement.className = "icon";
    if (canReduce) {
      if (reduce) {
        this.iconElement.innerHTML = expandIcon;
      } else {
        this.iconElement.innerHTML = reduceIcon;
      }
      this.iconElement.addEventListener("click", (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        this.expand(this.blocContent.classList.contains("reduced"));
      });
    }
    headerElement.appendChild(this.iconElement);
    this.element.appendChild(headerElement);
    this.blocContent = qd("div");
    this.blocContent.className = "bloc-content";
    if (reduce) {
      this.blocContent.classList.add("reduced");
      this.element.classList.add("reduced");
    }
    this.element.appendChild(this.blocContent);
  }

  public expand(expanded: boolean): void {
    if (expanded) {
      this.blocContent.classList.remove("reduced");
      this.element.classList.remove("reduced");
      this.iconElement.innerHTML = reduceIcon;
    } else {
      this.blocContent.classList.add("reduced");
      this.element.classList.add("reduced");
      this.iconElement.innerHTML = expandIcon;
    }
  }

  // Titre, option repliable ou pas, content
  // event onChange
}
