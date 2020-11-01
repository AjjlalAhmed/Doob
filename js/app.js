const menubtn = document.getElementById("burger-menu");
const navMenu = document.getElementById("nav-menu");

menubtn.addEventListener("click", () => {
  if (navMenu.classList.contains("toggle")) {
    navMenu.classList.remove("toggle");
  } else {
    navMenu.classList.add("toggle");
  }
});
