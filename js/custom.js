$(document).ready(function(){
  $(".button-collapse").sideNav();

$('.modal').modal();

  //new code
  $(".contact-2").hide();
$('#toggle-form1').on('click', function(e){
e.preventDefault();
  $(".contact-1").hide();
  $(".contact-2").show();

  });
$('#toggle-form2').on('click', function(e){
e.preventDefault();
  $(".contact-2").hide();
  $(".contact-1").show();

});

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
