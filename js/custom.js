$(function(){

  "use strict"

  $(window).on('load', function(){
    $('body').css("overflow","auto");
     $('.loading').fadeOut(1000);
     $('.loading').remove();
     
   });


  var nav = $('.navbar');

  $(window).scroll(function(){
  
      if ($(window).scrollTop() > 180 ) {
          nav.addClass('bg-light');
      } else {

        nav.removeClass('bg-light');

      }
  });

  $('.ani-btn').click(function(){
    $('html, body').animate({
      scrollTop : $('#' + $(this).data('scroll')).offset().top - 50
    },1000);
  });


$(".navbar-light .navbar-nav .nav-item").click(function () {
  if(!$(this).hasClass('active'))
  {
      $(".navbar-light .navbar-nav .nav-item.active").removeClass("active");
      $(this).addClass("active");        
  }
});

  $('.navbar-light .navbar-nav .nav-link').click(function(){
    $('html, body').animate({
      scrollTop : $('#' + $(this).data('scroll')).offset().top - 100
    },1000);
  });



  var typed = new Typed('.my', {
    strings: ["Front-end Developer." , "Web Designer."],
    typeSpeed: 70,
    loop: true,
    backSpeed: 50,
    showCursor: false,
    autoInsertCss: false,
    backDelay: 2000,
  });

 

 $('.navbar-light .navbar-toggler-icon').on('click', function(){
   $('.navbar').addClass('bg-light');
   $('.nav-word').css('display','block')
 });
  });