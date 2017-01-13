let elevespb = [];
let randomgr = 0;
let randomel = 0;
let nombre = 0;
let ligne1 = [];
let ligne2 = [];
let body = document.querySelector("body");
let form = document.querySelector("form");
let nbr = document.getElementById('nbr');
let alert = document.querySelector(".alert");
let button = document.getElementById('btn');
let p = document.createElement("p");




form.addEventListener("submit", function() {
    event.preventDefault();
    elevespb = [
        ["Samuel", "Kévin"],
        ["Fodil", "Sophie"],
        ["Jean-Jacques", "Okba"],
        ["Laurène", "Elise"],
        ["Ryhad", "Mario"],
        ["Ibni-Yamine", "Seifeddine"],
        ["Valentin", "Jamil"],
        ["Alexandra", "Jonathan"],
        ["Camille", "Julien"],
        ["Jessica", "Linda"],
        ["César", "Sylvain"],
        ["Mohamed", "Félix"]
    ];
    nombre = nbr.value;
    p.innerHTML = "";
    alert.appendChild(p);

    if (nombre == 7) { //----------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 6; //----------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug
    }

    else if (nombre == 5) { //----------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 6; //----------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug
    }

    else if (nombre == 11 || nombre == 10) { //----------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 12; //----------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug
    }
    else if (nombre == 9) { //----------------------------------------------Le chiffre 7 est problématique, sur 24 élèves, nous aurions 3 groupes de 7 et un de 3
        nombre = 8; //----------------------------------------------la variable est juste là pour que l'utilisateur ne crois pas à un bug
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

        while (elevespb.length > 0) {
            if (elevespb.length<nbr.value) {
              nombre = elevespb.length;
            }

            for (let i = 0; i < nombre; i++) {

                randomgr = Math.floor(Math.random() * elevespb.length);
                randomel = Math.floor(Math.random() * 2);
                console.log ((elevespb.length) + " le groupe random n° " +randomgr );

                ligne1.push(elevespb[randomgr][randomel]);
                elevespb[randomgr].splice(randomel, 1);
                ligne2.push(elevespb[randomgr][0]);
                elevespb.splice(randomgr, 1);

            }
            var li = document.createElement("li");
            li.innerHTML = "Groupe n°" + j + ": " + ligne1.join(', ');
            ul.appendChild(li);
            j++;
            ligne1 = [];

            var li = document.createElement("li");
            li.innerHTML = "Groupe n°" + j + ": " + ligne2.join(', ');
            ul.appendChild(li);
            j++;
            ligne2 = [];
        }
    }
});
