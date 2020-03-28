$(document).ready(function() {

// funtion to change the background-color of topbar when window scrolls past 30px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".nav-bar").css({"background": "#ffffff", "padding": "1em 4.8vw"})
    .addClass("shadow-sm");
    $(".navbar-search-field").css("border", "1px solid #000000")
    .addClass("dark-placeholder-text");
  } else {
    $('.nav-bar').css({"background": "transparent", "padding": "1.5em 5.8vw"})
    .removeClass("shadow-sm");
    $(".navbar-search-field").css("border", "none")
    .removeClass("dark-placeholder-text");
  }
}

// Function that opens Mobile Nav 
$(".menu-icon").click(function(){
  $(".body-overlay").fadeIn();
    $(".menu").slideDown("fast");
});

// Function that closes Mobile Nav
$(".close-menu-icon, .body-overlay").click(function(){
    $(".menu").slideUp("fast");
    $(".body-overlay").fadeOut();
});

});