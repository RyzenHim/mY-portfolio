const animationNav = gsap.timeline();

animationNav.from("#main_icon", {
  delay: 1,
  stagger: 0.9,
  yoyo: true,
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

    gsap.from(".main_profile_right img", {
      x: 1000,
      delay: 1,
      opacity: 0,
      duration: 1,
      stagger: 0.9,
      ease: "elastic.out",
    });

    // gsap.from(".me h1", {
    //   x: -200,
    // });

    // ======== skills icons animation=====

    // gsap.from(".skill-box", {
    //   x: -10000,
    //   duration: 2,
    //   stagger: 0.5,
    //   ease: "ease.in",
    //   yoyo: true,
    //   scrollTrigger: {
    //     scroller: "body",
    //     trigger: ".skill-box",
    //     // markers: true,
    //     start: "top 60%",
    //     end: "bottom 40%",
    //     scrub: 2,
    //   },
    // });
    // gsap.from(".projectstwo", {
    //   y: 500,
    //   duration: 1,
    //   stagger: 0.2,
    //   ease: "ease.out",
    //   // yoyo: true,
    //   opacity: -2,
    //   scrollTrigger: {
    //     scroller: "body",
    //     trigger: ".projectstwo",
    //     // markers: true,
    //     start: "top 95%",
    //     end: "top 85%",
    //     scrub: 2,
    //   },
    // });

    // gsap.from(".icon", {
    //   duration: 1,
    //   x: 1000,
    //   // ease: "elastic.out",
    //   stagger: 0.3,
    //   yoyo: true,
    //   opacity: -2,
    //   // delay: 1,
    //   // opacity: 0,
    //   scrollTrigger: {
    //     scroller: "body",
    //     trigger: ".skills_icontwo",
    //     // markers: true,
    //     start: "top 60%",
    //     end: "bottom 70%",
    //     scrub: 2,
    //   },
    // });
  }
});

// gsap.to(".main_profile_right img", {
//   y: 350,
//   scrollTrigger: {
//     scroller: "body",
//     trigger: ".main_profile_right img",
//     markers: true,
//     start: "top center",
//     end: "top end",
//   },
// });

document.addEventListener("touchmove", (e) => {
  console.log("moved");
  gsap.to(".cursor_div", {
    x: e.x,
    y: e.y,
    duration: 1,
    stagger: 0.9,
    ease: "elastic-out",
  });
});
document.addEventListener("mousemove", (e) => {
  gsap.to(".cursor_div", {
    x: e.x,
    y: e.y,
    duration: 1,
    stagger: 0.9,
    ease: "elastic.out",
    delay: 0.1,
    yoyo: true,
  });
});
gsap.from(".projectstwo", {
  y: 500,
  duration: 1,
  stagger: 0.2,
  ease: "ease.out",
  // yoyo: true,
  opacity: -2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".projectstwo",
    // markers: true,
    start: "top 95%",
    end: "top 85%",
    scrub: 2,
  },
});

gsap.from(".icon", {
  duration: 1,
  x: 1000,
  // ease: "elastic.out",
  stagger: 0.3,
  yoyo: true,
  opacity: -2,
  // delay: 1,
  // opacity: 0,
  scrollTrigger: {
    scroller: "body",
    trigger: ".skills_icontwo",
    // markers: true,
    start: "top 60%",
    end: "bottom 70%",
    scrub: 2,
  },
});
gsap.from(".skill-box", {
  x: -10000,
  duration: 2,
  stagger: 0.5,
  ease: "ease.in",
  yoyo: true,
  scrollTrigger: {
    scroller: "body",
    trigger: ".skill-box",
    // markers: true,
    start: "top 60%",
    end: "bottom 40%",
    scrub: 2,
  },
});
gsap.from(".me p", {
  x: -2000,
  stagger: 0.5,
  ease: "in",
  duration: 1,
  opacity: -2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".me p",
    // markers: true,
    start: "top 80%",
    end: "bottom 60%",
    scrub: 2,
  },
});
gsap.from(".skills p", {
  x: -2000,
  stagger: 0.5,
  ease: "in",
  duration: 0.6,
  opacity: -2,
  scrollTrigger: {
    scroller: "body",
    trigger: ".me p",
    // markers: true,
    start: "top 80%",
    end: "bottom 50%",
    scrub: 2,
  },
});

let openProject = document.querySelector(".open_project_link_card");
// let projectCard = document.querySelectorAll(".first_project");

// projectCard.forEach((e) => {
//   e.addEventListener("mouseenter", () => {
//     openProject.style.display = "block";
//     document.querySelector(".cursor_div").style.display = "none";
//     console.log("enter");
//   });
//   e.addEventListener("mouseleave", (e) => {
//     openProject.style.display = "none";
//     document.querySelector(".cursor_div").style.display = "block";
//     console.log("leave");
//   });
// });

// projectCard.forEach((e) => {
//   e.addEventListener("mousemove", (cordinate) => {
//     openProject.style.display = "block";

//     // let x = cordinate.x;
//     // let y = cordinate.y;
//     let cx = cordinate.clientX;
//     let cy = cordinate.clientY;
//     // console.log("x co " + x);
//     // console.log("y co " + y);
//     console.log("ex co " + cx);
//     console.log("ey co " + cy);
//     openProject.style.top = `${cy}px`;
//     openProject.style.left = `${cx}px`;
//   });
// });
