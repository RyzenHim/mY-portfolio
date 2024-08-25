const animationNav = gsap.timeline();
console.log("hey");

animationNav.from("#main_icon", {
  // opacity: 0,
  delay: 1,
  stagger: 0.9,
  yoyo: true,
  ease: "elastic",
  duration: 2,
  x: -500,
});

gsap.from(".nav_list li", {
  duration: 1,
  x: 50,
  ease: "elastic.out",
  stagger: 0.2,
  yoyo: true,
  opacity: -2,
  delay: 1,
});
