const btn = document.querySelector(".header_menu_button_catalog")
const container = document.querySelector(".section_category")

function toggleTwoClasses(element, first, second, timeOfAnimation) {
    if (!element.classList.contains(first)) {
        element.classList.add(first);
        element.classList.remove(second);
    } else {
        element.classList.add(second);
        window.setTimeout(() => {
            element.classList.remove(first);
        }, timeOfAnimation)
    }
}

btn.addEventListener("click", () => {
    toggleTwoClasses(container, "section_category_visible", "section_category_hidden", 500);
});

let count = 1;
let customChange = false;
const allSlide = document.querySelectorAll('.section_news_slider_img');
const allDots = document.querySelectorAll('.section_news_dot');
const lengthSlider = allSlide.length;

const sliding = (x) => {
    let left = `${-x * 100}%`;

    allSlide.forEach((el) => {
        el.style.left = left;
    })

    allDots.forEach((dots) => {
        dots.style.border = "unset";
        dots.style.scale = "0.8";
    });

    allDots[0].style.transition = "0.6s";
    allDots[x].style.scale = "1.5";
    allDots[x].style.border = "border: 1px solid #7973a0";
};

setInterval(() => {
    if (customChange !== true) {
        if (count === lengthSlider) {
            sliding(0);
            count = 1;
        } else {
            sliding(count);
            count += 1;
        }
    }
}, 4000)

const leftSwipe = () => {
    customChange = true;
    setTimeout(() => {
        customChange = false
    }, 2000);

    if (count === 1) {
        sliding(lengthSlider - 1);
        count = lengthSlider;
    } else {
        count -= 1;
        sliding(count - 1);
    }
}

const rightSwipe = () => {
    customChange = true;
    setTimeout(() => {
        customChange = false
    }, 2000);

    if (count === lengthSlider) {
        sliding(0);
        count = 1;
    } else {
        sliding(count);
        count += 1;
    }
}

document.querySelector('.point_left').onclick = () => {
    leftSwipe()
};
document.querySelector('.point_right').onclick = () => {
    rightSwipe()
};