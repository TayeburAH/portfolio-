

$(document).ready(function (){

(function(){

})();


ScrollOut({
	targets: ".box-content-1",
	threshold:0.2,
	once:true,
});

ScrollOut({
  targets: ".box-content-2",
	threshold:0.2,
	once:true,
});

function remove_all_effects_on_of_sidebar(){
        $(".sidenav").removeClass("navbar-sidenav");
        $(".navbar-text").removeClass("navbar-text-middle");
        $("#main").removeClass("main-dark");
        $("body").removeClass("body-fixed");
}

function scroll_checker(nav){
        if (nav.length) {
        var hT = nav.offset().top;
        var wS = $(this).scrollTop();
        if (wS > hT){
           $('.skill_value').each(function(index, el) {
            thisVal = $(this).text();
            $(this).parent('.skill_view').animate({width: thisVal},2000)
        });
            }
    }
    }


$('.about').click(function(){
if ( $('#portfolio').hasClass('navbar-text-middle') ){
    // Remove all effects on of sidebar
    remove_all_effects_on_of_sidebar()
}
$("html").animate({ scrollTop: $('#mid-level').offset().top }, 1000);
});


$('.project').click(function(){

if ( $('#portfolio').hasClass('navbar-text-middle') ){
    // Remove all effects on of sidebar
    remove_all_effects_on_of_sidebar()
}
$("html, body").animate({ scrollTop: $('#my_project').offset().top }, 1000);
});


var image = $('img'); //
$.each(image, function(key, image){ // splits the dictionary, image is a DOM now
var downloadingImage = new Image();
console.log(image.getAttribute("data-src"))
//downloadingImage.src = "https://c1.thejournal.ie/media/2019/06/graham-27-752x501.png";
downloadingImage.src = image.getAttribute("data-src");
console.log(downloadingImage.complete) // gives true or false
 downloadingImage.onload = function(){
    image.src = this.src;
    setTimeout( function(){
    $(image).css({
    'filter':'blur(0px)',
    });
       },800);
};
});


$(window).scroll(function() {
    var nav = $('#skills');
    //console.log(nav.length)
    scroll_checker(nav)
});


$(window).on('load',function() {
    var nav = $('#skills');
    //console.log(nav.length)
    scroll_checker(nav)
});

    console.log('Hi')
    console.log(window.location.href != 'http://127.0.0.1:8000/contact/')


    // Parallax
    if (window.location.href != 'http://127.0.0.1:8000/contact/'){
        var $scene = $("#scene");
        var parallaxInstance = new Parallax(scene);
        var rellax = new Rellax('.rellax');
        $('.parallax-window').parallax({imageSrc: '/img/pp.jpg'});

    }




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
  $("#navbar_button").on("click",function (){
               console.log('working')
              $(".sidenav").toggleClass("navbar-sidenav");
              $(".navbar-text").toggleClass("navbar-text-middle");
              $("#main").toggleClass("main-dark");
              $("body").toggleClass("body-fixed");
              $('.contact_content').toggleClass('contact_content_blur')

  });


  $(window).on("click resize", function(event){
            var $trigger = $("#navbar_button");
            var $div = $("#mySidenav")

            if( event.target !== $trigger && !$trigger.has(event.target).length && !$div.has(event.target).length ){
                remove_all_effects_on_of_sidebar()
            }
        });












});
