const p = require("prompt-sync")();
let choix;
let n;
function Menu() {
  console.log(
    "*************** Gestion des Élections et Listes Électorales au Maroc ***************\n",
  );
  console.log("1. Ajouter un nouveau candidat :");
  console.log("2. Ajouter plusieurs candidats à la fois.");
  console.log("3. Afficher la liste des candidats ");
  console.log("4. Voter pour un candidat :");
  console.log("5. Modifier les informations d'un candidat :");
  console.log("6. Supprimer un candidat :");
  console.log("7. Rechercher des candidats :");
  console.log("8. Statistiques de l'élection :");
  console.log("0: Exit");
  console.log(
    "***********************************************************************************\n",
  );
}
const candidats = [
  {
    cin: "AB123456",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: [],
  },
];
function AjouterPlusieursCondidadts() {
  const candidat = {};
  n = Number(p("Combien de candidats voulez-vous ajouter ?"));
  for (let i = 0; i < n; i++) {
    const candidat = {};
    let cin = p("Enter le CIN  ");
    let nom = p("Enter le Nom  ");
    let prenom = p("Enter le prenom  ");
    let partiPolitique = p("Ente le partiPlique  ");
    let age = Number(p("Ente le age  "));
    candidat.cin = cin;
    candidat.nom = nom;
    candidat.prenom = prenom;
    candidat.partiPolitique = partiPolitique;
    candidat.age = age;
    candidat.electeurs = [];
    candidats.push(candidat);

    console.log("Candidat ajoute avec succes !\n");
  }
}

function AfficherlisteCondidat() {
  let choix = Number(
    p(
      "Choisissez une vue :\n" +
        "1 - Trier les candidats par nombre de votes décroissant\n" +
        "2 - Filtrer les candidats par parti politique\n",
    ),
  );

  if (choix === 1) {
    for (let i = 0; i < candidats.length - 1; i++) {
      for (let j = 0; j < candidats.length - 1 - i; j++) {
        if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
          let temp = candidats[j];

          candidats[j] = candidats[j + 1];

          candidats[j + 1] = temp;
        }
      }
    }

    for (let i = 0; i < candidats.length; i++) {
      console.log(`\n# Candidat ${i + 1}:`);
      console.log(`CIN: ${candidats[i].cin}`);
      console.log(`Nom: ${candidats[i].nom}`);
      console.log(`Prénom: ${candidats[i].prenom}`);
      console.log(`Parti politique: ${candidats[i].partiPolitique}`);
      console.log(`Âge: ${candidats[i].age}`);
      console.log(`Nombre de votes: ${candidats[i].electeurs.length}`);
      console.log("-----------------------------");
    }
  } else if (choix === 2) {
    let parti = p("Entrer le parti politique : ");

    for (let i = 0; i < candidats.length; i++) {
      if (candidats[i].partiPolitique === parti) {
        console.log(`\n# Candidat ${i + 1}:`);
        console.log(`CIN: ${candidats[i].cin}`);
        console.log(`Nom: ${candidats[i].nom}`);
        console.log(`Prénom: ${candidats[i].prenom}`);
        console.log(`Parti politique: ${candidats[i].partiPolitique}`);
        console.log(`Âge: ${candidats[i].age}`);
        console.log(`Nombre de votes: ${candidats[i].electeurs.length}`);
        console.log("-----------------------------");
      }
    }
  } else {
    console.log("Choix invalide. Veuillez entrer 1 ou 2.");
  }
}

function VotesCondidats() {
  let n = p("Donner voter CIN : ");
  let dejaVote = false;

  for (let i = 0; i < candidats.length; i++) {
    for (let j = 0; j < candidats[i].electeurs.length; j++) {
      if (n === candidats[i].electeurs[j]) {
        dejaVote = true;
      }
    }
  }
  if (dejaVote) {
    console.log("Vous avez deja vote");
    return;
  }
  let p = p("Enter la CIN du candidat: ");
  let trouve = false;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === p) {
      candidats[i].electeurs.push(p);
      trouve = true;
    }
  }
  if (trouve) {
    console.log("Vote enregistre avec succes.");
  } else {
    console.log("Condidat introuvable.");
  }
}



do {
  Menu();
  choix = Number(p("Enter la valeur de Menu\t"));

  switch (choix) {
    case 1:
      AjouterPlusieursCondidadts();
      break;
    case 2:
      AfficherlisteCondidat();
      break;
    case 3:
      console.log("3");
      break;
    case 4:
      console.log("4");
      break;
    case 5:
      console.log("5");
      break;
    case 6:
      console.log("6");
      break;
    case 7:
      console.log("7");
      break;
    case 8:
      console.log("8");
      break;
    case 0:
      console.log("Quites");
      return;
    default:
      console.log("le nomber ni pas exsit dans le Munu");
      break;
  }
} while (choix !== 0);

console.log("Quites");
