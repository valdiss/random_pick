let eleves = [];
let contraire1 = ["Samuel","Kévin"];
let contraire2 = ["Fodil","Sophie"];
let contraire3 = ["Jean-Jacques","Okba"];
let contraire4 = ["Laurène","Elise"];
let contraire5 = ["Ryhad","Mario"];
let contraire6 = ["Ibni-Yamine","Seifeddine"];
let contraire7 = ["Valentin","Jamil"];
let contraire8 = ["Alice","Jonathan"];
let contraire9 = ["Camille","Julien"];
let contraire10 = ["Jessica","Linda"];
let contraire11 = ["César","Sylvain"];
let contraire12 = ["Mohamed","Félix"];
let body = document.querySelector("body");
let form = document.querySelector("form");
let button = document.getElementById('btn');
let nbr = document.getElementById('nbr');
let last = document.querySelector("li:last-child");
let pick = [];
let random = 0;
let randomContraire = 0;

form.addEventListener("submit", function() {
    event.preventDefault();

    eleves = ["Alexandra", "Alice", "Camille", "César", "Elise", "Félix", "Fodil", "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan", "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba", "Ryhad", "Samuel", "Seifeddine", "Sophie", "Sylvain", "Valentin"];
    if (nbr.value == 7) {
        nbr.value = 8;
    }

    if (!nbr.value) {
        alert("Merci d'entrer un nombre d'élèves par groupes!");

    } else {
        button.innerHTML = "Nouveau tirage";

        if (document.querySelector('ul')) {
            // sessionStorage.setItem('precedent', document.querySelector('ul'));
            document.querySelector('ul').remove();
        }

        let ul = document.createElement("ul");
        body.appendChild(ul);

        let j = 1;
        while (eleves.length >= nbr.value) {

            pick = [];
            for (let i = 0; i < nbr.value; i++) {
                random = Math.floor(Math.random() * (eleves.length));
                if ((i == 0 && eleves.length == 25)) {
                    randomContraire = Math.floor(Math.random() * 2);
                    pick.push(eleves[eleves.indexOf(contraire1[randomContraire])]);
                    eleves.splice(eleves.indexOf(contraire1[randomContraire]), 1);
                }

                else if (eleves.length == (25-nbr.value)) {
                    randomContraire = Math.floor(Math.random() * 2);
                    pick.push(eleves[eleves.indexOf(contraire2[randomContraire])]);
                    eleves.splice(eleves.indexOf(contraire2[randomContraire]), 1);
                }

                else if (eleves.length == (25-(nbr.value*2))) {
                    randomContraire = Math.floor(Math.random() * 2);
                    pick.push(eleves[eleves.indexOf(contraire3[randomContraire])]);
                    eleves.splice(eleves.indexOf(contraire3[randomContraire]), 1);
                }

                else if ((eleves[random] == contraire1[1] && pick.includes(contraire1[0])) || (eleves[random] == contraire1[0] && pick.includes(contraire1[1]))) {

                    alert("Alerte! 3ème Guerre Mondiale en approche! J'ai relancé un tirage pour le bien de l'humanité!");
                    i--;
                }
                else if ((eleves[random] == contraire2[1] && pick.includes(contraire2[0])) || (eleves[random] == contraire2[0] && pick.includes(contraire2[1]))) {

                    alert("Alerte! 3ème Guerre Mondiale en approche! J'ai relancé un tirage pour le bien de l'humanité!");
                    i--;
                }
                else if ((eleves[random] == contraire3[1] && pick.includes(contraire3[0])) || (eleves[random] == contraire3[0] && pick.includes(contraire3[1]))) {

                    alert("Alerte! 3ème Guerre Mondiale en approche! J'ai relancé un tirage pour le bien de l'humanité!");
                    i--;
                }

                else {
                    pick.push(eleves[random]);
                    eleves.splice(random, 1);
                }

            }


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
        if (eleves.length == 1) {
            last = document.querySelector("li:last-child");
            last.innerHTML += ", " + eleves.join(', ');
        }
    }
});
