const elements = document.querySelectorAll(".intersect");

const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(window.scrollY !== 0 && entry.isIntersecting) {
            entry.target.classList.add("grow");
            intersectionObserver.unobserve(entry.target);
        } else if(window.scrollY === 0 && entry.isIntersecting) {
            entry.target.classList.remove("intersect");
            intersectionObserver.unobserve(entry.target);
        };
    });
}, {threshold: 0.5});

elements.forEach(el => {
    intersectionObserver.observe(el);
});