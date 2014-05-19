$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navbarHeight = $( window ).height();
        if ($(window).scrollTop() > navbarHeight) {
            $('nav').addClass('navbar-fixed-top');
            $('.page-content').addClass('navbar-padding');
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
            $('.page-content').removeClass('navbar-padding');
        }
    });
});
