// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
DOM - PREPA 5 : « Journaux » : construire une liste de journaux
1. Stocker les urls de ces trois journaux français dans un tableau :
	- "http://lemonde.fr",
	- "http://lefigaro.fr",
	- "http://liberation.fr"
2. Ajouter la liste des journaux sur la page, dans la div d'id "contenu"
*/
/* ATTENTION : Le balisage HTML proposé dans la solution est incorrect.
Il a sans doute été simplifié à outrance dans un souci 
de rendre la génération la plus simple possible en JS.
TODO : améliorer le balisage HTML généré !!! */

const journaux = [
    "http://lemonde.fr",
    "http://lefigaro.fr",
    "http://liberation.fr"
];

const divElt = document.getElementById("contenu");
const ulElt = document.createElement("ul");

for (const journal of journaux) {
    const liElt = document.createElement("li");
    const aElt = document.createElement("a");


    aElt.textContent = journal;
    aElt.href = journaux[journal];

    liElt.appendChild(aElt);
    ulElt.appendChild(liElt);
}
divElt.appendChild(ulElt)