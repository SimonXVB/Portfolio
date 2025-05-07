const screen = document.getElementById("main-screen-text");

export function renderProjects() {
    const projectsContainer = document.createElement("div");
    const svg = document.createElement("div");
    const title = document.createElement("h1");
    const morse = document.createElement("p");
    const topDivider = document.createElement("div");

    screen.innerHTML = "";
    projectsContainer.id = "projects-container";

    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-clipboard-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"/>
                    </svg>`;
    svg.id = "projects-svg";

    title.innerHTML = "Projects";
    title.id = "project-title";

    morse.innerHTML = ".--. .-. --- .--- . -.-. - ...";
    morse.id = "projects-morse";

    topDivider.innerHTML = "---------------------------------------";
    
    projectsContainer.appendChild(svg);
    projectsContainer.appendChild(title);
    projectsContainer.appendChild(morse);
    projectsContainer.appendChild(topDivider);

    for(let i = 0; i < projectArr.length; i++) {
        const entryContainer = document.createElement("div");
        const img = document.createElement("img");
        const textContainer = document.createElement("div");
        const projectTitle = document.createElement("a");
        const projectDesc = document.createElement("p");
        const tagContainer = document.createElement("div");
        const divider = document.createElement("div");

        entryContainer.className = "projects-entry";
        textContainer.className = "projects-text-container";

        img.src = projectArr[i].img;
    
        projectTitle.innerHTML = projectArr[i].name;
        projectTitle.href = projectArr[i].link;
        projectTitle.target = "_blank";
        textContainer.appendChild(projectTitle);

        projectDesc.innerHTML = projectArr[i].desc;
        textContainer.appendChild(projectDesc);

        for(let j = 0; j < projectArr[i].tags.length; j++) {
            const tag = document.createElement("span");
            tag.innerHTML = projectArr[i].tags[j];

            tag.className = "projects-tags";

            tagContainer.appendChild(tag);
        };

        divider.innerHTML = "---------------------------------------";

        entryContainer.appendChild(img);
        entryContainer.appendChild(textContainer);
        entryContainer.appendChild(tagContainer);
        entryContainer.appendChild(divider);

        projectsContainer.appendChild(entryContainer);
    };
 
    screen.appendChild(projectsContainer);
};

const projectArr = [
    {
        name: "Odin Project Repo",
        link: "https://github.com/SimonXVB/Odin-Project-Repo",
        img: "assets/odin.png",
        desc: "A Repo containing all of my 'The Odin Project' Projects.",
        tags: ["HTML", "CSS", "JavaScript", "Other"]
    },
    {
        name: "Posta Social",
        link: "https://github.com/SimonXVB/Posta-Social",
        img: "assets/posta-logo.png",
        desc: "A Social Media inspired by Twitter.",
        tags: ["Prisma ORM", "Express", "React", "Tailwind"]
    },
    {
        name: "Swan Media Player",
        link: "https://github.com/SimonXVB/Swan-MP",
        img: "assets/swan.png",
        desc: "A media player written using electron",
        tags: ["Electron", "React", "Tailwind"]
    },
    {
        name: "PDEdit",
        link: "https://github.com/SimonXVB/PDEdit",
        img: "assets/PDEdit-Logo.png",
        desc: "A simple PDF editing app",
        tags: ["React", "Tailwind"]
    }
];