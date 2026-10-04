/* ---------------------------------------------------------------
   Playbeat Digital — contact.js (visual-only build)
   Intercepts #contactForm (no contact_process.php backend in this
   static build), validates with jQuery Validation and renders an
   inline success message instead of posting.
---------------------------------------------------------------- */
(function ($) {
  "use strict";

  $(document).ready(function () {
    var $form = $("#contactForm");
    if (!$form.length) return;

    $form.on("submit", function (e) {
      e.preventDefault();

      /* validate if the plugin is loaded, else fall back to HTML5 check */
      if ($.fn.validate) {
        $form.validate({
          rules: {
            name: "required",
            email: { required: true, email: true },
            subject: "required",
            message: "required"
          },
          errorClass: "error is-invalid",
          validClass: "is-valid",
          errorPlacement: function () { /* minimal visual build */ }
        });
        if (!$form.valid()) return;
      } else if (!$form[0].checkValidity()) {
        $form[0].reportValidity && $form[0].reportValidity();
        return;
      }

      var $btn = $form.find("button[type=submit]");
      var original = $btn.text();
      $btn.prop("disabled", true).text("Sending...");

      setTimeout(function () {
        $btn.prop("disabled", false).text(original);
        var $msg = $("#contactFormStatus");
        if (!$msg.length) {
          $msg = $('<div id="contactFormStatus" class="mt-3"></div>');
          $form.append($msg);
        }
        $msg
          .css({ color: "#0070fa", fontWeight: 500 })
          .text("Thank you! Your message has been received — the Playbeat team will reply shortly.");
        $form[0].reset();
      }, 700);
    });
  });
})(jQuery);
