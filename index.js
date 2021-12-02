const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const leftSliderControl = document.querySelector(".left-slider-control");
const rightSliderControl = document.querySelector(".right-slider-control");
const mobileLeftSliderControl = document.querySelector(".mobile-left-slider-control");
const mobileRightSliderControl = document.querySelector(".mobile-right-slider-control");
const slides = document.querySelectorAll(".slide");

// Mobile menu

hamburgerMenu.onclick = () => {
    mobileMenu.classList.toggle("show-mobile-menu");
    if (mobileMenu.classList.contains("show-mobile-menu")) {
        hamburgerMenu.innerHTML = `
        <i class="fas fa-times"></i>
        `;
        const closeMenuIcon = document.querySelector(".fa-times")
        closeMenuIcon.style.color = "#2c2c2c";
    }
    else {
        hamburgerMenu.innerHTML = `
        <i class="fas fa-bars"></i>
        `;
    }
}

for (let i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].onclick = () => {
        mobileMenu.classList.remove("show-mobile-menu");
        hamburgerMenu.innerHTML = `
        <i class="fas fa-bars"></i>
        `;
    }
}

// Stories slider

let index = 0;

const displaySlide = (index) => {
    slides.forEach((element) => {
        element.style.display = "none";
    })

    slides[index].style.display = "flex";
}

displaySlide(index);

rightSliderControl.onclick = () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    displaySlide(index);
}

leftSliderControl.onclick = () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    displaySlide(index);
}

mobileRightSliderControl.onclick = () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    displaySlide(index);
}

mobileLeftSliderControl.onclick = () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    displaySlide(index);
}