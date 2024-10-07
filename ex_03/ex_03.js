function addCarToAgent(agent, brand, model, color, power) {
    if (typeof agent !== 'object' || typeof brand !== 'string' || typeof model !== 'string' || typeof color !== 'string' || typeof power !== 'string') {
        return null;
    }
 
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };
 
    return agent;
}
 
let agent = {
    firstName: 'James',
    lastName: 'Bond'
};
 
agent = addCarToAgent(agent, 'Aston Martin', 'DB5', 'Grey', '285bhp');
 
if (agent) {
    shareThatBeauty(agent);
}
