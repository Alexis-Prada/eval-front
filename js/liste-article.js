let tri = document.getElementById(`tri`);

// Recuperation des datas baskets.json
fetch("./json/baskets.json")
.then(res=>{
    return res.json();
})
.then(data=>{
    buildCardArticle(data);
    tri.addEventListener(`change`, ()=>{
        if(tri.value===`croissant`){
            buildCardArticle(prixCroissant(data));
        }else if(tri.value===`decroissant`){
            buildCardArticle(prixDecroissant(data));
        }else{
            buildCardArticle(data);
        };
    });
});

// Fonction pour construire les cartes article
/**
 * 
 * @param {object} donnees 
 */
function buildCardArticle(donnees){
    let template = ``;
    donnees.forEach(donnee =>{
        template+=`<article class="responsive-tel">
        <div><a href="#" title="lien pour voir details article"><img src="./assets/imagesProduits/${donnee.photo}" alt="image d'une chaussures" class="responsive"></a></div>
        <div class="flex space-between align-center">
            <h4>${donnee.nom}</h4>
            <p>${donnee.prix}€</p>
        </div>
        <p class="text-card">${donnee.description}</p>
        </article>`;
    })
    // initialisation variable a aller chercher
    document.querySelector(`.liste-article`).innerHTML=template;
};


//--------------------------
// Fonction bar de recherche
//--------------------------
// quand j'appuie sur une touche quelque chose se passe
// je regarde la valeur de mon input et regarde si la valeur est presente soit dans un titre ou dans une description
let searchBar = document.getElementById(`search`);
searchBar.addEventListener(`keyup`, (e)=>{
    let lettres = e.target.value.toLowerCase();
    let articles = document.querySelectorAll(`.liste-article article`);
    recherche(lettres, articles);
});

function recherche(lettre, articles){
    articles.forEach(article => {
        if(article.textContent.toLowerCase().includes(lettre)){
            article.classList.remove(`d-none`);
        }else{
            article.classList.add(`d-none`);
        };
    });
};

//------------------
// Fonctions de trie 
//------------------
// quand j'appuie sur le choix croissant ou decroissant la liste d'article se reorganise en fonction de leur prix
// je vais ranger tout les prix dans un tableau, les trier par ordre croissant ou decroissant et ensuite les affiché de maniere trié
function prixCroissant(donnees){
    let tab = [];
    donnees.forEach(donnee =>{
        tab.push(donnee);
    });
    tab.sort((a,b) => {
        return a.prix - b.prix;
    });
    return tab;
};

function prixDecroissant(donnees){
    let tab = [];
    donnees.forEach(donnee =>{
        tab.push(donnee);
    });
    tab.sort((a,b) => {
        return b.prix - a.prix;
    });
    return tab;
};



