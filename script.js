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

const animateIcon = gsap.timeline();
animateIcon.from(".nav_list li", {
  duration: 1,
  x: 100,
  ease: "elastic.out",
  stagger: 0.2,
  yoyo: true,
  opacity: -2,
  delay: 1,
});
gsap.from(".main_profile_right img", {
  x: 500,
  delay: 1,
  opacity: 0,
  duration: 1,
  stagger: 0.9,
  ease: "in",
});
