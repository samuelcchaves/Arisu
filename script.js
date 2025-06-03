const body = document.getElementById("body");
const navbar = document.getElementById("navbar");
const heroSection = document.getElementById("hero");
const menuIntro = document.getElementById("menuIntro");
const elements = document.querySelectorAll(".fade-in-up");
const morada = ". Tabolado 69, 5400-524 Chaves";
const typingElement = document.getElementById("lead");
const triggerPoint = heroSection.clientHeight * 0.5;

let isTyping = false;

function typeFx() {
    if (isTyping) return;
    isTyping = true;

    typingElement.innerHTML = "R";
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < morada.length) {
            typingElement.innerHTML += morada.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            isTyping = false;
        }
    }, 100);
}

function resetAddress() {
    typingElement.innerHTML = "R";
}

function animateHero() {
    elements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
    });
}
function resetHero() {
    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    animateHero();
    typeFx();
});

window.onload = function () {
    animateHero();
    typeFx();
};

let flag = false;

window.onscroll = function () {
    if (scrollY < triggerPoint && !flag) {
        flag = true;
        animateHero();
        typeFx();
    } else if (scrollY > triggerPoint && flag) {
        flag = false;
        resetHero();
    }

    if (scrollY > heroSection.clientHeight * 0.9) {
        navbar.classList.add("navbar-active");
    } else {
        navbar.classList.remove("navbar-active");
    }
};

const navLink = document.querySelectorAll(".nav-link");
const menuToggle = document.getElementById("navbarNavAltMarkup");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLink.forEach((link) => {
    link.addEventListener("click", function () {
        bsCollapse.toggle();
    });
});
