// Classe Vecteur2D
class Vecteur2D {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  afficher() {
    return `Vecteur(${this.x}, ${this.y})`;
  }
  
  // Méthode d'addition de deux vecteurs
  add(v) {
    return new Vecteur2D(this.x + v.x, this.y + v.y);
  }
}

// Programme principal pour Vecteur2D
const v1 = new Vecteur2D();
const v2 = new Vecteur2D(2, 3);

console.log("Vecteur 1: " + v1.afficher());
console.log("Vecteur 2: " + v2.afficher());

const v3 = v1.add(v2);
console.log("Somme: " + v3.afficher());

// Classe Rectangle
class Rectangle {
  constructor(longueur = 1, largeur = 1) {
    this.longueur = longueur;
    this.largeur = largeur;
    this.nom = "rectangle";
  }
  
  afficher() {
    return `${this.nom}: longueur=${this.longueur}, largeur=${this.largeur}`;
  }
  
  surface() {
    return this.longueur * this.largeur;
  }
}

// Classe Carre héritant de Rectangle
class Carre extends Rectangle {
  constructor(cote = 1) {
    super(cote, cote);
    this.nom = "carré";
  }
}

// Programme principal pour Rectangle et Carre
const rect = new Rectangle(5, 3);
const carre = new Carre(4);

console.log(rect.afficher() + ", surface = " + rect.surface());
console.log(carre.afficher() + ", surface = " + carre.surface());

// Classe Point
class Point {
  constructor(x = 0.0, y = 0.0) {
    this.x = x;
    this.y = y;
  }
  
  afficher() {
    return `Point(${this.x}, ${this.y})`;
  }
}

// Classe Segment
class Segment {
  constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1) {
    this.orig = new Point(x1, y1);
    this.extrem = new Point(x2, y2);
  }
  
  afficher() {
    return `Segment de ${this.orig.afficher()} à ${this.extrem.afficher()}`;
  }
  
  longueur() {
    const dx = this.extrem.x - this.orig.x;
    const dy = this.extrem.y - this.orig.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

// Programme principal pour Segment
const segment = new Segment(1, 1, 4, 5);
console.log(segment.afficher());
console.log("Longueur du segment: " + segment.longueur());