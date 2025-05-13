const form = document.querySelector("#screen-input");
const input = document.querySelector("#screen-input input");
const pages = document.querySelectorAll(".page");

document.addEventListener("DOMContentLoaded", () => {
    input.focus();
});

form.addEventListener("submit", e => {
    e.preventDefault();
    
    commandSwitch();

    input.value = "";
});

function clearScreen() {
    pages.forEach(page => {
        page.style.display = "none";
    });

    document.getElementById("error-container").innerHTML = "";
};

function renderPage(page) {
    pages.forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(page).style.display = "flex";
    document.getElementById("error-container").innerHTML = "";
};

function renderAll() {
    pages.forEach(page => {
        page.style.display = "flex";
    });
};

function renderError() {
    const errorContainer = document.getElementById("error-container");
    const screen = document.getElementById("main-screen");
    const el = document.createElement("div");

    el.innerHTML = "Command not found, type 'help' for a list of commands";
    el.className = "error";

    errorContainer.appendChild(el);

    screen.scrollTo(0, screen.scrollHeight);
};

function commandSwitch() {
    switch (input.value.toLowerCase()) {
        case "home":
            renderPage("home");
            break;
        case "stack":
            renderPage("stack");
            break;
        case "projects":
            renderPage("projects");
            break;
        case "all": 
            renderAll();
            break;
        case "clear":
            clearScreen();
            break;
        default :
            renderError();
    };
};