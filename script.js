const circles = document.querySelectorAll(".circle");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentActive = 1;

nextButton.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prevButton.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    prevButton.disabled = currentActive === 1;
    nextButton.disabled = currentActive === circles.length;
}
