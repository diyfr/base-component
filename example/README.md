# BAseComponent Demo

Permet la mise en oeuvre de BaseComponent

### Développement
Ce projet n'utilise pas de framework ni de design system tel que Bootstrap ou Tailwind.  

[Vite](https://vitejs.dev/) est un outil front-end JavaScript qui vise à améliorer la rapidité de développement en offrant un serveur de développement rapide et une compilation optimisée pour la production. Il prend la suite d'une grande famille dans laquelle on peut évoquer Grunt, Gulp, et dernièrement Webpack.  
Cet outil est utilisé par un certain nombre de frameworks, tel que Vue.js, Svelte, React .....   
  
Cela nous permet ici un découpage assez fin de l'application vanilla et assurer une meilleur maintenabilité.  
Structure des dossiers:  
- `src/components` contient des composants HTML héritant de `src/components/base-component`   
- `src/features` contient les fonctionnalités métier (assemblage de composants)   

Développer et construire :  
- Cloner le repo  
- Installer les dépendances  
```bash
npm install
```
- Lancer le projet 
```bash
npm run dev
```
- Construire le projet 
```bash
npm run build
```
`custom.d.ts` permet de d'interpréter les fichiers SVG comme des modules au format string    


