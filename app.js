let eleves = [];
let contraire1 = ["Samuel","Kévin"];
let contraire2 = ["Fodil","Sophie"];
let contraire3 = ["Jean-Jacques","Okba"];
let contraire4 = ["Laurène","Elise"];
let contraire5 = ["Ryhad","Mario"];
let contraire6 = ["Ibni-Yamine","Seifeddine"];
let contraire7 = ["Valentin","Jamil"];
let contraire8 = ["Alexandra","Jonathan"];
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

    eleves = ["Alexandra", "Camille", "César", "Elise", "Félix", "Fodil", "Ibni-Yamine", "Jamil", "Jean-Jacques", "Jessica", "Jonathan", "Julien", "Kévin", "Laurène", "Linda", "Mario", "Mohamed", "Okba", "Ryhad", "Samuel", "Seifeddine", "Sophie", "Sylvain", "Valentin"];

    if (nbr.value == 7) {
        nbr.value = 8;
    }
    else if (nbr.value == 5) {
        nbr.value = 6
    }

    if (!nbr.value) {
        alert("Merci d'entrer un nombre d'élèves par groupes!");

    } else {
        button.innerHTML = "Nouveau tirage";

        if (document.querySelector('ul')) {
            document.querySelector('ul').remove();
        }

        if (document.querySelector('p')) {
            document.querySelector('p').remove();
        }

        let ul = document.createElement("ul");
        body.appendChild(ul);

        let j = 1;
        while (eleves.length >= nbr.value) {

            pick = [];
            for (let i = 0; i < nbr.value; i++) {
                random = Math.floor(Math.random() * (eleves.length));

                if ((eleves[random] == contraire1[1] && pick.includes(contraire1[0])) || (eleves[random] == contraire1[0] && pick.includes(contraire1[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire2[1] && pick.includes(contraire2[0])) || (eleves[random] == contraire2[0] && pick.includes(contraire2[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire3[1] && pick.includes(contraire3[0])) || (eleves[random] == contraire3[0] && pick.includes(contraire3[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire4[1] && pick.includes(contraire4[0])) || (eleves[random] == contraire4[0] && pick.includes(contraire4[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire5[1] && pick.includes(contraire5[0])) || (eleves[random] == contraire5[0] && pick.includes(contraire5[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire6[1] && pick.includes(contraire6[0])) || (eleves[random] == contraire6[0] && pick.includes(contraire6[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire7[1] && pick.includes(contraire7[0])) || (eleves[random] == contraire7[0] && pick.includes(contraire7[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire8[1] && pick.includes(contraire8[0])) || (eleves[random] == contraire8[0] && pick.includes(contraire8[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }

                }
                else if ((eleves[random] == contraire9[1] && pick.includes(contraire9[0])) || (eleves[random] == contraire9[0] && pick.includes(contraire9[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire10[1] && pick.includes(contraire10[0])) || (eleves[random] == contraire10[0] && pick.includes(contraire10[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire11[1] && pick.includes(contraire11[0])) || (eleves[random] == contraire11[0] && pick.includes(contraire11[1]))) {
                  if (eleves.length < nbr.value){
                    document.querySelector('ul').remove();
                    let p = document.createElement("p");
                    p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                    body.appendChild(p);
                  }
                  else {
                    i--;
                  }
                }
                else if ((eleves[random] == contraire12[1] && pick.includes(contraire12[0])) || (eleves[random] == contraire12[0] && pick.includes(contraire12[1]))) {
                    if (eleves.length < nbr.value){
                      document.querySelector('ul').remove();
                      let p = document.createElement("p");
                      p.innerHTML = "Merci de refaire un tirage, il y a eu un problème...";
                      body.appendChild(p);
                    }
                    else {
                      i--;
                    }
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

        if (eleves.length == 1){
          last = document.querySelector("li:first-child");
          last.innerHTML += ", " + eleves.join(', ');
        }
    }
});
