/*

// script voor het resizen van horizontal scroll container base on content width.
// Optional - Set sticky section heights based on inner content width
// Makes scroll timing feel more natural

function setTrackHeights() {
  $(".section-height").each(function (index) {
    let trackWidth = $(this).find(".track").outerWidth();
    trackWidth += $(window).width();
    $(this).height(trackWidth);
  });
}

setTrackHeights();
window.addEventListener("resize", function () {
  setTrackHeights();
});

//GSAP timelines
let tlMain = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".section-height",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  })
  .to(".track", { xPercent: -100, ease: "none" })
  .to(".exhibits-panel_wrapper.is-1", { width: "50vw" }, "<")
  .to(".exhibits-panel_wrapper.is-2", { width: "50vw" }, "<")
  .to(".exhibits-panel_wrapper.is-3", { width: "50vw" }, "<")
  .to(".exhibits-panel_wrapper.is-4", { width: "50vw" }, "<");

/*
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hero-video",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      containerAnimation: tlMain,
      markers: true
    }
  })
  .to(".exhibits-panel_wrapper.is-1", { width: "50vw" });


  .to(".exhibits-panel_wrapper.is-1", { width: "20vw" })
  .to(".exhibits-panel_wrapper.is-2", { width: "50vw" })
  .to(".exhibits-panel_wrapper.is-3", { width: "20vw" })
  .to(".exhibits-panel_wrapper.is-3", { width: "50vw" })
  .to(".exhibits-panel_wrapper.is-4", { width: "20vw" })
  .to(".exhibits-panel_wrapper.is-4", { width: "50vw" });


gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-2",
      start: "left right",
      end: "right 60%",
      scrub: true,
      containerAnimation: tlMain,
      markers: true
    }
  })
  .to(".exhibits-panel_wrapper.is-1", { width: "20vw" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-2",
      start: "right right",
      end: "left 60%",
      scrub: true,
      containerAnimation: tlMain
    }
  })
  .to(".exhibits-panel_wrapper.is-2", { width: "50vw" });
/*
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-2",
      start: "left 60%",
      end: "left 40%",
      scrub: true,
      containerAnimation: tlMain
    }
  })
  .to(".exhibits-panel_wrapper.is-2", { width: "20vw" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-3",
      start: "right right",
      end: "left 60%",
      scrub: true,
      containerAnimation: tlMain,
      markers: true
    }
  })
  .to(".exhibits-panel_wrapper.is-3", { width: "50vw" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-3",
      start: "left 60%",
      end: "left 40%",
      scrub: true,
      containerAnimation: tlMain
    }
  })
  .to(".exhibits-panel_wrapper.is-3", { width: "20vw" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".exhibits-panel_wrapper.is-4",
      start: "1% right",
      end: "left 40%",
      scrub: true,
      containerAnimation: tlMain
    }
  })
  .to(".exhibits-panel_wrapper.is-4", { width: "100vw" });
*/
// hoverstates voor sectors
let rotatecross = gsap.to(".cursor_cross", {
  paused: true,
  rotation: 360,
  duration: 0.4,
  delay: 0.3,
  ease: "sine"
});

$("a").mouseenter(function () {
  console.log("test");
  rotatecross.restart(true);
});
