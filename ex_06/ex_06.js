// On déclare l'objet agent1 avec les propriétés name et car
const agent1 = {
    name: "James Bond",
    car: {
// Car possède les propriétés brand, model et color
        brand: "Aston Martin",
        model: "DB5",
        color: "silver"
    },
// On utilise la méthode isMatching pour vérifier si une propriété de la voiture correspond à une valeur donnée
    isMatching: function(key, value) {
// On vérifie que l'objet car existe ET on vérifie si la valeur recherchée est égale à la valeur de la propriété spécifiée
        return this.car && this.car[key] === value;
    }
};
 
// On déclare l'objet agent2 avec les propriétés name et car
const agent2 = {
    name: "Ethan Hunt",
    car: {
// Car possède les propriétés brand, model et color
        brand: "BMW",
        model: "M5",
        color: "black"
    },
// On utilise la méthode isMatching pour vérifier si une propriété de la voiture correspond à une valeur donnée
    isMatching: function(key, value) {
// On vérifie que l'objet car existe ET on vérifie si la valeur recherchée est égale à la valeur de la propriété spécifiée
        return this.car && this.car[key] === value;
    }
};
 
// On déclare l'objet agent3 avec les propriétés name et car
const agent3 = {
    name: "Jason Bourne",
    car: {
// Car possède les propriétés brand, model et color
        brand: "Ford",
        model: "Mustang",
        color: "black"
    },
// On utilise la méthode isMatching pour vérifier si une propriété de la voiture correspond à une valeur donnée
    isMatching: function(key, value) {
// On vérifie que l'objet car existe ET on vérifie si la valeur recherchée est égale à la valeur de la propriété spécifiée
        return this.car && this.car[key] === value;
    }
};
 
// On déclare la fonction searchCars avec pour paramètres agents, key et value
function searchCars(agents, key, value) {
    return agents
// On utilise la méthode 'filter' pour parcourir chaque agent et conserver ceux pour lesquels isMatching retourne true
        .filter(function(agent) {
            return agent.isMatching(key, value);
        })
// On utilise la méthode map pour extraire la propriété 'car' de chaque agent filtré
        .map(function(agent) {
            return agent.car;
        });
}
 
// On déclare un tableau avec les trois agents
const agents = [agent1, agent2, agent3];
// On appelle la fonction searchCars pour trouver les voitures de couleur black
const blackCars = searchCars(agents, 'color', 'black');
// On affiche le résultat dans la console
console.log(blackCars);
