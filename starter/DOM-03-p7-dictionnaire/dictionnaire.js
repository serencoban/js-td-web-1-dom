// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 7 : « Dictionnaire » : construire un dictionnaire
1. Votre dictionnaire contient les mots et les définitions suivantes :
    - Procrastination : Tendance pathologique à remettre systématiquement au lendemain
    - Tautologie : Phrase dont la formulation ne peut être que vraie
    - Oxymore : unit dans un même syntagme deux termes sémantiquement opposés
2. Stockez la liste des mots du dictionnaire dans la variable mots,
    qui est un tableau d'objets :
    - chaque élément du tableau représente un mot ;
    - chaque mot est lui-même un objet avec deux propriétés :
        * une propriété "terme", et
        * une propriété "definition"
3. Créer le dictionnaire sur la page web, dans la div d'id "contenu"
AIDE : utilisez la méthode forEach() pour parcourir le tableau de mots
*/

const mots =[
    {
        terme: 'Procrastination', definition : 'Tendance pathologique à remttre systématiquement au lendemain'},
    {
        terme: 'Tautologie', definition: 'Phrase dont la formulation ne peut être que vraie'},
    {
        terme: 'Oxymore', definition: 'unit dans un même syntagme deux termes sémantiquement opposés'
    }
]

console.log(mots);

    const dlElement = document.getElementById('contenu');

for (const mot of mots){
    console.log(mot)
    dlElement.insertAdjacentHTML('beforeend', '<dt>${mot.terme}</dt>')
    dlElement.insertAdjacentHTML('beforeend', '<dd>${mot.definition}</dd>')
}
