// 1. Fonction constructeur voiture
function Voiture(model, marque, annee, type, carburant) {
    this.model = model;
    this.marque = marque;
    this.annee = annee;
    this.type = type;
    this.carburant = carburant;
  }
  
  // 2. Liste des voitures
  let voitures = [
    new Voiture("A3", "Audi", 2018, "Berline", "Diesel"),
    new Voiture("Clio", "Renault", 2020, "Citadine", "Essence"),
    new Voiture("Tucson", "Hyundai", 2019, "SUV", "Diesel"),
    new Voiture("Focus", "Ford", 2021, "Berline", "Essence"),
    new Voiture("Kona", "Hyundai", 2022, "SUV", "Hybride")
  ];
  
  // 3. Implémentation de l'héritage
  
  // Classe Hyundai
  function Hyundai(model, marque, annee, type, carburant, serie, hybride) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.serie = serie;
    this.hybride = hybride;
  }
  
  // Héritage de Voiture
  Hyundai.prototype = Object.create(Voiture.prototype);
  Hyundai.prototype.constructor = Hyundai;
  
  // Méthode alarmer pour Hyundai
  Hyundai.prototype.alarmer = function() {
    return `La voiture ${this.marque} ${this.model} de série ${this.serie} active son alarme!`;
  };
  
  // Classe Ford
  function Ford(model, marque, annee, type, carburant, options) {
    Voiture.call(this, model, marque, annee, type, carburant);
    this.options = options;
  }
  
  // Héritage de Voiture
  Ford.prototype = Object.create(Voiture.prototype);
  Ford.prototype.constructor = Ford;
  
  // 4. Tri des voitures par année (ordre croissant)
  voitures.sort((a, b) => a.annee - b.annee);
  
  // Affichage des voitures triées
  console.log("Voitures triées par année:");
  voitures.forEach(voiture => {
    console.log(`${voiture.marque} ${voiture.model}, Année: ${voiture.annee}`);
  });
  