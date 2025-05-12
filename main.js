const screen = document.querySelector("#main-screen-text");
const form = document.querySelector("#main-text-container");
const input = document.querySelector("#main-text-container input");

document.addEventListener("DOMContentLoaded", () => {
    input.focus();
});

form.addEventListener("submit", e => {
    e.preventDefault();
    
    renderSwitch();

    input.value = "";
});

function clearScreen() {
    screen.innerHTML = "";
};

function renderError() {
    const el = document.createElement("div");

    el.innerHTML = "Command not found, type 'help' for a list of commands";
    el.className = "error";

    screen.appendChild(el);

    screen.scrollTo(0, screen.scrollHeight);
};

function renderSwitch() {
    switch (input.value.toLowerCase()) {
        case "clear": 
            clearScreen()
            break;
        default : 
            renderError();
    };
};