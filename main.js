const p = require("prompt-sync")();
let choix;
function Menu() {
  console.log(
    "*************** Gestion des Élections et Listes Électorales au Maroc ***************\n",
  );
  console.log("1. Ajouter plusieurs candidats à la fois.");
  console.log("2. Afficher la liste des candidats ");
  console.log("3. Voter pour un candidat :");
  console.log("4. Modifier les informations d'un candidat :");
  console.log("5. Supprimer un candidat :");
  console.log("6. Rechercher des candidats :");
  console.log("7. Statistiques de l'élection :");
  console.log("0: Exit");
  console.log(
    "***********************************************************************************\n",
  );
}
const candidats = [
  {
    cin: "dkjhq",
    nom: "asd",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["a", "d", "s", "s"],
  },
  {
    cin: "ahsdb",
    nom: "efe",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["a", "s", "s"],
  },
  {
    cin: "jdwkq",
    nom: "fwe",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["a", "s"],
  },
  {
    cin: "hasd",
    nom: "Boushaba",
    prenom: "Soufiane",
    partiPolitique: "Indépendant",
    age: 40,
    electeurs: ["a", "d", "d", "s", "s"],
  },
];
function AjouterPlusieursCondidadts() {
  const candidat = {};
  let n = Number(p("Combien de candidats voulez-vous ajouter ?"));
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
    for (let i = 0; i < candidats.length; i++) {
      for (let j = 0; j < candidats.length - 1; j++) {
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
  let CIN = p("Donner voter CIN : ");
  let dejaVote = false;

  for (let i = 0; i < candidats.length; i++) {
    for (let j = 0; j < candidats[i].electeurs.length; j++) {
      if (CIN === candidats[i].electeurs[j]) {
        dejaVote = true;
      }
    }
  }
  if (dejaVote) {
    console.log("Vous avez deja vote");
    return;
  }
  let CinCandida = p("Enter la CIN du candidat: ");
  let trouve = false;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === CinCandida) {
      candidats[i].electeurs.push(CIN);
      trouve = true;
    }
  }
  if (trouve) {
    console.log("Vote enregistre avec succes.");
  } else {
    console.log("Condidat introuvable.");
  }
}

function ModifierInformationsCandidat() {
  let check = false;
  let cin = p("enter le cin");
  for (let i = 0; i < candidats.length; i++) {
    if (cin === candidats[i].cin) {
      let Newage = Number(p("Enter new age"));
      let NewPartiPolitique = p("Enter new partipolitique");
      console.log(`le nouvue age ${Newage}`);
      console.log(`le nouvue partipolitique ${NewPartiPolitique}`);
      check = true;
    }
    if (check) {
      console.log("Modifié avec succès");
    } else console.log("Modifié ni pas succès");
  }
}

function Supprimer_Candidat() {
  let check = true;
  let cin = p("enter le CIN");
  for (let i = 0; i < candidats.length; i++) {
    if (cin === candidats[i].cin) {
      candidats[i].splice(i, 1);
    }
  }
  if (check) {
    console.log("supprime succes");
  } else {
    console.log("suprime ni pas seccus");
  }
}

function RechercherCandidats() {
  let nom = p("enter le nom ");
  let check = false;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].nom === nom) {
      console.log(`\n# Candidat ${i + 1}:`);
      console.log(`CIN: ${candidats[i].cin}`);
      console.log(`Nom: ${candidats[i].nom}`);
      console.log(`Prénom: ${candidats[i].prenom}`);
      console.log(`Parti politique: ${candidats[i].partiPolitique}`);
      console.log(`Âge: ${candidats[i].age}`);
      console.log(`Nombre de votes: ${candidats[i].electeurs.length}`);
      console.log("-----------------------------");
      check = true;
    }
  }
  if (check) {
    console.log("Recherche réussie !");
  } else {
    console.log("condidat introuvable");
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
      VotesCondidats();
      break;
    case 4:
      ModifierInformationsCandidat();
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
