const animationNav = gsap.timeline();
// console.log("hey");

animationNav.from("#main_icon", {
  // opacity: 0,
  delay: 1,
  stagger: 0.9,
  yoyo: true,
  // ease: "elastic",
  duration: 2,
  y: -200,
});

window.addEventListener("load", () => {
  var win = window.screen.width;
  console.log(win);

  const animateIcon = gsap.timeline();
  if (win > 600) {
    animateIcon.from(".nav_list li", {
      duration: 1,
      x: 100,
      ease: "elastic.out",
      stagger: 0.2,
      yoyo: true,
      opacity: -2,
      delay: 1,
    });
  }
});

gsap.from(".main_profile_right img", {
  x: 500,
  delay: 1,
  opacity: 0,
  duration: 1,
  stagger: 0.9,
  ease: "in",
});

gsap.from(".me h1", {
  x: -200,
});
gsap.from(".me p", {
  x: -600,
  stagger: 0.5,
  ease: "in",
  duration: 1,
  // opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".me p",
    // markers: true,
    start: "top 80%",
    end: "bottom 20%",
    scrub: 4,
  },
});
gsap.from(".skills p", {
  x: -900,
  stagger: 0.5,
  ease: "in",
  duration: 0.5,
  // opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".me p",
    // markers: true,
    start: "top 80%",
    end: "bottom 20%",
    scrub: 4,
  },
});

document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor_div", {
    x: e.x,
    y: e.y,
    duration: 1,
    stagger: 0.9,
    ease: "elastic-out",
    // delay: 0.2,
  });
});

// ======== skills icons animation=====

// const iconANimation = gsap.timeline();

// iconANimation.from(".icon", {
//   duration: 1,
//   x: 100,
//   ease: "elastic.out",
//   stagger: 0.2,
//   yoyo: true,
//   opacity: 0,
//   delay: 1,
// scrollTrigger: {
//   scroller: "body",
//   trigger: ".skills_icontwo",
//   markers: true,
//   start: "top 0%",
//   end: "bottom 100%",
// },
// });
