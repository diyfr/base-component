import BaseComponent from "@diyfr/base-component";
import Tab from "../../models/tab.model";
import { qd } from "@diyfr/quickdom";
import './panel.css';

export default class TabContent extends BaseComponent {
    readonly element: HTMLElement;
    private title: HTMLHeadElement;
    private content:HTMLDivElement;
    public tab: Tab;

    constructor(tab: Tab) {
        super();
        this.tab = tab;
        this.element = qd('div', { className: 'tab-content' });
        this.title = qd('h4', { className: 'tab-content-title' });
        this.content = qd('div');
        this.element.append(this.title,this.content)
        
    }

    public setContent(content: string): void {
        this.content.innerHTML=content;
    }

    public setActive(tabname: string) {
        this.classListUpdate(this.element, 'active', tabname === this.tab.name)
    }
}