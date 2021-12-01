const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

// Mobile menu functions

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