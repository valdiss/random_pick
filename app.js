let eleves = ["Sophie", "Alexandra", "Alice", "Camille", "César", "Elise", "Felix", "Fodil",
    "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan",
    "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba",
    "Ryhad", "Samuel", "Seifeddine", "Sylvain", "Valentin"
];

let ul = document.getElementById('picked');
let button = document.getElementById('btn');
let reset = document.getElementById('reset');
let nbr = document.getElementById('nbr');
let pick = [];
let random = 0;

button.addEventListener("click", function() {

    button.style.display = "none";
    reset.style.display = "inline";
    if (!nbr.value) {
        alert("Merci d'entrer un nombre d'élèves par groupes!");
    } else if (nbr.value > 25) {
        alert("Il n'y a que 25 élèves dans la promotion 3...");
    } else {
        let j = 1;
        while (eleves.length >= nbr.value) {

            pick = [];
            for (let i = 0; i < nbr.value; i++) {
                random = Math.floor(Math.random() * (eleves.length));
                pick.push(eleves[random]);
                eleves.splice(random, 1);
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
        if (eleves.length > 0) {
            let last = document.querySelector("li:last-child");
            last.innerHTML += ", " + eleves.join(', ');
        }
        ul.style.border = '1px solid black';
    }
});

reset.addEventListener("click", function() {
    window.location.reload();
});
