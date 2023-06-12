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
  const numTeams = participants.length;
  const numMatches = numTeams / 2;

  const bracket = document.createElement("div");
  bracket.className = "bracket";

  for (let i = 0; i < 3; i++) {
    const column = document.createElement("div");
    column.className = `column column-${i + 1}`;
    bracket.appendChild(column);

    const matchesInColumn = i === 0 ? numMatches : Math.pow(2, 3 - i - 1);

    for (let j = 0; j < matchesInColumn; j++) {
      const match = createMatch(column, participants, i, j);
      column.appendChild(match);
    }
  }

  const createTournamentButton = document.querySelector(".createTournament");
  createTournamentButton.insertAdjacentElement("afterend", bracket);
}

// Fonction pour créer un match avec les noms des participants
function createMatch(column, participants, columnIndex, matchIndex) {
  const match = document.createElement("div");
  match.className = "match";

  if (columnIndex === 0) {
    const participantIndex1 = matchIndex * 2;
    const participantIndex2 = matchIndex * 2 + 1;
    const winnerClass = getWinnerClass(participants, participantIndex1, participantIndex2);

    const topTeam = createTeam(participants[participantIndex1]);
    const bottomTeam = createTeam(participants[participantIndex2]);

    match.classList.add(winnerClass);
    match.appendChild(topTeam);
    match.appendChild(bottomTeam);
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

  if (columnIndex === 0) {
    const matchLinesAlt = document.createElement("div");
    matchLinesAlt.className = "match-lines alt";
    match.appendChild(matchLinesAlt);

    const altLine1 = document.createElement("div");
    altLine1.className = "line one";
    matchLinesAlt.appendChild(altLine1);
  }

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

// Fonction pour obtenir la classe du gagnant du match
function getWinnerClass(participants, index1, index2) {
  const score1 = participants[index1].score || 0;
  const score2 = participants[index2].score || 0;

  return score1 > score2 ? "winner-top" : "winner-bottom";
}
