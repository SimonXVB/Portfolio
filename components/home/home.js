const screen = document.getElementById("main-screen-text");

export function renderHome() {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const morse = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const commands = document.createElement("p");

    screen.innerHTML = "";
    container.id = "home-container";

    img.src = "assets/smallerPFP.jpg"
    img.id = "home-img";

    h1.id = "home-h1";
    h1.innerHTML = "Welcome to my portfolio page!";

    morse.id = "home-morse";
    morse.innerHTML = ".-- . .-.. -.-. --- -- .";

    h2.id = "home-h2";
    h2.innerHTML = "My name is Simon";

    h3.id = "home-h3";
    h3.innerHTML = "Web Developer";

    commands.id = "home-commands";
    commands.innerHTML = "Type 'help' to view a list of commands or 'all' to view the entire page."


    container.appendChild(img);
    container.appendChild(h1);
    container.appendChild(morse);
    container.appendChild(h2);
    container.appendChild(h3);
    container.appendChild(commands);

    screen.appendChild(container);
};