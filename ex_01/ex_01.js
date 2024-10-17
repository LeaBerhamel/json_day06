window.onload = function () {
    const obj = {
        age: 57,
        code: "007",
        firstName: "James",
        lastName: "Bond"
    };
    function displayAgentInfo(obj) {
        document.getElementById("container").innerHTML = `
            <p>My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.</p>`;
    }
    displayAgentInfo(obj);
};
