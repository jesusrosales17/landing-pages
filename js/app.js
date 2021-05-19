const menuContainer = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".menu__options");

const mostrarMenu = () => {
    menu.classList.toggle("menu__options--active");
}

menuContainer.addEventListener("click", mostrarMenu);