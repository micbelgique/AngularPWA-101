# Angular et PWA

## Installer Angular CLI

dans VS Code, lancez le terminal et écrivez:

``` command-line
npm i -g angular-cli
```

## Créer votre première application Angular

Pour créer votre première application, rendez-vous à nouveau dans le terminal. Une fois dans le terminal, veuillez noter:

``` command-line
ng new lenomdevotreapp
```

Il va vous demander si vous voulez inclure le routing, mettez y pour oui. Ensuite, sélectionnez CSS quand il vous demande quel feuille de style vous voulez utiliser.

## Créer votre premier Component

Ensuite, pour créer votre premier component,à nouveau dans le terminal, écrivez:

``` command-line
ng generate component lenomdevotrecomponent
```

Une fois que votre component est généré, vous allez pouvoir voir un nouveau dossier créer dans le dossier src.

## Créer votre premier Service

Une fois votre premier component créer, vous pouvez créer votre premier service qui va nous servir à récupérer des données et ensuite les traiter pour les afficher dans le component.

Pour créer un service, c'est comme pour le component, vous devez écrire dans le terminal ceci:

``` command-line
ng generate service thisisaservice
```

Dans le dossier src, vous allez trouver les 2 fichiers créés par l'Angular CLI.

## Créer des données dans votre service

Pour le moment, vous allez noter des données en dur dans votre service. Par après, vous verrez comment le faire une API par exemple.

Dans le service, on va créer un tableau d'Any.
![Créer un tableau arr privé](https://github.com/micbelgique/AngularPWA-101/blob/master/pictures/CreateArrayAny.png)
Ensuite, nous allons créer une fonction qui va renvoyer un type Any et qui sera chargée de renvoyer les données.
