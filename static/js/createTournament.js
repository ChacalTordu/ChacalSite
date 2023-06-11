function createTournament(button) {
    button.classList.add('hidden');
    // Charger le fichier JSON contenant les données du tournoi
    fetch("/tournoi.json")
      .then(response => response.json())
      .then(data => {
        const tournoi = data[0]; // Supposant que le fichier JSON contient un tableau avec un seul objet tournoi
        const participants = tournoi.participants;
        createTournamentStructure(participants);
      })
      .catch(error => {
        console.log("Une erreur s'est produite lors du chargement du fichier JSON :", error);
      });
  }
  
// Fonction pour créer la structure du tournoi en fonction du nombre de participants
function createTournamentStructure(participants) {
    const etatTournoi = document.querySelector('.etatTournoi.theme.theme-dark.visible');
  
    const bracket = document.createElement("div");
    bracket.className = "bracket";
    etatTournoi.appendChild(bracket);
  
    const firstColumn = document.createElement("div");
    firstColumn.className = "column column-1";
    bracket.appendChild(firstColumn);
  
    for (let i = 0; i < participants.length; i++) {
      const team = createTeam(participants[i]);
      firstColumn.appendChild(team);
    }
  
    for (let i = 1; i < Math.log2(participants.length); i++) {
      const column = document.createElement("div");
      column.className = "column column-" + (i + 1); // Ajout du numéro de colonne à la classe
      bracket.appendChild(column);
  
      // Ajoutez ici le code pour créer les matchs dans les colonnes suivantes si nécessaire
    }
  }
  
  // Fonction pour créer un élément représentant une équipe
  function createTeam(teamName) {
    const teamElement = document.createElement("div");
    teamElement.className = "team";
    teamElement.textContent = teamName;
    return teamElement;
  }
//   // Fonction pour créer la structure du tournoi en fonction du nombre de participants
//   function createTournamentStructure(participants) {
//     const etatTournoi = document.querySelector('.etatTournoi.theme.theme-dark.visible');
  
//     const bracket = document.createElement("div");
//     bracket.className = "bracket";
//     etatTournoi.appendChild(bracket);
    
//     // creer le nombre de column adequat
//     //for (let i = 0; i < participants.length; i++) {
//     for (let i = 0; i < Math.log2(participants.length); i++) {
//         const column = document.createElement("div");
//         column.className = "column column-" + (i + 1); // Ajout du numéro de colonne à la classe
//         bracket.appendChild(column);
      
//         if (i === 0) {
//           for (let j = 0; j < participants[i].length; j++) {
//             const match = createMatch("undefined", participants[i][j]);
//             column.appendChild(match);
//           }
//         }
//     }  
//   }
  
  // Fonction pour créer un match avec les noms des participants
  function createMatch(winnerClass, participants) {
    const match = document.createElement("div");
    match.className = "match " + winnerClass;
  
    for (let i = 0; i < participants.length; i++) {
      const team = createTeam(participants[i]);
      match.appendChild(team);
    }
  
    const matchLines = document.createElement("div");
    matchLines.className = "match-lines";
    match.appendChild(matchLines);
  
    const line1 = document.createElement("div");
    line1.className = "line one";
    matchLines.appendChild(line1);
  
    const line2 = document.createElement("div");
    line2.className = "line two";
    matchLines.appendChild(line2);
  
    return match;
  }
  
  // Fonction pour créer une équipe avec le nom du participant
  function createTeam(name) {
    const team = document.createElement("div");
    team.className = "match-top team";
  
    const nameSpan = document.createElement("span");
    nameSpan.className = "name";
    nameSpan.textContent = name;
    team.appendChild(nameSpan);
  
    return team;
  }
  
  // Fonction pour mettre à jour les scores des matchs
  function updateMatchScores(match, topScore, bottomScore) {
    const scoreSpans = match.getElementsByClassName("score");
  
    if (scoreSpans.length === 2) {
      scoreSpans[0].textContent = topScore;
      scoreSpans[1].textContent = bottomScore;
    }
  }
  
  // Fonction pour récupérer les scores des matchs et afficher le gagnant
  function getMatchScoresAndDisplayWinner(columnOne) {
    const matches = columnOne.getElementsByClassName("match");
    const winners = [];
  
    for (let i = 0; i < matches.length; i++) {
      const topScore = parseInt(matches[i].querySelector(".match-top .score").textContent);
      const bottomScore = parseInt(matches[i].querySelector(".match-bottom .score").textContent);
  
      if (topScore > bottomScore) {
        winners.push(matches[i].querySelector(".match-top .name").textContent);
      } else if (bottomScore > topScore) {
        winners.push(matches[i].querySelector(".match-bottom .name").textContent);
      } else {
        winners.push("Tie");
      }
    }
  
    const columnTwo = document.querySelector(".column.two");
    columnTwo.innerHTML = "";
  
    for (let i = 0; i < winners.length; i++) {
      const match = createMatch("undefined", [winners[i]]);
      columnTwo.appendChild(match);
    }
  }
  