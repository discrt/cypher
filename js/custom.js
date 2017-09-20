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
    scale: 1,
    viewFactor: 0.5
  });
  sr.reveal('.navbar-fixed .container', {origin: 'top', distance: '50px'});

  sr.reveal('.navbar-fixed .material-icons', {origin: 'left', distance: '50px', delay: 300});

  sr.reveal('header .container video', {delay: 200,origin: 'left', distance: '50px', scale: 0.90});
  sr.reveal('header .container .left', {origin: 'left', distance: '10vw',duration: 900, delay: 1200});
  sr.reveal('header .container .right', {origin: 'right', distance: '10vw',duration: 900,  delay: 1200});
  sr.reveal('header .container h1', {origin: 'bottom', distance: '6vh',  delay: 400});
  sr.reveal('header .container p', {origin: 'bottom', distance: '5vh', delay: 700});
  sr.reveal('header .container .calls', {origin: 'bottom', distance: '4vh', delay: 900});

  sr.reveal('#collab .container .col', {delay: 100, reset: true}, 200);
  sr.reveal('#collab .sponsors  .col', {delay: 100, reset: true}, 100);

  sr.reveal('#action .img-left', {delay: 100, reset: true, origin: 'left'});
  sr.reveal('#action .col h3', {delay: 300, reset: true});
  sr.reveal('#action .col .call-to', {delay: 500, reset: true});
  sr.reveal('#action .b-right', { delay: 800, duration: 900, reset: true, origin: 'right', distance: '15vw'});
  sr.reveal('#action .img-right', {delay: 100, reset: true, origin: 'right'});
  sr.reveal('#action .b-left', {delay: 800, duration: 900, reset: true, origin: 'left', distance: '15vw'});

  sr.reveal('.blog-section .row', {delay: 200});
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
