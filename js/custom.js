$(document).ready(function(){
  $(".button-collapse").sideNav();
  //new code
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var winH = $(window).height();

    if(wScroll<1) {
      $("nav").addClass("atop");
    }
    else {
      $("nav").removeClass("atop");
    }
  });
});
