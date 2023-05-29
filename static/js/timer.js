// Charger le fichier JSON contenant les données du tournoi
fetch("../tournoi.json")
  .then(response => response.json())
  .then(data => {
    const tournoi = data[0]; // Supposant que le fichier JSON contient un tableau avec un seul objet tournoi
    const startDateTime = new Date(tournoi.startDateTime);
    console.log(data);
    // Appeler la fonction updateTimer() pour lancer le timer
    updateTimer(startDateTime);
  })
  .catch(error => {
    console.log("Une erreur s'est produite lors du chargement du fichier JSON :", error);
  });

function updateTimer(startDateTime) {
    const currentTime = new Date();
    const timeRemaining = startDateTime - currentTime;

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    const timerElement = document.getElementById('timer');

    // Ajouter un 0 devant les chiffres si nécessaire
    const formattedDays = days.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Afficher le timer dans le format "Jours:Heures:Minutes:Secondes"
    timerElement.textContent = `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Mettre à jour le timer toutes les secondes
    setInterval(() => {
        updateTimer(startDateTime);
    }, 1000);
}