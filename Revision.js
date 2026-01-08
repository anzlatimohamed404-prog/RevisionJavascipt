
/*** 
*Révison du code Javascript
* Date :08/01/2026
* Auteur : Ndovoo
*/

// La déclaration de variable
// Je déclare une variable pour enregistrer le nom du village

let nomVillage = "combani";

// Je déclare une variable pour enregister le nom de chanteur préféré

const chanteurPrefere = "shay";

// J'affiche dans la console le nom de mon chanteur
console.log(chanteurPrefere);

// je crée une variable pour enregisrer l'age de mon chanteur

let ageChanteur = 30;

// je crée un tableau de liste les 5 albums de mon chanteur
let albumsShay = [
  "Jolie Garce",
  "Antidote",
  "Portrait",
  "Acte I",
  "Acte II"
];

// j'affiche dans la console les albums N°1, N°4 et N°
console.log(albumsShay[0]); // Album N°1
console.log(albumsShay[3]); // Album N°4
console.log(albumsShay[4]); // Album N°5

/**je crée un disque CD sous forme 'objet. 
* Le disque contient 1 morceau.
* les informations du morceau sont :
*tire
*nom du chanteur
*date de sortie
*durée
* style de musique
* compositeur
* auteur
* prix
* lien vers youtube
*/

const cd = {
  morceau:{
  titre: "PMW",
  chanteur: "Shay",
  dateSortie: "2019-10-25",
  duree: "3:45",
  styleMusique: "Rap/Hip-Hop",
  compositeur: "Shay",
  auteur: "Shay",
  prix: 1.29,
  lienYoutube: "https://www.youtube.com/watch?v=xeuKZ_fImRQ"
   }
};

// J'affiche dans la console tout l'objet
console.log(cd);

// J'affiche dans la console le lien vers youtube de l'objet
console.log(cd.morceau.lienYoutube);

// J'affiche dans la console tout en Majuscule le titre du morceau
console.log(cd.morceau.titre.toUpperCase());

//  11 . // J'affiche dans la console le style du morceau en minuscules
console.log(cd.morceau.styleMusique.toLowerCase());

// je déclare une liste de notes : 24,26,86,33,17,68
let notes = [34, 26,,86,33,17,68];

// je récupére le plus grand nombre et je l'affiche dans la console
 let maxNote = Math.max(...notes);

 console.log("la plus grande note : ", maxNote);
//  j'affiche dans la console le plus petit nombre

let minNote = Math.min(...notes);

console.log("le plus petit nombre :", minNote);

let tableauFruits = ["mangue","papaye","orange","banane","jack"];
let tableauLegumes = ["demba","tomate","dodoki", "bengani","mafana"];

let fusionTableauxFruitsLegumes = [...tableauFruits, ...tableauLegumes];
console.log("fusion des fruits et legumes : ", ...tableauFruits, ...tableauLegumes);

// la nores de snap
// une MAP permet de structurer (coder) les information sous sous forme de couple.
// le couple est formé d'une clé et d'une valeur clée-valeur ou key-valeur (anglais)
//MAP() est un objet
// je vais créer une ou plusieurs issues de l'objet MAP()
let mapVetements = new Map([
    ["t-shirt" , 100],
    ["chemise", 200],
    ["robes", 300],
    ["salouva", 250]
]);
