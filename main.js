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
  },Z
];
function AjouterNoueau() {
  const candidat = {};
  n = Number(p("Ajouter plusieurs candidats à la fois \t"));
  for (let i = 0; i < n; i++) {
    let cin = p("Enter le CIN \t");
    let nom = p("Enter le Nom \t");
    let prenom = p("Enter le prenom \t");
    let partiPolitique = p("Ente le partiPlique \t");
    let age = Number(p("Ente le age \t"));
    let electeurs = [];
    candidat.cin = cin;
    candidat.nom = nom;
    candidat.prenom = prenom;
    candidat.partiPolitique = partiPolitique;
    candidat.age = age;
    candidats.push(candidat);
  }
  console.log(candidats);
}


do {
  Menu();
  choix = Number(p("Enter la valeur de Menu\t"));

  switch (choix) {
    case 1:
      AjouterNoueau();
      break;
    case 2:
      console.log("2");
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

//   console.log("Quites");
