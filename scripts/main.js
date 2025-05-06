// ==============================
// 🌱 Sélection des éléments
// ==============================
  const ul = document.querySelector('ul');
// ==============================
// 🧠 Variables globales
// ==============================
const notes = [5, 12, 8, 17, 3, 15];
// ==============================
// 🎊 Fonctionnalités
// ==============================

// ==============================
// 🧲 Événements
// ==============================
notes.forEach(note => {
  if (note >= 10) {
    const li = document.createElement('li');
    li.textContent = `Note : ${note}/20 ✅ Réussite`
    ul.appendChild(li);      
  }
})