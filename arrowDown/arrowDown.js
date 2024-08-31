window.addEventListener("scroll", () => {
  const arrowDown = document.querySelector(".arrrow_down");

  if (window.scrollY > 50) {
    arrowDown.classList.add("arrrow_downUp");
  } else {
    arrowDown.classList.remove("arrrow_downUp");
  }
  //   if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 50) {
  //     arrowDown.classList.add("arrrow_downUp");
  //   } else {
  //     arrowDown.classList.remove("arrrow_downUp");
  //   }
});

// const clickOnArrowDownButton = document.getElementById("arrrow_down");
// let allSections = document.querySelectorAll(".section");
// // let rect = clickOnArrowDownButton.getBoundingClientRect();
// // console.log("height " + rect.height + " width " + rect.width);
// clickOnArrowDownButton.addEventListener("click", () => {
//   console.log("clicked");
//   //   toCheckDownOrUp();
//   toGoToSecOnClick();
// });

// function toCheckDownOrUp() {
//   if (clickOnArrowDownButton.classList.contains("arrrow_downUp")) {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   } else {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
//   }
// }

// function toGoToSecOnClick() {
//   var currentSecIndex = 0;
//   for (i = 0; i < allSections.length; i++) {
//     var rect = allSections[i].getBoundingClientRect();
//     if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//       currentSecIndex = i;
//       break;
//     }
//   }
//   if (!this.classList.contains("arrrow_downUp")) {
//     if (currentSecIndex < allSections.length - 1) {
//       allSections[currentSecIndex + 1].scrollIntoView({ behavior: "smooth" });
//     }
//   } else {
//     if (currentSecIndex > 0) {
//       allSections[currentSecIndex - 1].scrollIntoView({ behavior: "smooth" });
//     }
//   }
// }

// console.log("window innerHeight" + window.innerHeight);
