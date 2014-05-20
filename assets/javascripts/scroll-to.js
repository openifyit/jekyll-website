$(document).ready(function () {
    $('#scroll-to').click(function () {
//        var scrollTopOffset = $( window ).height();
        var scrollTopOffset = $('nav').offset().top;
        console.log(scrollTopOffset);
        if(!scrollTopOffset) {
            scrollTopOffset = $('.services').offset().top;
            console.log(scrollTopOffset);
        }
        console.log(scrollTopOffset);
        $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    });
});
