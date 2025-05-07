const screen = document.querySelector("#main-screen-text");

export function renderStack() {
    const container = document.createElement("div");
    const svg = document.createElement("div");
    const h1 = document.createElement("h1");
    const morse = document.createElement("div");
    const h2 = document.createElement("h2");

    screen.innerHTML = "";
    container.id = "stack-container";

    svg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/>
                    </svg>`
    svg.id = "stack-svg";

    h1.innerHTML = "Stack";
    h1.id = "stack-h1";

    morse.innerHTML = "... - .- -.-. -.-";
    morse.id = "stack-morse";

    h2.innerHTML = "Tech I use";
    h2.id = "stack-h2";

    container.appendChild(svg);
    container.appendChild(h1);
    container.appendChild(morse);
    container.appendChild(h2);

    for(let i = 0; i < stackArr.length; i++) {
        const div = document.createElement("div");
        const a = document.createElement("a");

        const { divLeft, divRight } = arrowAnimations();

        div.className = "stack-lang";

        a.innerHTML = stackArr[i].lang;
        a.href = stackArr[i].link;
        a.target = "_blank";

        div.onmouseenter = () => {
            div.appendChild(divLeft);
            div.appendChild(a);
            div.appendChild(divRight);
        };

        div.onmouseleave = () => {
            div.innerHTML = "";

            div.appendChild(a);
        };

        div.appendChild(a);
        container.appendChild(div);
    };

    screen.appendChild(container);
};

function arrowAnimations() {
    const divLeft = document.createElement("div");
    const divRight = document.createElement("div");

    let leftDelay = 0;
    let rightDelay = 1000;

    for(let i = 0; i < 3; i++) {
        const arrowLeft = document.createElement("span");
        const arrowRight = document.createElement("span");

        arrowLeft.innerHTML = ">";
        arrowRight.innerHTML = "<";

        arrowLeft.style.animation = "arrowAnim 1.5s ease infinite";
        arrowRight.style.animation = "arrowAnim 1.5s linear infinite";

        arrowLeft.style.animationDelay = leftDelay + "ms";
        arrowRight.style.animationDelay = rightDelay + "ms";

        rightDelay = rightDelay - 500;
        leftDelay = leftDelay + 500;

        divLeft.appendChild(arrowLeft);
        divRight.appendChild(arrowRight);
    };

    return { divLeft, divRight };
};

const stackArr = [
    {
        lang: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        lang: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        lang: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        lang: "Express",
        link: "https://expressjs.com/"
    },
    {
        lang: "React",
        link: "https://react.dev/"
    },
    {
        lang: "PostgreSQL",
        link: "https://www.postgresql.org/"
    },
    {
        lang: "Tailwind",
        link: "https://tailwindcss.com/"
    },
    {
        lang: "Prisma ORM",
        link: "https://www.prisma.io/"
    },
    {
        lang: "Git",
        link: "https://git-scm.com/"
    },
    {
        lang: "Node JS",
        link: "https://nodejs.org"
    },
    {
        lang: "Electron",
        link: "https://www.electronjs.org/"
    },
    {
        lang: "GitHub",
        link: "https://github.com/"
    },
    {
        lang: "TypeScript",
        link: "https://www.typescriptlang.org/"
    }
];