// hoverstates sectors op homepage
const sectors = document.querySelectorAll(".home_sectors_exhibits");

sectors.forEach(function (item, index) {
  var tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".home-sectors_hover-overlay"), {
      duration: 0.2,
      y: "-100%"
    })
    .to(
      item.querySelector(".home_sectors_title"),
      { duration: 0.2, opacity: 0 },
      "<"
    );

  $(item).hover(
    () => {
      tl.play();
    },
    () => {
      tl.reverse();
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 1
  });

  if (anim) {
    anim.restart();
  }
}
