let eleves = []; //----------------------------------------------------------------------déclaré une seule fois, afin de ne pas avoir a le faire a chaque submit du formulaire
let teams = [];
let contraire1 = ["Samuel", "Kévin"]; //-------------------------------------------------les élèves qui ne s'entendent pas
let contraire2 = ["Fodil", "Sophie"];
let contraire3 = ["Jean-Jacques", "Okba"];
let contraire4 = ["Laurène", "Elise"];
let contraire5 = ["Ryhad", "Mario"];
let contraire6 = ["Ibni-Yamine", "Seifeddine"];
let contraire7 = ["Valentin", "Jamil"];
let contraire8 = ["Alexandra", "Jonathan"];
let contraire9 = ["Camille", "Julien"];
let contraire10 = ["Jessica", "Linda"];
let contraire11 = ["César", "Sylvain"];
let contraire12 = ["Mohamed", "Félix"];
let body = document.querySelector("body"); //---------------------------------------------nécessaire pour l'appendChild de l'ul
let form = document.querySelector("form");
let alert = document.querySelector(".alert"); //------------------------------------------la div qui contient le paragraphe signalant les erreurs
let button = document.getElementById('btn'); //-------------------------------------------ne sert qu'à changer le text du bouton
let precedent = document.getElementById('tiragePrecedent')
let nbr = document.getElementById('nbr'); //----------------------------------------------correspond au nombre d'élèves demandé par groupes
let pick = []; //-------------------------------------------------------------------------tableau qui contiendra les membres d'un groupe
let random = 0; //------------------------------------------------------------------------mis ici afin de ne pas avoir a déclarer la variable a chaque fois que l'on tire un nom
let nombre = 0;
let p = document.createElement("p"); //---------------------------------------------------Le paragraphe qui signale des erreurs est déclaré ici, ainsi on ne change que l'innerHTML lorsqu'une erreur apparait
alert.appendChild(p); //------------------------------------------------------------------Même concept, on ne l'intègre ainsi qu'une fois dans le DOM


