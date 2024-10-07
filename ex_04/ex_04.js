// On déclare l'objet agent avec les propriétés et la voiture qui contient également des propriétés
let agent = {
    firstName: 'James',
    lastName: 'Bond',
    car: {
        brand: 'Aston Martin',
        model: 'DB5',
        color: 'Silver',
        power: '282 hp'
    }
};
 
// On déclare la fonction updateLicensePlates qui a pour paramètres agent et plate
function updateLicensePlates(agent, plate) {
// On vérifie si la propriété car existe dans l'objet agent
    if (agent.car) {
// Si c'est le cas, on ajoute les plaques d'immatriculation à la propriété LicensePLates que l'on ajoute également
        agent.car.licensePlates = plate;
    }
// On retourne l'objet agent mis à jour
    return agent;
};
 
// On déclare la fonction showLicensePlates qui a pour paramètre agent et donc affiche les plaques d'immatriculation
function showLicensePlates(agent) {
// On vérifie si si l'objet agent possède une voiture (agent.car) et si cette voiture a bien une propriété licensePlates
    if (agent.car && agent.car.licensePlates) {
// On sélectionne l'élément <ul> ayant la classe "plates-container" qui est défini dans le HTML
        let platesContainer = document.querySelector(".plates-container");
// On parcourt chaque plaque d'immatriculation plate présente dans le tableau licensePlates
        agent.car.licensePlates.forEach(function(plate) {
// On crée un nouvel élément <li> pour chaque plaque d'immatriculation
            let li = document.createElement("li");
// On définit le contenu texte de l'élément <li> comme étant la plaque d'immatriculation actuelle
            li.innerHTML = plate;
// On ajoute cet élément <li> comme enfant de l'élément "plates-container"
            platesContainer.appendChild(li);
        });
    }
}
 
// Mise à jour de l'objet agent avec les plaques d'immatriculation
updateLicensePlates(agent, ['LU 6789', '4711-EA-62', 'BMT 216A']);
// Affichage des plaques d'immatriculation dans l'interface utilisateur
showLicensePlates(agent);
