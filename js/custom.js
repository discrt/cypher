$(document).ready(function(){
  $(".button-collapse").sideNav();

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

$('.modal').modal();

  //new code




  window.sr = ScrollReveal({
    distance: '20px',
    scale: 0.95,
  });
  sr.reveal('header .container video', {delay: 300, reset: true});
  sr.reveal('#collab .container', {delay: 300, reset: true});
  sr.reveal('#collab .sponsors', {delay: 300, reset: true});
  sr.reveal('#action .row', {delay: 300, reset: true});
  sr.reveal('.blog-section .row', {delay: 300, reset: true});
  sr.reveal('#contact-wrapper .address-card', {delay: 300, reset: true});
  sr.reveal('#contact-wrapper .contact-1');



  $(".contact-2").hide();
  $('#toggle-form1').on('click', function(e){
  e.preventDefault();
  $(".contact-1").hide();
  $(".contact-2").fadeIn();

  });
  $('#toggle-form2').on('click', function(e){
  e.preventDefault();
  $(".contact-2").hide();
  $(".contact-1").fadeIn();

  });

});
