$(document).ready(function() {

// funtion to change the background-color of topbar when window scrolls past 30px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".nav-bar").css({"background": "#ffffff", "padding": "1em 3em"})
    .addClass("shadow-sm");
  } else {
    $('.nav-bar').css({"background": "transparent", "padding": "2em 3em"})
    .removeClass("shadow-sm");
  }
}

// Function that opens Mobile Nav 
$(".menu-icon").click(function(){
    $(".nav-bar").fadeOut("fast", function() {
      $(".menu").css("top", 0);
    });
});

// Function that closes Mobile Nav
$(".close-menu-icon").click(function(){
    $(".menu").css("top", "-97vh")
    $(".nav-bar").fadeIn("slow");
});

});