// .js Caroussel EXO GROUPE - Sonia / Yoann / Ismail / Kevin

// /!\ Pensez à réindexer le tableau via le '-1' 
// Dans le cas d'une boucle (pas de comparaison), on compte, pas besoin
// de réindexer avec le -1

// Déclarations des variables
// -------------------------------------
let buttons = document.getElementsByClassName('btn');
// console.log(buttons);
let images = document.getElementsByClassName('img_slide');
// console.log(typeof images);
let count = 0;
// console.log(typeof count);

// Préparations des boutons next/prev
// -------------------------------------
let prev = document.getElementById('prev');
// console.log(prev);
let next = document.getElementById('next');
// console.log(next);

// Préparation des fonctions
// -------------------------------------
function nextSlide() {
    // On supprime la classe active de l'image [0]
    images[count].classList.remove('active');
    // Quand l'utilisateur va cliquer sur suivant on va incrémenter count

    // Je veux comparer (inférieur) notre compteur à la taille de notre tableau images

    // Si mon compteur est inférieur à la taille de mon tableau d'images 
        // Je rajoute 1 à mon compteur (je passe à l'image suivante)

    // Sinon cela veut dire je dépasse la longeur de mon tableau d'images
        // Je réinitialise mon compteur à 0

    if (count < images.length-1) {
        count++;
    } else {
        count = 0;
    }
    // count équivaut à 1
    images[count].classList.add('active');

    // console.log(images);
    // console.log(images.length);
    // console.log(images.length-1);
}

// nextSlide() / appel de fonction 
// console.log(nextSlide());

function prevSlide() {
    // On supprime la classe active de l'image [0]
     images[count].classList.remove('active');
    // Je décrémente quand mon compteur est supérieur à 0

    // Si mon compteur est supérieur à 0 
    if (count > 0) {
        // Alors je décrémente
        count--;
    }
    // Sinon
    else {
    // Alors mon compteur vaut la taille de mon tableau -1
    count = images.length-1;
    }

    // count équivaut à 0
    images[count].classList.add('active');
}

// Evènement d'écoute au 'click' sur les boutons (next/prev)
// -------------------------------------
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);