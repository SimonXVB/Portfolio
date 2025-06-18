const homeH1 = document.getElementById("home-h1");
const homeH2 = document.getElementById("home-h2");
const homeCommands = document.getElementById("home-commands");
const stackP = document.getElementById("stack-p");
const projectsH1 = document.getElementById("projects-h1");
const projectsP = document.getElementById("projects-p");
const odin = document.getElementById("entry-odin");
const posta = document.getElementById("entry-posta");
const swan = document.getElementById("entry-swan");
const pdedit = document.getElementById("entry-pdedit");

const elements = [homeH1, homeH2, homeCommands, stackP, projectsH1, projectsP, odin, posta, swan, pdedit];

const enLang = {
    homeH1: "Welcome to my portfolio page",
    homeH2: "My name is Simon",
    homeCommands: "Type 'help' to view a list of commands or 'all' to view the entire page",
    stackP: "-- Tech I use --",
    projectsH1: "Projects",
    projectsP: "-- Some of my projects --",
    odin: "A Repo containing all of my 'The Odin Project' Projects",
    posta: "A Social Media app inspired by Twitter",
    swan: "A media player written using electron",
    pdedit: "A simple PDF editing app",
};

const deLang = {
    homeH1: "Wilkommen auf meiner Seite",
    homeH2: "Mein name ist Simon",
    homeCommands: "Tippe 'help' um eine Liste der Commands zu sehen oder 'all' um die gesamte Seite zu sehen",
    stackP: "-- Technologien, die ich verwende --",
    projectsH1: "Projekte",
    projectsP: "-- Einige meiner Projekte --",
    odin: "Ein Repo, welches all meine 'The Odin Project' Projekte enthält",
    posta: "Eine Social-Media App, inspiriert von Twitter",
    swan: "Ein simpler Media Player, entwickelt mit Electron",
    pdedit: "Eine PDF-Bearbeitungs App",
};

export let currLang = navigator.language || "en";

function checkLang() {
    for(let i = 0; i < elements.length; i++) {
        if(currLang === "de") {
            elements[i].innerHTML = Object.values(deLang)[i];
        } else {
            elements[i].innerHTML = Object.values(enLang)[i];
        };
    };

    helpEntries.forEach((entry, i) => {
        if(currLang === "de") {
            entry.innerHTML = deHelp[i];
        } else {
            entry.innerHTML = enHelp[i];
        };
    });
};
checkLang();

export function setLang(lang) {
    currLang = lang;
    checkLang();
};