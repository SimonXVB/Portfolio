function changeOpacity() {
    const buttons = document.querySelectorAll("#home-lights > div > div");

    buttons.forEach(button => {
        button.style.opacity = Math.floor(Math.random() * 101) + "%";
    });

    setInterval(() => {
        buttons.forEach(button => {
            button.style.opacity = Math.floor(Math.random() * 101) + "%";
        });
    }, 1000);
};
changeOpacity();