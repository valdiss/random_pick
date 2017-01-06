let eleves = ["Sophie", "Alexandra", "Alice", "Camille", "César", "Elise", "Felix", "Fodil",
    "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan",
    "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba",
    "Ryhad", "Samuel", "Seifeddine", "Sylvain", "Valentin"
];

let ul = document.getElementById('picked');
let button = document.getElementById('btn');
let nbr = document.getElementById('nbr');
let pick = [];
let random = 0;

button.addEventListener("click", function() {

    if (!nbr.value) {
        alert("Merci d'entrer un nombre d'élèves par groupes!");
    }

    else {
        let j = 1;
        while (eleves.length >= nbr.value) {

            pick = [];
            for (let i = 0; i < nbr.value; i++) {
                random = Math.floor(Math.random() * (eleves.length));
                pick.push(eleves[random]);
                eleves.splice(random, 1);
            }

            let li = document.createElement("li");
            li.innerHTML = "Groupe n°" + j + ": " + pick.join(', ');
            ul.appendChild(li);
            j++;
        }
        if(eleves.length > 0){
          let last = document.querySelector("li:last-child");
          last.innerHTML += ", " + eleves.join(', ');
          ul.style.border = '1px solid black';
        }
    }
});
