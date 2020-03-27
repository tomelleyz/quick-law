$(document).ready(function() {

// funtion to change the background-color of topbar when window scrolls past 30px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    $(".nav-bar").css({"background": "#ffffff", "padding": "1.5em 3.5em"})
    .addClass("shadow");
  } else {
    $('.nav-bar').css({"background": "transparent", "padding": "2.5em 4.5em"})
    .removeClass("shadow");
  }
}

// Function that opens Mobile Nav 
$(".menu-icon").click(function(){
    $(".nav-bar").hide();
    $(".menu").css({"top": "0", "opacity": 1});
});

// Function that closes Mobile Nav
$(".close-menu-icon").click(function(){
    $(".menu").css({"top": "-95vh", "opacity": 0.2});
    $(".nav-bar").show("fast");
});

});