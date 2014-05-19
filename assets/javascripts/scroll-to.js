$(document).ready(function () {
    $('#scroll-to').click(function () {
        var scrollTopOffset = $('#section1').offset().top;
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
