function randX() {
    const width = document.body.clientWidth - 20;

    return Math.floor(Math.random() * width);
};

function randY() {
    const height = document.body.clientHeight;

    return Math.floor(Math.random() * height);
};


function starrySky() {
    for(let i = 0; i < 250; i++) {
        const star = document.createElement("div");
        
        star.style.height = "2px";
        star.style.width = "2px";
        star.style.backgroundColor = "white";
        star.style.position = "absolute";
        star.style.left = randX() + "px";
        star.style.top = randY() + "px";
        star.style.boxShadow = "0px 0px 20px 1px rgb(255, 255, 255)";
        star.style.zIndex = "-1";
        star.style.animation = "star 5s infinite ease-in-out alternate";
        star.style.animationDelay = ((randX() - randY()) - (randX() / 2)) + "ms";

        document.getElementById("sky").appendChild(star);
    };
};
starrySky();