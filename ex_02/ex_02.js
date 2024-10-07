const agentString = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
const updatedAgent = addCar(agentString, 'Aston Martin');
 
function addCar(agentString, car) {
    const agent = JSON.parse(agentString);
    agent.car = car;
    return agent;
}
 
console.log(updatedAgent);
