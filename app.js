let eleves = [];
let vener = ["Alice", "Jessica"];
// let venertwo = ["Okba","Alexandra"];
let body = document.querySelector("body");
let form = document.querySelector("form");
let button = document.getElementById('btn');
let nbr = document.getElementById('nbr');
let pick = [];
let random = 0;

form.addEventListener("submit", function() {
    event.preventDefault();

    eleves = ["Sophie", "Alexandra", "Alice", "Camille", "César", "Elise", "Felix", "Fodil",
        "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan",
        "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba",
        "Ryhad", "Samuel", "Seifeddine", "Sylvain", "Valentin"
    ];
    if (nbr.value == 7) {
        nbr.value = 8;
    }

    if (!nbr.value) {
        alert("Merci d'entrer un nombre d'élèves par groupes!");

    } else {
        button.innerHTML = "Nouveau tirage";

        if (document.querySelector('ul')) {
            sessionStorage.setItem('precedent', document.querySelector('ul'));
            document.querySelector('ul').remove();
        }

        let ul = document.createElement("ul");
        body.appendChild(ul);

        let j = 1;
        while (eleves.length >= nbr.value) {

            pick = [];
            for (let i = 0; i < nbr.value; i++) {
                random = Math.floor(Math.random() * (eleves.length));

                if ((eleves[random] == vener[0] && pick.includes(vener[1])) || (eleves[random] == vener[1] && pick.includes(vener[0]))) {

                    alert("Alerte! 3ème Guerre Mondiale en approche! Refaites un tirage pour le bien de l'humanité!");
                    ul.remove();

                }
                // else if ((eleves[random] == venertwo[0] && pick.includes(venertwo[1])) || (eleves[random] == venertwo[1] && pick.includes(venertwo[0]))) {
                //     alert("oh oh Okba et Alexandra ensemble!");
                //     window.location.reload();
                // }
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
            let last = document.querySelector("li:last-child");
            last.innerHTML += ", " + eleves.join(', ');
        } else if (eleves.length > 1) {
            let li = document.createElement("li");
            li.innerHTML = "Groupe n°" + j + ": " + eleves.join(', ');
            ul.appendChild(li);
        }
    }
});
