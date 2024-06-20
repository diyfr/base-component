# BaseComponent
La librairie `base-component` fournit une classe abstraite en TypeScript qui facilite la gestion de la création, de l'affichage et de la suppression des éléments HTML dans le DOM.    
Elle inclut également des méthodes pour la mise à jour des classes CSS des éléments et pour attendre que les éléments soient effectivement rendus dans le DOM.  
C'est un composant de base pouvant être utilisé dans un projet single page en vanilla-js  

### Installation
Assurez-vous d'avoir un environnement TypeScript configuré.
```bash
npm install @diyfr/base-component
```

### Utilisation
Hériter de BaseComponent
Pour utiliser BaseComponent, vous devez créer une nouvelle classe qui hérite de BaseComponent et implémente la propriété element.

```typescript
import BaseComponent from './BaseComponent';

class MyComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.textContent = 'Hello, world!';
  }
}
```
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
#### Initialisation  🚧
```typescript
onInit: () => void
```
Cette méthode peut être redéfinie dans votre composant pour exécuter du code après que l'élément ait été rendu dans le DOM.

```typescript
class MyComponent extends BaseComponent {
  element: HTMLElement;

  constructor() {
    super();
    this.element = document.createElement('div');
    this.element.textContent = 'Hello, world!';
  }

  public onInit() {
    console.log('Composant initialisé');
  }
}
```


### Licence
Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
