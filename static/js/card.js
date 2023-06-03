// function toggleCardInfo(card) {
//   var cardAndTimer = card.parentElement;
//   var informations = cardAndTimer.nextElementSibling;
//   card.classList.toggle('active');
//   card.classList.remove('hidden');

//   if (informations.style.display === 'none') {
//     informations.style.display = 'block';
//     setTimeout(function () {
//       informations.style.opacity = '1';
//       informations.style.transform = 'translateX(0)';
//     }, 10);
//   } else {
//     informations.style.opacity = '0';
//     informations.style.transform = 'translateX(-40%)';
//     setTimeout(function () {
//       informations.style.display = 'none';
//     }, 300);
//   }
// }

function toggleCardInfo(card) {
  var cardAndTimer = card.parentElement;
  var informations = cardAndTimer.nextElementSibling;
  card.classList.toggle('active');

  if (informations.classList.contains('hidden')) {
    informations.classList.remove('hidden');
    informations.classList.add('visible');
  } else {
    informations.classList.remove('visible');
    informations.classList.add('hidden');
  }
}


