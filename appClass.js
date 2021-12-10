class Vehicule {

    constructor(couleur, roues, marque) {
        this.color = couleur;
        this.wheel = roues;
        this.mark = marque;
    }

    demarrer() {
        console.log("le véhicule démarre.");
    }

    arreter() {
        console.log("le véhicule s'arrête.");
    }
}

class Velo extends Vehicule {

    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur, roues, marque);
        this.rayon = rayonRoues;
        this.paintType = typePeinture;
    }

    monter(){
        console.log("L'utilisateur monte sur le vélo");
    }
}

class Voiture extends Vehicule {

    constructor(couleur, roues, marque, assurance, proprietaire) {
        super(couleur, roues, marque);
        this.ass = assurance;
        this.prop = proprietaire;
    }

    carWash(){
        console.log("Go to elephant bleu");
    }
}

let car1 = new Vehicule("blue", "5", "citroen");
car1.demarrer();

let bike1 = new Velo("blanc", "2", "decatlon", "40", "metal");
bike1.monter();

let car2 = new Voiture("noir", "4", "porsh", true, "moi");
car2.carWash();