import BaseComponent from '@diyfr/base-component';
import { qd } from '@diyfr/quickdom';
import './toast.css';

export enum ToastLevel {
    DANGER,
    WARNING,
    SUCCESS
}

export class Toast extends BaseComponent {
    readonly element: HTMLElement;

    public onClose: () => void = () => {
        throw new Error(
            "The onClose handler has not been defined in a Toast component."
        );
    };

    constructor(message: string, level: ToastLevel, duration: number) {
        super();
        var countElements = document.getElementsByClassName("toast");

        this.element = qd('div', { className: 'toast' });
        this.element.style.marginTop = (countElements.length * 55) + "px";
        switch (level) {
            case ToastLevel.DANGER:
                this.classListUpdate(this.element, 'toast-danger', true);
                break;
            case ToastLevel.WARNING:
                this.classListUpdate(this.element, 'toast-warning', true);
                break;
            case ToastLevel.SUCCESS:
            default:
                this.classListUpdate(this.element, 'toast-success', true);
                break;
        }
        let msg = qd('div', { className: 'toast-content', innerHTML: message })
        this.element.appendChild(msg);

        let close = qd('div', { className: 'toast-close' })
        let iconClose = qd('img', { src: './close.svg' });
        close.appendChild(iconClose);
        close.addEventListener("click", (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            this.onClose();
        });
        this.element.appendChild(close);
        setTimeout(() => {
            this.onClose();
        }, duration);
    }
}