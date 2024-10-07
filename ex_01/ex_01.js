window.onload = function () {
    function displayAgentInfo(obj) {
        const age = 57;
        const firstName = "James";
        const lastName = "Bond";
        const code = "007";
        document.getElementById("container").innerHTML = `
            <p>My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code} and I'm ${age} years old.</p>`;
    }
    displayAgentInfo();
};
