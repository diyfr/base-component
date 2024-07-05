# BaseComponent
La librairie `base-component` fournit une classe abstraite en TypeScript qui va vous permettre la création de composants HTML. A vous de définir la complexité de vos composants et des interactions possibles. 

Ce n'est pas un framework, il n'y a pas de dépendances (donc pas de CVE), mais cela vous laisse la possibilité de créer des applications WEB structurées et facilement maintenables, car c'est du HTML de base ! 

A vous de créer votre projet single page en vanilla-js 😊

### Installation
Assurez-vous d'avoir un environnement TypeScript configuré.
```bash
npm install --save-dev @diyfr/base-component
```

### Utilisation
Hériter de BaseComponent
Pour utiliser BaseComponent, vous devez créer une nouvelle classe qui hérite de BaseComponent et implémente la propriété element.

```typescript
import BaseComponent from '@diyfr/base-component';

class MyComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.textContent = 'Hello, world!';
  }
}
```
ou en utilisant conjointement avec la librairie `@diyfr/quickdom`  

```typescript
import BaseComponent from '@diyfr/base-component';
import {qd} from '@diyfr/quickdom';

class MyComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = qd('div', {className: 'mydiv' , textContent: 'Hello, world!'});
  }
}
```

Un exemple avec plusieurs éléments HTML est disponible [sur ce repo, ici](./example/), vous y trouverez comment builder votre projet Vanilla, comment créer des interfaces evenementielles.  
(Voir le composant [HorizontalTab](./example/src/components/horizontal-tab/horizontal-tab.ts)   et l'utilisation de l'évènement `onChange` [ici](./example/src/features/tabs/tabs.ts#24) )   

Méthodes
#### Ajout d'un élément
```typescript
render(parent?: HTMLElement | BaseComponent): Promise<void>
```
Affiche l'élément dans le DOM. Si aucun parent n'est spécifié, l'élément est ajouté au body par défaut.
Cette méthode est asynchrone. Ici `MySecondComponent` hérite aussi de `BaseComponent`  
```typescript
  let div:HTMLDivElement= document.createElement('div');
  let myCpnt:MySecondComponent= new MySecondComponent();
  myCpnt.render(this.element); // C'est une promesse
  this.element.appendChild(div); // sera ajouté à this.element avant myCpnt
```

#### Suppression d'un élément
```typescript
remove(parent?: HTMLElement | BaseComponent): Promise<void>
```
Supprime l'élément du DOM. Si aucun parent n'est spécifié, l'élément est supprimé du body par défaut.
```typescript
myComponent.remove().then(() => {
  console.log('Composant supprimé');
});
```
#### Initialisation
```typescript
onInit: () => void
```
Cette méthode est déclenchée par votre composant après que l'élément ait été rendu dans le DOM.

```typescript
class MyComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.textContent = 'Hello, world!';
    this.element.onInit =()=>{
    console.log('Composant initialisé');
    }
  }
}
```

🚧 Cette librairie inclut également une méthode pour la mise à jour des classes CSS des éléments et une pour attendre que les éléments soient effectivement rendus dans le DOM.  

#### MAJ Classe CSS 🚧
```typescript
classListUpdate(element: HTMLElement, className: string, add: boolean)
```
Ajoute ou supprime une classe CSS de l'élément spécifié.
Le boolean permet de définir l'ajout ou la suppression !WIP!
```typescript
myComponent.classListUpdate(myComponent.element, 'data-active', true);
```
#### Attendre la production d'un élément HTML  🚧
```typescript
waitForRendering(itemId: string): Promise<HTMLElement | null>
```
Attend que l'élément avec l'ID spécifié soit rendu dans le DOM.

```typescript
myComponent.waitForRendering('myElementId').then(element => {
  console.log('Élément rendu :', element);
});
```

### Licence
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
