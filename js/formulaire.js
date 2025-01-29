// Appelle et initialisation des variables et des écouteurs
// a chaque changement de l'input, j'apllique ma fonction
let nom = document.getElementById(`nom`);
nom.addEventListener(`change`, verifNom);
let prenom = document.getElementById(`prenom`);
prenom.addEventListener(`change`, verifPrenom);
let mail = document.getElementById(`mail`);
mail.addEventListener(`change`, verifMail);
let objet = document.getElementById(`objet`);
objet.addEventListener(`change`, ()=>{
    verifObjet();
    afficheInfo();
});
let message = document.getElementById(`message`);
message.addEventListener(`change`, verifMessage);
let reference = document.getElementById(`reference`);
reference.addEventListener(`change`, verifReference);

//------------------------------------
// FONCTIONS VERIFICATIONS DES SAISIES
//------------------------------------
// fonction pour verifier si le nom est bien remplie correctement
function verifNom(){
    // test si le nom est vide
    if(nom.value===``){
        afficheErreur(`nom`, `Ne peut pas être vide`);
        return false;
    }else{
        let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
        // test si le nom comporte des caracteres non autorisé
        if(reg.test(nom.value)===false){
            afficheErreur(`nom`, `Caractères non autorisés`);
            return false;
        // test si le nom n'est pas inférieur a 2 caracteres
        }else if(nom.value.length < 2){
            afficheErreur(`nom`, `Nom trop court`);
            return false;
        // test si le prenom n'est pas supérieur a 50 caracteres
        }else if(nom.value.length > 50){
            afficheErreur(`nom`, `Nom trop long`);
            return false;
        }else if(hasCode(nom.value)){
            afficheErreur(`nom`, `Pas de code ici`);
            return false;
        };;
    };
    enleveErreur(nom.id);
    return true;
};

// fonction pour verifier si le prenom est bien remplie correctement
function verifPrenom(){
    // test si le prenom est vide
    if(prenom.value===``){
        afficheErreur(`prenom`, `Ne peut pas être vide`);
        return false;
    }else{
        let reg=/^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
        // test si le prenom comporte des caracteres non autorisé
        if(reg.test(prenom.value)===false){
            afficheErreur(`prenom`, `Caractères non autorisés`);
            return false;
        // test si le prenom n'est pas inferieur a 2 caracteres
        }else if(prenom.value.length < 2){
            afficheErreur(`prenom`, `Prénom trop court`);
            return false;
        // test si le prenom n'est pas supérieur a 50 caracteres
        }else if(prenom.value.length > 50){
            afficheErreur(`prenom`, `Prénom trop long`);
            return false;
        }else if(hasCode(prenom.value)){
            afficheErreur(`prenom`, `Pas de code ici`);
            return false;
        };
    };
    enleveErreur(prenom.id);
    return true;
};

// fonction pour verifier si l'adresse mail en est une
function verifMail(){
    // test si le mail est vide
    if(mail.value===``){
        afficheErreur(`mail`, `Ne peut pas être vide`);
        return false;
    }else if(hasCode(mail.value)){
        afficheErreur(`mail`, `Pas de code ici`);
        return false;
    }else{
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
        if(reg.test(mail.value)===false){
            afficheErreur(`mail`, `Ce n'est pas une adresse mail`);
            return false;
        };
    };
    enleveErreur(mail.id);
    return true;
};

// fonction pour verifier si un objet est bien selectionné
function verifObjet(){
    // test si le select est vide
    if(objet.value===``){
        afficheErreur(`objet`, `Merci de choisir un objet`);
        return false;
    }else{
        enleveErreur(`objet`)
        return true;
    };
};

// fonction pour verifier si le message est bien remplie 
function verifMessage(){
    // Teste si le champs est vide
    if(message.value===``){
        afficheErreur(`message`, `Ne peut pas être vide`);
        return false;
    // si le champs ne comporte pas de code
    }else if(hasCode(message.value)){
        afficheErreur(`message`, `Pas de code ici`);
        return false;
    // si le message n'est pas plus long que 500 caracteres
    }else if(message.value.length>500){
        afficheErreur(`message`, `Texte trop long`);
        return false;
    };
    enleveErreur(`message`);
    return true;
};

// fonction pour verifier si la reference est bien remplie
function verifReference(){
    // test si la reference est vide
    if(reference.value===``){
        afficheErreur(`reference`, `Ne peut pas être vide`);
        return false;
    }else{
        let reg=/^[a-zA-Z]{3}-\d{6}$/
        // test si la reference est correct
        if(reg.test(reference.value)===false){
            afficheErreur(`reference`, `Mauvais format`);
            return false;
        };
    };
    enleveErreur(reference.id);
    return true;
};

//------------------
// Fonctions erreurs
//------------------
function afficheErreur(id, messageErreur){
    // Role : Afficher une erreur : mettre une bordur sur le bon input, et remplir le paragraphe d'erreur associé
    // Parametres : l'id de l'input dans lequel il y a une erreur 
    // messageErreur : le message a afficher
    // retour : rien !
    let input = document.getElementById(id);
    input.classList.add(`input-error`);
    let p = document.getElementById(`error-`+id);
    p.innerText = messageErreur;
    p.classList.remove(`d-none`);
};

function enleveErreur(id){
    // Role : enleve l'erreur sur l'input et cache le paragraphe associé
    let input = document.getElementById(id);
    input.classList.remove(`input-error`);
    let p = document.getElementById(`error-`+id);
    p.innerText = '';
    p.classList.add(`d-none`);
};

function hasCode(text){
    // cette fonction cherche dans une chaine s'il y a une balise script
    // retour true : y'a du code
    // false : y'a pas de code
    let reg = /<script>/;
    return reg.test(text);
};

//-------------------------------------------
// Fonction afficher les info supplementaires
//-------------------------------------------
// quand une option sur le produit est selectionner j'affiche les infos
// quand il ne l'est pas je les caches
function afficheInfo(){
    let infoSup = document.getElementById(`ifProduit`);
    if(objet.value===`info produit` || objet.value===`probleme produit`){
        infoSup.classList.remove(`d-none`);
    }else{
        infoSup.classList.add(`d-none`);
    };
};

let formContact = document.getElementById(`formContact`);
formContact.addEventListener(`submit`, (e)=>{
    // stop l'envoie du formulaire
    e.preventDefault();

    let vNom = verifNom();
    let vPrenom = verifPrenom();
    let vMail = verifMail();
    let vObjet = verifObjet();
    let vMessage = verifMessage();
    let vReference = verifReference();

    if(vNom===false || vPrenom===false || vMail===false || vObjet===false || vMessage===false){
        
    }else{
        if(objet.value===`info produit` || objet.value===`probleme produit`){
            if(vReference===false){

            }else{
                formContact.submit();
            };
        }else{
            formContact.submit();
        };
    };  
});