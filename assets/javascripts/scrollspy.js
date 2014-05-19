$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $( window ).height();
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('navbar-fixed-top');
            $('.page-content').addClass('navbar-padding');
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
            $('.page-content').removeClass('navbar-padding');
        }
    });
});
