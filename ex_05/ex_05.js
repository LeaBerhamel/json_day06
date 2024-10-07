// On déclare une variable car dans un objet Javascript
let car = {
  color: 'grey',
  brand: 'Aston Martin',
  model: 'DB5',
// On définit une méthode logInfo() pour l'objet car pour afficher les informations de l'objet donné dans la console
  logInfo() {
    console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
  },
};
 
// On déclare une variable agent dans un autre objet Javascript
let agent = {
  name: 'James Bond',
  code: '007',
  age: 57,
  car: car,
// On définit une méthode logInfo() pour l'objet agent pour afficher les informations de l'objet donné dans la console
  logInfo() {
    console.log(`Agent information: ${this.name}, ${this.code}, ${this.age}`);
    console.log(`${this.name}'s Car information: ${this.car.color}, ${this.car.model}, ${this.car.brand}`);
  },
};
 
// On appelle la méthode logInfo() de l'objet agent pour afficher les informations de l'agent et les informations de sa voiture
agent.logInfo();
// On appelle la méthode logInfo() de l'objet car, référencée par agent.car pour afficher les informations spécifiques de la voiture seule
agent.car.logInfo();
