let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('li');
let count = 0;
let currentClass = '';
let imgClass = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

step();

window.onkeydown = function (e) {

    if (e.keyCode == 39) {
        nextSlider();
    }

    if (e.keyCode == 37) {
        prewSlider();
    }

}

function prewSlider() {

    count--;

    if (count < 0) {
        count = slides.length - 1;
    }

    step();

}

function nextSlider() {

    count++;

    if (count >= slides.length) {
        count = 0;
    }

    step();

}

function step() {

    if (slider.querySelector('.active')) {
        slider.querySelector('.active').classList.remove('active');
    }

    if (currentClass) {

      removeRandomClass(slider.querySelector(`.${currentClass}`));

    }

    slides[count].classList.add('active');

    slider.style.backgroundColor = randomRGB();

    if (slides[count].querySelector('img')) {
        randomSetClass(slides[count].querySelector('img'))
    }

}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

}

function randomRGB() {

    return `rgb(${randomInteger(200, 220)}, ${randomInteger(220, 255)}, ${randomInteger(200, 220)})`;

}

function randomSetClass(elem) {
    currentClass = imgClass[randomInteger(0, imgClass.length - 1)];
    elem.classList.add(currentClass);
}

function removeRandomClass(elem) {
    setTimeout(function () {
        elem.classList.remove(currentClass);
    }, 200);
}
