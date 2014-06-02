$(document).ready(function () {
    $('#scroll-arrow').click(function () {
        var scrollTopOffset = $('nav').offset().top;
        if(!scrollTopOffset) {
            scrollTopOffset = $('.services').offset().top;
        }
        $('body,html').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
