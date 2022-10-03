$(document).ready(function () {
  "use strict";
  $(".hamburger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu_overlay").toggleClass("opened");
  });

  $(window).scroll(function () {
    var a = $(this).scrollTop();
    var b = $("#h_main").innerHeight();
    if (a > b - 60) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
});
