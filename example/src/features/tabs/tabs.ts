import "./tabs.css";
import BaseComponent from '@diyfr/base-component';
import { qd } from '@diyfr/quickdom';
import HorizontalTab from "../../components/horizontal-tab/horizontal-tab";
import Tab from "../../models/tab.model";
import TabContent from "../../components/tab-content/panel";
import { Toast, ToastLevel } from "../../components/toast/toast";

export default class Tabs extends BaseComponent {
    readonly element: HTMLElement;
    private firstPanel: TabContent = new TabContent({ name: 'first-panel', label: '@diyfr/base-component' });
    private secondPanel: TabContent = new TabContent({ name: 'second-panel', label: '@diyfr/quickdom' });
    private thirdPanel: TabContent = new TabContent({ name: 'last-panel', label: 'viteJs' });
    private tabs: HorizontalTab;

    constructor() {
        super();
        this.element = qd('div', { className: 'tabs' });
        let tabsList: Tab[] = new Array;
        tabsList.push(this.firstPanel.tab);
        tabsList.push(this.secondPanel.tab);
        tabsList.push(this.thirdPanel.tab);
        this.tabs = new HorizontalTab(tabsList);
        this.tabs.onChange = this.changeTab.bind(this);
        this.tabs.render(this.element);
        this.firstPanel.render(this.element);
        this.secondPanel.render(this.element);
        this.thirdPanel.render(this.element);
    }

    private changeTab(tabName: string): void {
        this.firstPanel.setActive(tabName);
        this.secondPanel.setActive(tabName);
        this.thirdPanel.setActive(tabName);
        if (tabName === 'last-panel') {
            this.showToast('Dernier Onglet !', ToastLevel.SUCCESS);
        }
    }

    private showToast(msg: string, level: ToastLevel) {
        let toast = new Toast(msg, level, 5000);
        toast.onClose = () => {
            toast.remove(this.element);
        };
        toast.render(this.element);
    }


    public setContents(contents: string[]): void {
        this.firstPanel.setContent(contents[0]);
        this.secondPanel.setContent(contents[1]);
        this.thirdPanel.setContent(contents[2]);
        // On sélectionne le premier onglet
        this.changeTab('first-panel')
        this.tabs.changeTab('first-panel');
    }
}