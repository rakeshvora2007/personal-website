(function($) {
  $.fn.scrollingTo = function(opts) {
    var defaults = {
      animationTime: 1000,
      easing: "",
      callbackBeforeTransition: function() {},
      callbackAfterTransition: function() {}
    };

    var config = $.extend({}, defaults, opts);

    $(this).click(function(e) {
      var eventVal = e;
      e.preventDefault();

      var $section = $(document).find($(this).data("section"));
      if ($section.length < 1) {
        return false;
      }

      if ($("html, body").is(":animated")) {
        $("html, body").stop(true, true);
      }

      var scrollPos = $section.offset().top;

      if ($(window).scrollTop() == scrollPos) {
        return false;
      }

      config.callbackBeforeTransition(eventVal, $section);

      $("html, body").animate(
        {
          scrollTop: scrollPos + "px"
        },
        config.animationTime,
        config.easing,
        function() {
          config.callbackAfterTransition(eventVal, $section);
        }
      );
    });
  };
})(jQuery);

jQuery(document).ready(function() {
  "use strict";
  new WOW().init();

  (function() {
    jQuery(".smooth-scroll").scrollingTo();
  })();
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $(".navbar-brand a").css("color", "#fff");
      $("#top-bar").removeClass("animated-header");
    } else {
      $(".navbar-brand a").css("color", "inherit");
      $("#top-bar").addClass("animated-header");
    }
  });

  $("#clients-logo").owlCarousel({
    itemsCustom: false,
    pagination: false,
    items: 5,
    autoplay: true
  });

  window.addEventListener("keydown", event => {
    if (event.key === "#") {
      window.sessionStorage.setItem("input", "#");
    }
    if (event.key === "s") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "s");
      }
    }

    if (event.key === "e") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "e");
      }
    }

    if (event.key === "c") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "c");
      }
    }

    if (event.key === "r") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "r");
      }
    }

    if (event.key === "t") {
      if (window.sessionStorage.getItem("input")) {
        let val = window.sessionStorage.getItem("input");
        window.sessionStorage.setItem("input", val + "t");
      }
    }

    let regex = /#secret/;
    let value = window.sessionStorage.getItem("input");
    if (value && value.match(regex)) {
      var username = prompt("what the heck?");
      var password = prompt("really thats it?");
      window.sessionStorage.removeItem("input");
    }
  });

});

// fancybox
$(".fancybox").fancybox({
  padding: 0,

  openEffect: "elastic",
  openSpeed: 450,

  closeEffect: "elastic",
  closeSpeed: 350,

  closeClick: true,
  helpers: {
    title: {
      type: "inside"
    },
    overlay: {
      css: {
        background: "rgba(0,0,0,0.8)"
      }
    }
  }
});
