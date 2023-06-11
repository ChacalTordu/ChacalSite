function toggleCardInfo(card) {
  var cardAndTimer = card.parentElement;
  var informations = cardAndTimer.nextElementSibling;
  var etatTournoi = document.querySelector('.etatTournoi');

  card.classList.toggle('active');

  if (informations.classList.contains('hidden')) {
    // Si les informations sont cachées, on les affiche
    informations.classList.remove('hidden');
    informations.classList.add('visible');

    // On vérifie si l'état du tournoi est affiché, si c'est le cas, on le cache
    if (!etatTournoi.classList.contains('hidden')) {
      etatTournoi.classList.remove('visible');
      etatTournoi.classList.add('hidden');
    }
  } else {
    // Si les informations sont déjà affichées et l'état du tournoi est caché, on les cache
    if (etatTournoi.classList.contains('hidden')) {
      informations.classList.remove('visible');
      informations.classList.add('hidden');
    }
  }
  // On vérifie si l'état du tournoi est affiché, si c'est le cas, on cache les informations
  if (etatTournoi.classList.contains('visible')) {
    informations.classList.remove('visible');
    informations.classList.add('hidden');
  }
}





