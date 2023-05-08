//set initial state of button to 0
$("#back-to-top").fadeTo("0", 0);

// initiate scrollify and set scroll speed
$(function () {
  $.scrollify({
    section: ".section",
    scrollSpeed: 800,
    scrollbars: false,
    setHeigts: false
  });
});

// scroll back to top when button is clicked
$("#back-to-top").click(function () {
  $.scrollify.move(0);
});

// fade button out when on hero. Fade in when not on hero
$.scrollify({
  after: function () {
    if ($.scrollify.currentIndex() == 0) {
      $("#back-to-top").fadeTo("slow", 0);
    } else {
      $("#back-to-top").fadeTo("slow", 1);
    }
  }
});
