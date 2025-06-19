function changeOpacity() {
    const panels = document.querySelectorAll("#home-lights > div > div");

    panels.forEach(panel => {
        panel.style.opacity = Math.floor(Math.random() * 101) + "%";
    });

    setInterval(() => {
        panels.forEach(panel => {
            panel.style.opacity = Math.floor(Math.random() * 101) + "%";
        });
    }, 1000);
};
changeOpacity();

function changeTab() {
    const buttons = document.querySelectorAll("#buttons > button");
    const ids = ["#home", "#stack", "#projects"];

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            for(let i = 0; i < ids.length; i++) {
                document.querySelector(ids[i]).style.display = "none";
            };

            document.querySelector(ids[index]).style.display = "flex";
        });
    });
};
changeTab();

function imageCarousel() {
    const imagePanels = document.querySelectorAll(".panel");
    const panelButtons = document.querySelectorAll("#carousel-all button");
    const prevButton = document.getElementById("carousel-prev");
    const nextButton = document.getElementById("carousel-next");

    let currentIndex = 0;
    let prevIndex = imagePanels.length - 1;

    function prev() {
        prevIndex = currentIndex;

        currentIndex - 1 < 0 ? currentIndex = imagePanels.length - 1 : currentIndex--;

        panelButtons[currentIndex].style.outline = "2px solid var(--main-green)";
        panelButtons[prevIndex].style.outline = "";

        imagePanels.forEach(panel => {
            panel.style.display = "none";
        });

        imagePanels[currentIndex].style.display = "block";
        imagePanels[currentIndex].style.animation = "transitionInLeft 1s";
        imagePanels[currentIndex].ariaHidden = false;

        imagePanels[prevIndex].style.display = "block";
        imagePanels[prevIndex].style.animation = "transitionOutLeft 1s";
        imagePanels[prevIndex].onanimationend = () => imagePanels[prevIndex].style.display = "none";
        imagePanels[prevIndex].ariaHidden = true;
    };

    function next() {
        prevIndex = currentIndex;

        currentIndex + 1 > imagePanels.length - 1 ? currentIndex = 0 : currentIndex++;

        panelButtons[currentIndex].style.outline = "2px solid var(--main-green)";
        panelButtons[prevIndex].style.outline = "";

        imagePanels.forEach(panel => {
            panel.style.display = "none";
        });
        
        imagePanels[currentIndex].style.display = "block";
        imagePanels[currentIndex].style.animation = "transitionInRight 1s";
        imagePanels[currentIndex].ariaHidden = false;
        
        imagePanels[prevIndex].style.display = "block";
        imagePanels[prevIndex].style.animation = "transitionOutRight 1s";
        imagePanels[prevIndex].onanimationend = () => imagePanels[prevIndex].style.display = "none";
        imagePanels[prevIndex].ariaHidden = true;
    };

    panelButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            if(i === currentIndex) return;

            prevIndex = currentIndex;
            currentIndex = i;

            panelButtons[currentIndex].style.outline = "2px solid var(--main-green)";
            panelButtons[prevIndex].style.outline = "";

            imagePanels.forEach(panel => {
                panel.style.display = "none";
            });

            imagePanels[currentIndex].style.display = "block";
            imagePanels[currentIndex].style.animation = "transitionInRight 1s";
            imagePanels[currentIndex].ariaHidden = false;

            imagePanels[prevIndex].style.display = "block";
            imagePanels[prevIndex].style.animation = "transitionOutRight 1s";
            imagePanels[prevIndex].onanimationend = () => imagePanels[prevIndex].style.display = "none";
            imagePanels[prevIndex].ariaHidden = true;
        });
    });

    prevButton.addEventListener("click", prev);
    nextButton.addEventListener("click", next);
    imagePanels[currentIndex].style.display = "block";
};
imageCarousel();