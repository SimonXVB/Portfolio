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
    let prevIndex = 0;
    let interval;

    function newInterval() {
        clearInterval(interval);
        interval = setInterval(next, 5000);
    };

    function next() {
        prevIndex = currentIndex;
        currentIndex = currentIndex + 1 > imagePanels.length - 1 ? 0 : currentIndex + 1;

        imagePanels[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});
        imagePanels[currentIndex].ariaHidden = false;
        imagePanels[prevIndex].ariaHidden = true;

        panelButtons[prevIndex].removeAttribute("data-active");
        panelButtons[currentIndex].setAttribute("data-active", "true");
        panelButtons[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});

        newInterval();
    };

    function prev() {
        prevIndex = currentIndex;
        currentIndex = currentIndex - 1 < 0 ? imagePanels.length - 1 : currentIndex - 1;

        imagePanels[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});
        imagePanels[currentIndex].ariaHidden = false;
        imagePanels[prevIndex].ariaHidden = true;

        panelButtons[prevIndex].removeAttribute("data-active");
        panelButtons[currentIndex].setAttribute("data-active", "true");
        panelButtons[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});

        newInterval();
    };

    panelButtons.forEach((button, i) => {
        button.addEventListener("click", () => {
            prevIndex = currentIndex;
            currentIndex = i;

            imagePanels[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});
            imagePanels[currentIndex].ariaHidden = false;
            imagePanels[prevIndex].ariaHidden = true;

            panelButtons[prevIndex].removeAttribute("data-active");
            panelButtons[currentIndex].setAttribute("data-active", "true");
            panelButtons[currentIndex].scrollIntoView({behavior: "smooth", inline: "center"});

            newInterval();
        });
    });

    const swipeArea = document.getElementById("carousel-container");

    let startX = 0;
    let threshold = 50;
    let swipeDir = "";
    
    swipeArea.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    swipeArea.addEventListener("touchmove", e => {
        if(e.touches[0].clientX > startX + threshold) {
            swipeDir = "right";
        } else if(e.touches[0].clientX < startX - threshold) {
            swipeDir = "left";
        };
    });

    swipeArea.addEventListener("touchend", () => {
        if(swipeDir === "left") {
            next();
            swipeDir = "";
        } else if(swipeDir === "right") {
            prev();
            swipeDir = "";
        } else {
            return;
        };
    });

    imagePanels[currentIndex].scrollIntoView();
    panelButtons[currentIndex].scrollIntoView();

    nextButton.addEventListener("click", next);
    prevButton.addEventListener("click", prev);

    newInterval();
};
imageCarousel();

function setActiveButton() {
    const buttons = document.querySelectorAll("#buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(button => button.removeAttribute("data-active"));
            button.setAttribute("data-active", "true");
        });
    });
};
setActiveButton();