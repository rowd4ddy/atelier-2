// Exercice 5: Gestion de bibliothèque avec Array, Set, Map
  
  // 1. Gestion des livres (Array)
  console.log("--- GESTION DES LIVRES (ARRAY) ---");
  
  let books = ["Harry Potter", "Le Petit Prince", "1984"];
  console.log("Livres initiaux:", books);
  
  // Ajouter un livre à la fin
  books.push("L'Étranger");
  console.log("Après push:", books);
  
  // Ajouter un livre au début
  books.unshift("Don Quichotte");
  console.log("Après unshift:", books);
  
  // Supprimer le dernier livre
  let lastBook = books.pop();
  console.log(`Livre supprimé (pop): ${lastBook}`);
  console.log("Après pop:", books);
  
  // Supprimer le premier livre
  let firstBook = books.shift();
  console.log(`Livre supprimé (shift): ${firstBook}`);
  console.log("Après shift:", books);
  
  // 2. Gestion des catégories (Set)
  console.log("\n--- GESTION DES CATÉGORIES (SET) ---");
  
  let categories = new Set(["Fiction", "Science", "Histoire"]);
  console.log("Catégories initiales:", [...categories]);
  
  // Ajouter une nouvelle catégorie
  categories.add("Philosophie");
  console.log("Après ajout de 'Philosophie':", [...categories]);
  
  // Tenter d'ajouter une catégorie qui existe déjà
  categories.add("Fiction");
  console.log("Après tentative d'ajout de 'Fiction' (déjà existante):", [...categories]);
  
  // Supprimer une catégorie
  categories.delete("Science");
  console.log("Après suppression de 'Science':", [...categories]);
  
  // 3. Gestion des emprunts (Map)
  console.log("\n--- GESTION DES EMPRUNTS (MAP) ---");
  
  let borrows = new Map();
  
  // Ajouter des paires livre-emprunteur
  borrows.set("Harry Potter", "Alice");
  borrows.set("Le Petit Prince", "Bob");
  borrows.set("1984", "Charlie");
  
  console.log("Emprunts initiaux:");
  borrows.forEach((emprunteur, livre) => {
    console.log(`- "${livre}" emprunté par ${emprunteur}`);
  });
  
  // Supprimer une entrée
  borrows.delete("Le Petit Prince");
  console.log("\nAprès suppression de 'Le Petit Prince':");
  borrows.forEach((emprunteur, livre) => {
    console.log(`- "${livre}" emprunté par ${emprunteur}`);
  });
  
  // Vérifier si un livre est emprunté
  const livreAVerifier = "Harry Potter";
  console.log(`\nLe livre "${livreAVerifier}" est-il emprunté? ${borrows.has(livreAVerifier) ? "Oui" : "Non"}`);
  const livreAVerifier2 = "Le Petit Prince";
  console.log(`Le livre "${livreAVerifier2}" est-il emprunté? ${borrows.has(livreAVerifier2) ? "Oui" : "Non"}`);