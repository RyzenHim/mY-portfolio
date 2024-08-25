const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".collapsable_menu_main_div");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  hamMenu.classList.toggle("collapsable_menu_main_div_active");
  checkMenuState();
});

function checkMenuState() {
  if (hamburger.classList.contains("collapsable_menu_main_div_active")) {
    console.log("collapsable_menu_main_div_active it contains ");
  }
}

window.addEventListener("resize", () => {
  var w = window.innerWidth;
  if (w > 600) {
    hamMenu.classList.remove("collapsable_menu_main_div_active");
    hamburger.classList.remove("change");
  }
});
