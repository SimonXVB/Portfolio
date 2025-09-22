const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;

let stars = [];
let animationFrame;

function getRandomStartData() {    
    const x = Math.floor(Math.random() * document.body.clientWidth);
    const y = Math.floor(Math.random() * document.body.clientHeight);
    const radius = Math.floor(Math.random() * 2);
    const opacity = Math.random();
    const isIncreasing = Math.random() < 0.5;

    return [x, y, radius, opacity, isIncreasing];
};

function initializeSky() {
    stars = [];
    
    for(let i = 0; i < 500; i++) {
        const [randX, randY, radius, opacity, isIncreasing] = getRandomStartData();

        stars.push({
            x: randX,
            y: randY,
            radius: radius,
            opacity: opacity,
            isIncreasing: isIncreasing
        });
    };

    requestAnimationFrame(updateStars);
};
initializeSky();

function updateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < stars.length; i++) {
        if(stars[i].isIncreasing && stars[i].opacity >= 1) {
            stars[i].isIncreasing = false;
        } else if(!stars[i].isIncreasing && stars[i].opacity <= 0) {
            stars[i].isIncreasing = true;
        };

        const rate = stars[i].isIncreasing ? 0.004 : -0.004;
        const newOpacity = stars[i].opacity + rate < 0 ? 0 : stars[i].opacity + rate;

        ctx.beginPath();
        ctx.shadowColor = "#ffb731ff";
        ctx.shadowBlur = 1;
        ctx.fillStyle = "#fff";
        ctx.arc(stars[i].x, stars[i].y, stars[i].radius, 0, 2 * Math.PI);
        ctx.globalAlpha = newOpacity;
        ctx.fill();

        stars[i].opacity = newOpacity;
    };

    animationFrame = requestAnimationFrame(updateStars);
};

//Resize Observer
let prevWidth;

const resizeObserver = new ResizeObserver(observer => {
    if(observer[0].contentRect.width !== prevWidth) {
        prevWidth = observer[0].contentRect.width;
        cancelAnimationFrame(animationFrame);
        initializeSky();
    };

    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;
});

resizeObserver.observe(document.body);