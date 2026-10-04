/* ---------------------------------------------------------------
   Playbeat Digital — theme custom.js (visual-only build)
   - nice-select init
   - mobile menu auto-close
   - owl carousel init (if a slider exists on the page)
   - smooth active-state handling for the admin nav
---------------------------------------------------------------- */
(function ($) {
  "use strict";

  $(document).ready(function () {
    /* nice-select — only when a <select> exists */
    if ($.fn.niceSelect && $("select").length) {
      $("select").niceSelect();
    }

    /* close the collapsed menu after a nav tap (mobile UX) */
    $("#navbarSupportedContent a.nav-link").on("click", function () {
      var $nav = $("#navbarSupportedContent");
      if ($nav.hasClass("show")) {
        $nav.collapse("hide");
      }
    });

    /* owl carousel — init only if a slider is present */
    if ($.fn.owlCarousel && $(".owl-carousel").length) {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 }
        }
      });
    }
  });
})(jQuery);
