// 1. Créer objets natifs
let Etudiant = {
    nom: "",
    prenom: "",
    age: 0,
    cne: "",
    
    // 2. Méthode étudier
    etudier: function() {
      return `L'étudiant ${this.prenom} ${this.nom} est en train d'étudier.`;
    }
  };
  
  let Professeur = {
    nom: "",
    age: 0,
    cin: "",
    
    // 2. Méthode enseigner
    enseigner: function() {
      return `Le professeur ${this.nom} est en train d'enseigner.`;
    }
  };
  
  // Création d'une liste d'étudiants
  let etudiants = [
    Object.create(Etudiant, {
      nom: { value: "Dupont" },
      prenom: { value: "Jean" },
      age: { value: 20 },
      cne: { value: "E123456" }
    }),
    Object.create(Etudiant, {
      nom: { value: "Martin" },
      prenom: { value: "Marie" },
      age: { value: 22 },
      cne: { value: "E789012" }
    }),
    Object.create(Etudiant, {
      nom: { value: "Dupont" },
      prenom: { value: "Alice" },
      age: { value: 19 },
      cne: { value: "E345678" }
    })
  ];
  
  // 3. Tri des étudiants selon l'ordre alphabétique (nom, prénom, age)
  etudiants.sort((a, b) => {
    if (a.nom !== b.nom) return a.nom.localeCompare(b.nom);
    if (a.prenom !== b.prenom) return a.prenom.localeCompare(b.prenom);
    return a.age - b.age;
  });
  
  console.log("Étudiants triés:");
  etudiants.forEach(etudiant => {
    console.log(`${etudiant.nom} ${etudiant.prenom}, ${etudiant.age} ans`);
  });