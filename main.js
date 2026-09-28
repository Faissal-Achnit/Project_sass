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
    cin: "AA123456",
    nom: "name1",
    prenom: "name1",
    partiPolitique: "IND",
    age: 40,
    electeurs: ["e1", "e2", "e3", "e4", "e5"],
  },
  {
    cin: "AB123456",
    nom: "name2",
    prenom: "name2",
    partiPolitique: "PAM",
    age: 40,
    electeurs: ["e6", "e7", "e8", "e9"],
  },
  {
    cin: "AC123456",
    nom: "name3",
    prenom: "name3",
    partiPolitique: "IND",
    age: 40,
    electeurs: ["e10", "e11", "e12", "e13", "e14", "e15", "e16"],
  },
  {
    cin: "AD123456",
    nom: "name4",
    prenom: "name4",
    partiPolitique: "PAM",
    age: 40,
    electeurs: ["e17", "e18"],
  },
];

function AjouterPlusieursCondidadts() {
  const candidat = {};
  let n = Number(p("Combien de candidats voulez-vous ajouter ?"));
  let i = 0;
  while (i < n) {
    let cin = p("Enter le CIN: ");
    let existe = false;
    for (let j = 0; j < candidat.length; j++) {
      if (cin === candidat[j].cin) {
        existe = true;
        break;
      }
    }
    if (existe) {
      console.log("CIN deja existe !");
      continue;
    }

    let nom = p("Enter le Nom  ");
    let prenom = p("Enter le prenom  ");
    let partiPolitique = p("Ente le partiPlique  ");
    let age = Number(p("Ente le age  "));
    while (age < 18) {
      console.log("Age ni pas corricte !");
      age = Number(p("Enter l'age: "));
    }
    candidat.cin = cin;
    candidat.nom = nom;
    candidat.prenom = prenom;
    candidat.partiPolitique = partiPolitique;
    candidat.age = age;
    candidat.electeurs = [];
    candidats.push(candidat);

    console.log("Candidat ajoute avec succes !\n");
    i++;
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
    let trouve = false;

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
        trouve = true;
      }
    }
    if (trouve === false) {
      console.log("Aucun candidat trouve pour ce parti .");
    } else {
      console.log("Choix invalide. Veuillez entrer 1 ou 2.");
    }
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
      candidats[i].age = Newage;
      candidats[i].partiPolitique = NewPartiPolitique;
      console.log(`le nouvue age ${Newage}`);
      console.log(`le nouvue partipolitique ${NewPartiPolitique}`);
      check = true;
    }
  }
  if (check) {
    console.log("Modifié avec succès");
  } else console.log("Modifié ni pas succès");
}

function Supprimer_Candidat() {
  let check = false;
  let cin = p("enter le CIN");
  for (let i = 0; i < candidats.length; i++) {
    if (cin === candidats[i].cin) {
      candidats.splice(i, 1);
      check = true;
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
function Statistiques() {
  let count = 0;
  for (let i = 0; i < candidats.length; i++) {
    count++;
  }
  console.log(`le nomber total de condidats is : ${count}`);
  console.log("-------------------------------------------------\n");

  let nomberTotalVote = 0;
  for (let i = 0; i < candidats.length; i++) {
    nomberTotalVote = nomberTotalVote + candidats[i].electeurs.length;
  }
  console.log(`le nomber total de vote is : ${nomberTotalVote}`);
}
do {
  Menu();

  choix = Number(p("Enter la valeur de Menu\t"));

  switch (choix) {
    case 1:
      console.log("\n***************************************");
      console.log("      AJOUTER PLUSIEURS CANDIDATS");
      console.log("***************************************\n");
      AjouterPlusieursCondidadts();
      break;

    case 2:
      console.log("\n***************************************");
      console.log("         AFFICHER LES CANDIDATS");
      console.log("***************************************\n");
      AfficherlisteCondidat();
      break;

    case 3:
      console.log("\n***************************************");
      console.log("          VOTER POUR UN CANDIDAT");
      console.log("***************************************\n");
      VotesCondidats();
      break;

    case 4:
      console.log("\n***************************************");
      console.log("       MODIFIER UN CANDIDAT");
      console.log("***************************************\n");
      ModifierInformationsCandidat();
      break;

    case 5:
      console.log("\n***************************************");
      console.log("       SUPPRIMER UN CANDIDAT");
      console.log("***************************************\n");
      Supprimer_Candidat();
      break;

    case 6:
      console.log("\n***************************************");
      console.log("       RECHERCHER UN CANDIDAT");
      console.log("***************************************\n");
      RechercherCandidats();
      break;

    case 7:
      console.log("\n***************************************");
      console.log("             STATISTIQUE ");
      console.log("\n***************************************");
      Statistiques();

      break;

    case 0:
      break;
    default:
      console.log("\n***************************************");
      console.log("          CHOIX INVALIDE !");
      console.log("***************************************\n");
      break;
  }
} while (choix !== 0);

console.log("\n*************** QUITES ***************");
