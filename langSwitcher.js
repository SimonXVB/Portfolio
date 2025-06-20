const currentFocus = document.getElementById("current-focus");
const githubProfile = document.getElementById("github-profile");
const mostRecent = document.getElementById("most-recent");

const odin = document.getElementById("entry-odin");
const posta = document.getElementById("entry-posta");
const swan = document.getElementById("entry-swan");
const pdedit = document.getElementById("entry-pdedit");
const draw2gether = document.getElementById("entry-draw2gether");

const checkbox = document.getElementById("check");

const elements = [currentFocus, githubProfile, mostRecent, odin, posta, swan, pdedit, draw2gether];

const enLang = {
    currentFocus: "Current Focus&gt;&gt; React & TypeScript",
    githubProfile: "Github Profile&gt;&gt;",
    mostRecent: "Most Recent&gt;&gt;",
    odin: "A Repo containing all of my 'The Odin Project' Projects",
    posta: "A Social Media app inspired by Twitter",
    swan: "A media player written using electron",
    pdedit: "A simple PDF editing app",
    draw2gether: "A room-based interactive drawing app"
};

const deLang = {
    currentFocus: "Aktueller Fokus&gt;&gt; React & TypeScript",
    githubProfile: "Github Profil&gt;&gt;",
    mostRecent: "Neuestes Projekt&gt;&gt;",
    odin: "Ein Repo, welches all meine 'The Odin Project' Projekte enthält",
    posta: "Eine Social-Media App, inspiriert von Twitter",
    swan: "Ein simpler Media Player, entwickelt mit Electron",
    pdedit: "Eine PDF-Bearbeitungs App",
    draw2gether: "Eine raumbasierte interaktive Zeichen-App"
};

let currLang = navigator.language || "en";
if(currLang === "de") checkbox.checked = true;

checkbox.addEventListener("click", () => {
    if(!checkbox.checked) {
        currLang = "en";
    } else {
        currLang = "de"
    };
    setLang();
});

function setLang() {
    for(let i = 0; i < elements.length; i++) {
        if(currLang === "de") {
            elements[i].innerHTML = Object.values(deLang)[i];
        } else {
            elements[i].innerHTML = Object.values(enLang)[i];
        };
    };
};
setLang();