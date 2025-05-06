// Olivier vient de recevoir son bulletin scolaire. Il a obtenu les notes suivantes : 5, 12, 8, 17, 3 et 15 sur 20.

// Il veut faire un petit script en JavaScript pour afficher uniquement les notes pour lesquelles il a réussi, c’est-à-dire toutes les notes supérieures ou égales à 10. Ces notes doivent s’afficher dans une liste HTML sur la page, sous forme de texte comme : Note : 15/20 – ✅ Réussite

// Aide Olivier à :
// Créer un tableau contenant ses notes.
// Parcourir ce tableau.
// Tester si une note est suffisante (10 ou plus).
// Et injecter dans une liste <ul> une ligne pour chaque réussite.


// ==============================
// 🌱 Sélection des éléments
// ==============================
  const ul = document.querySelector('ul');
// ==============================
// 🧠 Variables globales
// ==============================

// ==============================
// 🎊 Fonctionnalités
// ==============================

// ==============================
// 🧲 Événements
// ==============================

if (ul) {
  const notes = [5, 12, 8, 17, 3, 15];
  
  notes.forEach(note => {
    if (note >= 10) {
      const li = document.createElement('li');
      li.textContent = `Note : ${note}/20 ✅ Réussite`
      ul.appendChild(li);      
    }
  })
}