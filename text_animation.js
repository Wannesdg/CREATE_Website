var vid = document.getElementById("herovideo");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      vid.currentTime = 0;
      vid.play();
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".nav, .home_hero_textblock_logo, .home_hero_subheading, .button, .home_full-service_heading, p, h1, h2, h3, .splide_arrow-left, .splide_arrow-right, .company-section-title-logo"
);
hiddenElements.forEach((el) => observer.observe(el));
