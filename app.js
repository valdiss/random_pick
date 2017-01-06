let eleves = ["Sophie", "Alexandra", "Alice", "Camille", "César", "Elise", "Felix", "Fodil",
    "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan",
    "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba",
    "Ryhad", "Samuel", "Seifeddine", "Sylvain", "Valentin"
];

let div = document.getElementById('picked');
let button = document.getElementById('btn');
let nbr = document.getElementById('nbr');
let pick= [];
let random = 0;

button.addEventListener("click", function(){
  if (!nbr.value){
    alert ("Merci d'entrer un nombre d'élèves par groupes!");
  }
  else {
    while (eleves.length >= nbr.value) {
        pick = [];
        for (let i = 0; i < nbr.value; i++) {
            random = Math.floor(Math.random()* (eleves.length));
            pick.push(eleves[random]);
            eleves.splice(random, 1);
        }
        let p = document.createElement("p");
        p.innerHTML = pick;
        div.appendChild(p);
    }
    let p = document.createElement("p");
    p.innerHTML = eleves;
    div.appendChild(p);
  }
});
