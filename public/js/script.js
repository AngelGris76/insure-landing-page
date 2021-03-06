const buttonMenu = document.querySelector(".togglemenu");
const body = document.querySelector(".body");
const menu = document.querySelector(".menu");

const toggleButtonMenuIcon = () => {
  let icon;
  if (buttonMenu.ariaPressed === "true") {
    icon = "../assets/images/icon-close.svg";
  } else {
    icon = "../assets/images/icon-hamburger.svg";
  }
  buttonMenu.firstChild.setAttribute("src", icon);
};

buttonMenu.addEventListener("click", () => {
  if (buttonMenu.ariaPressed === "true") {
    menu.classList.add("translate-menu");
  } else {
    menu.classList.remove("hide-menu");
    setTimeout(() => {
      menu.classList.remove("translate-menu");
    }, 100);
  }
});

menu.addEventListener("transitionend", () => {
  if (buttonMenu.ariaPressed === "true") {
    menu.classList.add("hide-menu");
    body.classList.remove("menu--active");
    buttonMenu.ariaPressed = "false";
  } else {
    body.classList.add("menu--active");
    buttonMenu.ariaPressed = "true";
  }
  toggleButtonMenuIcon();
});