form.addEventListener("submit", function() { //--------------------------------------------Ici on écoute sur un submit, ainsi nous pouvons donner des règles à l'input ainsi que faire un tirage en appuyant sur la touche 'entrer'
    event.preventDefault(); //------------------------------------------------------------on empêche le submit de recharger la page
    nombre = nbr.value; //----------------------------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug en changeant directement nbr.value

    teams = ["Odin", " Aphrodite", "Athéna", "Hadès", "Hélios", "Poséidon", "Zeus", "Gaïa", "Némésis", "Dionysos", "Artémis", "Apollon"];
    eleves = ["Alexandra", "Camille", "César", "Elise", "Félix", "Fodil", "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan", "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba", "Ryhad", "Samuel", "Seifeddine", "Sophie", "Sylvain", "Valentin"];
    //------------------------------------------------------------------------------------On remplit la liste d'élèves, la page n'étant pas rechargée à chaque submit, au deuxième tirage nous aurions un tableau vide
    if (nbr.value == 7) { //--------------------------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 8; //--------------------------------------------------------------------Ce groupe de 3 devrait alors etre répartit sur les 3 premiers groupes, ce qui nous donne des groupes de 8, on évite ainsi un calcul inutile et complexe
    } else if (nbr.value == 11 || nbr.value == 10) {
        nombre = 12;
    } else if (nbr.value == 9) {
        nombre = 8;
    }

    button.innerHTML = "Nouveau tirage"; //------------------------------------------------On change le texte du bouton après le premier tirage

    if (document.querySelector('ul')) {
        localStorage.setItem('tiragePrecedent', document.querySelector('ul').innerHTML);
        document.querySelector('ul').remove(); //------------------------------------------On supprime l'ancien tirage s'il existe
    }

    p.innerHTML = ""; //-------------------------------------------------------------------On efface le message d'erreur du précédent tirage

    let ul = document.createElement("ul"); //----------------------------------------------On crée un ul à chaque submit afin de profiter de l'animation
    body.appendChild(ul);

    let j = 1;
    while (eleves.length) { //------------------------------------------------------------s'arrête lorsque le tableau d'élèves est vide

        pick = []; //--------------------------------------------------------------------On vide le tableau d'élèves sélectionnés pour l'utiliser dans la prochaine boucle
        if (eleves.length < nbr.value) { //----------------------------------------------changement afin que la dernière boucle ne s'execute que 'eleves.length' fois lorsque on ne peux plus faire une ligne de 'nbr.value' éléments
            nombre = eleves.length;
        }

        for (let i = 0; i < nombre; i++) { //---------------------------------------------Boucle qui va créer un tableau de 'nombre' elements
            random = Math.floor(Math.random() * eleves.length); //-------------------------On tire un index random
            if (document.getElementById('checkbox').checked) { //--------------------------condition afin de choisir avec ou sans prise en compte des conflits


                if ((eleves[random] == contraire1[1] && pick.includes(contraire1[0])) || (eleves[random] == contraire1[0] && pick.includes(contraire1[1]))) { //On test si le tirage random n'est pas problématique, si ce n'est pas le cas on passe au couple problématique suivant

                    if (eleves.length <= nbr.value) { //-----------------------------------Si on se trouve à la dernière ligne et qu'il y a conflit, on affiche un message d'erreur et on supprime l'ul afin que les listes ne soient pas intégrées au DOM

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";
                        //----------------------------------------------------------On sort du bourbier!!

                    } else { //------------------------------------------------------------Si ce n'est pas la dernière ligne, on refait un tour sans rien ajouter au tableau 'pick'
                        p.innerHTML = ""; //-----------------------------------------------On efface le message d'erreur s'il a été affiché précédemment
                        i--;
                    }
                } else if ((eleves[random] == contraire2[1] && pick.includes(contraire2[0])) || (eleves[random] == contraire2[0] && pick.includes(contraire2[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire3[1] && pick.includes(contraire3[0])) || (eleves[random] == contraire3[0] && pick.includes(contraire3[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire4[1] && pick.includes(contraire4[0])) || (eleves[random] == contraire4[0] && pick.includes(contraire4[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire5[1] && pick.includes(contraire5[0])) || (eleves[random] == contraire5[0] && pick.includes(contraire5[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire6[1] && pick.includes(contraire6[0])) || (eleves[random] == contraire6[0] && pick.includes(contraire6[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire7[1] && pick.includes(contraire7[0])) || (eleves[random] == contraire7[0] && pick.includes(contraire7[1]))) {

                    if (eleves.length < nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }
                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire8[1] && pick.includes(contraire8[0])) || (eleves[random] == contraire8[0] && pick.includes(contraire8[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }

                } else if ((eleves[random] == contraire9[1] && pick.includes(contraire9[0])) || (eleves[random] == contraire9[0] && pick.includes(contraire9[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire10[1] && pick.includes(contraire10[0])) || (eleves[random] == contraire10[0] && pick.includes(contraire10[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire11[1] && pick.includes(contraire11[0])) || (eleves[random] == contraire11[0] && pick.includes(contraire11[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else if ((eleves[random] == contraire12[1] && pick.includes(contraire12[0])) || (eleves[random] == contraire12[0] && pick.includes(contraire12[1]))) {

                    if (eleves.length <= nbr.value) {

                        if (document.querySelector('ul')) {
                            document.querySelector('ul').remove();
                        }

                        p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";


                    } else {
                        p.innerHTML = "";
                        i--;
                    }
                } else { //---------------------------------------------------------------Si aucun conflit n'a été détecté, on push le nom de l'élève dans notre tableau de ligne

                    pick.push(eleves[random]); //-----------------------------------------On push le random conditionné dans le tableau qui sera notre futur ligne
                    eleves.splice(random, 1); //------------------------------------------On le supprime de la liste d'élèves afin de s'assurer de ne pas le tirer de nouveau dans le random

                }

            } else { //--------------------------------------------------------------------Si on préfère un tirage complètement aléatoire sans conflits, même chose sans vérification des conflits

                pick.push(eleves[random]);
                eleves.splice(random, 1);

            }

        } //------------------------------------------------------------------------------Sortie du for

        if (document.querySelector('ul')) { //---------------------------------------------On vérifie que ul n'a pas été supprimé par un conflit sinon ce serait une utilisation des ressources inutiles
            let li = document.createElement("li"); //-------------------------------------Une fois le tableau de la ligne créé, on l'inclus dans le DOM avant de refaire une boucle grace au while
            random = Math.floor(Math.random() * teams.length);
            if (nbr.value == 1) { //------------------------------------------------------condition pour changer le texte au début du groupe lorsque l'on demande des groupes de 1 personne

                li.innerHTML = "Passage n°" + j + ": " + pick.join(', ') + ".";
                ul.appendChild(li);
                j++;

            } else {

                li.innerHTML = "Team " + teams[random] + " : " + pick.join(', ') + ".";
                teams.splice(random, 1);
                ul.appendChild(li);
                j++;

            }
        }
    } //---------------------------------------------------------------------------------Sortie du while
});


tiragePrecedent.addEventListener('click',function(){ //------------------------------------Lors d'un click sur le bouton "tirage Precedent"
  if (document.querySelector('ul')) {
      document.querySelector('ul').remove(); //--------------------------------------------On supprime l'ancien tirage s'il existe
  }
  p.innerHTML = "";//----------------------------------------------------------------------On efface le message d'erreur
  let ul = document.createElement("ul"); //------------------------------------------------On crée un ul afin de pouvoir recharger le tirage précédent
  body.appendChild(ul);
  document.querySelector('ul').innerHTML = localStorage.getItem("tiragePrecedent");//------On récupère le tirage précédent stocké en localStorage et on l'intègre dans le DOM via innerHTML
});
