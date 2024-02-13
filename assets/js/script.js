document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le mot cible
  var motCible1 = document.querySelector(".mot-cible1");

  // Ajouter un écouteur d'événement pour le clic sur le mot cible
  motCible1.addEventListener("click", function () {
    // Afficher une alerte
    alert("Vous avez cliqué sur le mot cliquable 1 !");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le mot cible
  var motCible2 = document.querySelector(".mot-cible2");

  // Ajouter un écouteur d'événement pour le clic sur le mot cible
  motCible2.addEventListener("click", function () {
    // Afficher une alerte
    alert("Vous avez cliqué sur le mot cliquable 2 !");
  });
});
