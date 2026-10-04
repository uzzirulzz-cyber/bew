/* ---------------------------------------------------------------
   Playbeat Digital — mail-script.js (visual-only build)
   - binds the ajaxChimp stub to the footer newsletter form
   - magnific-popup init guarded (lightbox if plugin present)
---------------------------------------------------------------- */
(function ($) {
  "use strict";

  $(document).ready(function () {
    /* footer newsletter form */
    $("#mc_embed_signup form").ajaxChimp({});

    /* element gallery lightbox — only if magnific is ever added */
    if ($.fn.magnificPopup && $(".img-pop-up").length) {
      $(".img-pop-up").magnificPopup({
        type: "image",
        gallery: { enabled: true }
      });
    }
  });
})(jQuery);
