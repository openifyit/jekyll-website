var scrollToAnchor = function(event, anchorElement, addHistoryCallback) {
    event.preventDefault();
    var scrollTopOffset = $(anchorElement).offset().top;
    $('body').animate({scrollTop: scrollTopOffset}, 500, 'swing');
    if(addHistoryCallback) {
        addHistoryCallback(anchorElement);
    }
};

var addHistory = function(anchorElement) {
    if(history && history.pushState) {
        history.pushState("", null, anchorElement);
    }
}
