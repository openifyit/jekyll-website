function scrollTo(event, anchorElement) {
    event.preventDefault();
    var scrollTopOffset = $(anchorElement).offset().top;
    $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    if(history && history.pushState()) {
        history.pushState("", null, anchorElement);
    }
}
