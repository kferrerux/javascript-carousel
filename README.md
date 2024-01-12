# Exercice 0 : JAVASCRIPT - CAROUSEL
![jscarousel](https://github.com/kferrerux/javascript-carousel/assets/77007630/e72efc5b-cdd6-417b-b8ac-6165b7f9782c)

# Exercice 1 : Création de la Structure de Base
# Objectif : Préparer la structure HTML et le style CSS pour votre carrousel d'images.

**Instructions :**

Créez un fichier HTML : Commencez par ouvrir votre éditeur de texte et créez un nouveau fichier HTML. Nommez-le index.html.

**Structure HTML du Carrousel :**

À l'intérieur du corps (<body>), créez une div avec la classe slider.
Dans cette div, ajoutez trois balises img. Ces images seront les diapositives de votre carrousel.
Donnez à la première image la classe active img_slide, et aux deux autres uniquement la classe img_slide. Assurez-vous également de mettre les attributs src pour indiquer les sources des images et alt pour la description.
Créez un fichier CSS : Créez un nouveau fichier CSS. Nommez-le style.css.

**Style CSS du Carrousel :**

Dans votre fichier CSS, écrivez les règles pour centrer le carrousel sur la page.
Stylisez les images pour qu'elles soient masquées par défaut (display: none).
Ajoutez une règle pour que l'image avec la classe active soit affichée (display: block).
Liez le CSS à votre HTML : Revenez à votre fichier HTML et ajoutez un lien vers votre feuille de style CSS dans l'en-tête (<head>).

# Exercice 2 : Préparation pour la Navigation
**Objectif : Ajouter des boutons pour naviguer dans le carrousel et préparer le fichier JavaScript.**

**Instructions :**

**Ajout de Boutons de Navigation :**

Dans votre fichier HTML, sous la div du carrousel, ajoutez deux boutons.
Donnez l'ID prev au bouton "Précédent" et l'ID next au bouton "Suivant". Assurez-vous aussi de donner à ces boutons une classe pour les styliser plus tard si nécessaire.
Créez un Fichier JavaScript : Créez un nouveau fichier JavaScript. Nommez-le slider.js

**Initialisation des Variables dans le JavaScript :**

Dans votre fichier JavaScript, commencez par créer des variables pour sélectionner les boutons et les images du carrousel.
Initialisez une variable count à 0 pour suivre l'image actuellement affichée.

**Préparation des Fonctions de Navigation :**

Écrivez les structures des fonctions nextSlide et prevSlide. Ne mettez pas encore de logique à l'intérieur, juste préparez les fonctions pour une utilisation future.
Liez le JavaScript à votre HTML : Revenez à votre fichier HTML et ajoutez un lien vers votre script JavaScript avant la fermeture du corps (</body>).

# Exercice 3 : Implémentation de la Navigation
**Objectif : Rendre fonctionnels les boutons "Précédent" et "Suivant" pour naviguer entre les images.**

**Instructions :**

**Complétez les Fonctions de Navigation :**

Dans votre fichier JavaScript, complétez les fonctions nextSlide et prevSlide.
Ajoutez la logique pour changer l'image affichée en modifiant la classe active de l'image courante en fonction de la valeur de count.

## Écouteurs d'Événements :

Attachez des écouteurs d'événements aux boutons "Précédent" et "Suivant".
Faites en sorte que ces boutons appellent respectivement les fonctions prevSlide et nextSlide lorsqu'ils sont cliqués.
