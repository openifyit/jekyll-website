$(document).ready(function () {
    $('#scroll-to').click(function () {
        var scrollTopOffset = $('.vision').offset().top;
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
