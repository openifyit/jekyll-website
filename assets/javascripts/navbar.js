$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navbarHeight = $(window).height();
        if ($(window).scrollTop() > navbarHeight) {
            if($('nav').is(':visible')) {
                $('nav').addClass('navbar-fixed-top');
                $('.wrap').addClass('openify-navbar-padding');
            }
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
            $('.wrap').removeClass('openify-navbar-padding');
        }
    });
});
