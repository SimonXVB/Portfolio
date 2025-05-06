import { renderHome } from "./components/home/home.js";

const screen = document.querySelector("#main-screen-text");
const form = document.querySelector("#main-text-container");
const input = document.querySelector("#main-text-container input");

document.addEventListener("DOMContentLoaded", () => {
    renderHome();
    input.focus();
});

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInput();

    screen.scrollTo(0, screen.scrollHeight);
    input.value = "";
});

function clearScreen() {
    screen.innerHTML = "";
};

function checkInput() {
    const el = document.createElement("div");

    switch (input.value.toLowerCase()) {
        case "home": 
            renderHome();
            break;
        case "clear": 
            clearScreen()
            break;
        default : 
            el.innerHTML = "Command not found, type 'help' for a list of commands";
    };

    screen.appendChild(el);
};