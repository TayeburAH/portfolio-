$(document).ready(function (){

(function(){

})();


ScrollOut({
	targets: ".box-content-1",
	threshold:0.2,
});


ScrollOut({
  targets: ".box-content-2",
	threshold:0.2,
});

var $scene = $("#scene");
var parallaxInstance = new Parallax(scene);





  var rellax = new Rellax('.rellax');
  $('.parallax-window').parallax({imageSrc: '/img/pp.jpg'});

  $(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut(); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'visible'});
  });

  $(window).scroll(function () {
      if($(this).scrollTop() > 600){
          $(".alternate-header").css("top","0px");
        }else{
        $(".alternate-header").css("top","-200px");
        };
  });


/* Set  class .navbar-sidenav with the width of the side navigation to 250px and add a black background color to body */
      $("button").on("click",function (){

          $(".sidenav").toggleClass("navbar-sidenav");
          $(".navbar-text").toggleClass("navbar-text-middle");
          $("#main").toggleClass("main-dark");
          $("body").toggleClass("body-fixed");


      });


      $(window).on("click resize", function(event){
            var $trigger = $("button");
            var $div = $("#mySidenav")

            if( event.target !== $trigger && !$trigger.has(event.target).length && !$div.has(event.target).length ){
                $(".sidenav").removeClass("navbar-sidenav");
                $(".navbar-text").removeClass("navbar-text-middle");
                $("#main").removeClass("main-dark");
                $("body").removeClass("body-fixed");
            }
        });




});
