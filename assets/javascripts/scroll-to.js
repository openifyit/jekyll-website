$(document).ready(function () {
    $('#scroll-to').click(function () {
        var scrollTopOffset = $('.services').offset().top;
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
