const items = document.querySelectorAll(".home_sectors_card");
gsap.defaults({ duration: 0.3, ease: "sine" });

items.forEach(function (item) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item, { width: "32vw" })
    .to(
      item.querySelector(".sectors_card_text_overlay"),
      {
        opacity: 1
      },
      0.2
    )
    .to(
      item.querySelector(".home_sectors_text"),
      {
        yPercent: -10
      },
      "<"
    );

  const tlclose = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".sectors_card_text_overlay"), {
      opacity: 0,
      duration: 0.01
    })
    .to(
      item.querySelector(".home_sectors_text"),
      {
        yPercent: 10
      },
      "<"
    )
    .to(item, { width: "19vw" }, 0.1);

  item.addEventListener("mouseenter", () => tl.restart());
  item.addEventListener("mouseleave", () => {
    tlclose.restart();
    tl.kill();
  });
});
