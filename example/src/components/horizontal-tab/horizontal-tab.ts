import BaseComponent from '@diyfr/base-component';
import { qd } from '@diyfr/quickdom';
import Tab from "../../models/tab.model";
import './horizontal-tab.css';


export default class HorizontalTab extends BaseComponent {
    readonly element: HTMLElement;
    private btnList: HTMLAnchorElement[] = new Array;

    public onChange: (tabName: string) => void = (tabName: string) => {
        throw new Error(
            "The change handler has not been defined in a HorizontalTab feature. \n" + tabName
        );
    };

    constructor(tabsList: Tab[]) {
        super();
        this.element = qd('div', { className: 'tabs' });
        tabsList.forEach(t => {
            let anchor = qd('a', { className: 'tab', id: t.name, textContent: t.label })
            anchor.onclick = (_ev: MouseEvent) => {
                this.changeTab(t.name);
            }
            this.btnList.push(anchor);
            this.element.appendChild(anchor);
        })
    }

    public changeTab(name: string): void {
        this.btnList.forEach(btn => {
            this.classListUpdate(btn, 'active', btn.id === name);
        });
        this.onChange(name);
    }
}