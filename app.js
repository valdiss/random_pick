let eleves = [];
let contraire1 = ["Samuel", "Kévin"];
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
let body = document.querySelector("body"); //------------------------------nécessaire pour l'appendChild de l'ul
let form = document.querySelector("form");
let alert = document.querySelector(".alert");
let button = document.getElementById('btn'); //----------------------------ne sert qu'à changer le text du bouton
let nbr = document.getElementById('nbr'); //-------------------------------correspond au nombre d'élèves par groupes
let pick = [];
let random = 0;
let nombre = 0;
let p = document.createElement("p");
alert.appendChild(p);


form.addEventListener("submit", function() {
    event.preventDefault(); //---------------------------------------------on empêche le submit de recharger la page
    nombre = nbr.value;


    eleves = ["Alexandra", "Camille", "César", "Elise", "Félix", "Fodil", "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan", "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba", "Ryhad", "Samuel", "Seifeddine", "Sophie", "Sylvain", "Valentin"];

    if (nbr.value == 7) { //-----------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 8; //-----------------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug en changeant directement nbr.value
    } else if (nbr.value == 11 || nbr.value == 10) {
        nombre = 12;
    } else if (nbr.value == 9) {
        nombre = 8;
    }

    if (!nbr.value) {

        p.innerHTML = "Merci d'entrer un nombre d'élèves";

    } else {
        button.innerHTML = "Nouveau tirage";

        if (document.querySelector('ul')) {
            document.querySelector('ul').remove();
        }

        p.innerHTML = "";

        let ul = document.createElement("ul");
        body.appendChild(ul);

        let j = 1;
        while (eleves.length) {

            pick = []; //--------------------------------------------------------------------On vide le tableau d'élèves sélectionnés pour l'utiliser dans la prochaine boucle
            if (eleves.length < nbr.value) { //----------------------------------------------changement afin que la dernière boucle ne s'execute que eleves.length fois
                nombre = eleves.length;
            }

            for (let i = 0; i < nombre; i++) {
                random = Math.floor(Math.random() * eleves.length);
                if (document.getElementById('checkbox').checked) {


                    if ((eleves[random] == contraire1[1] && pick.includes(contraire1[0])) || (eleves[random] == contraire1[0] && pick.includes(contraire1[1]))) {

                        if (eleves.length <= nbr.value) {

                            if (document.querySelector('ul')) {
                                document.querySelector('ul').remove();
                            }

                            p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";
                            break;

                        } else {
                            p.innerHTML = "";
                            i--;
                        }
                    } else if ((eleves[random] == contraire2[1] && pick.includes(contraire2[0])) || (eleves[random] == contraire2[0] && pick.includes(contraire2[1]))) {

                        if (eleves.length <= nbr.value) {

                            if (document.querySelector('ul')) {
                                document.querySelector('ul').remove();
                            }

                            p.innerHTML = "Merci de refaire un tirage, deux élèves du dernier groupe se sont entretués...";
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

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
                            break;

                        } else {
                            p.innerHTML = "";

                            i--;
                        }
                    } else {

                        pick.push(eleves[random]);
                        eleves.splice(random, 1);

                    }

                } else {
                    pick.push(eleves[random]);
                    eleves.splice(random, 1);

                }

            }
            if (document.querySelector('ul')) {
                let li = document.createElement("li");

                if (nbr.value == 1) {

                    li.innerHTML = "Passage n°" + j + ": " + pick.join(', ');
                    ul.appendChild(li);
                    j++;

                } else {

                    li.innerHTML = "Groupe n°" + j + ": " + pick.join(', ');
                    ul.appendChild(li);
                    j++;

                }
            }
        }
    }
});
