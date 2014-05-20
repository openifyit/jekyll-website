$(document).ready(function () {
    $('#scroll-arrow').click(function () {
        var scrollTopOffset = $('.services').offset().top;
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
