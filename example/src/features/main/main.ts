import "./main.css";
import BaseComponent from '@diyfr/base-component';
import {qd} from '@diyfr/quickdom';

import iconGithub from './github.svg?raw';// Exemple d'intégration d'une ressource de type svg

import Tabs from "../tabs/tabs";

export default class Main extends BaseComponent {
  readonly element: HTMLElement;
  private tabsContent: Tabs = new Tabs();



  constructor() {
    super();
    this.element = qd("main");
    this.tabsContent.render(this.element);
    // Ici le contenu des onglets est géré à ce niveau 
    this.tabsContent.setContents(["BaseComponent est une classe abstraite vous permettant la construction et l'interaction avec des composants HTML<br/> C'est très léger et adapté pour réaliser des singles pages en vanilla<br/>Cette page de démo vous permet de découvrir une solution pour créer une application WEB sans Framework avec leurs nombreuses dépendances sans perdre un bon niveau de maintenabilité",
      'Quickdom est une librairie légère permettant de créer un élément HTML<br/><a href="https://github.com/diyfr/quickdom">'+iconGithub+'</a>', 'ViteJS est un front builder, il permet de construire votre front Vanilla écrit en Typescript'])
  }

}
