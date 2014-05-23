$(document).ready(function () {
    $('#scroll-arrow').click(function () {
        var headerBottomOffset = $('header').height();
        $('body').animate({scrollTop: headerBottomOffset}, 500, 'swing');
    });
});

function scrollTo(event, anchorElement) {
    event.preventDefault();
    var scrollTopOffset = $(anchorElement).offset().top;
    $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    if(history && history.pushState()) {
        history.pushState("", null, anchorElement);
    }
}