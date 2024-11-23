// script.js//
const facts = {
    "fun_facts": [
        "Add your first fun fact here",
        "Add your second fun fact here",
        "Add your third fun fact here"
    ]
};

function showRandomFact() {
    const factDisplay = document.getElementById('factDisplay');
    const randomIndex = Math.floor(Math.random() * facts.fun_facts.length);
    factDisplay.textContent = facts.fun_facts[randomIndex];
}
