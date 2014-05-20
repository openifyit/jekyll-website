$(document).ready(function () {
    $('#scroll-to').click(function () {
       ga('send', 'event', 'button', 'click', 'scroll-arrow')
    });

    $('#learn-more-api').click(function () {
        ga('send', 'event', 'button', 'click', 'learn-more-api')
    });

    $('#learn-more-realtime').click(function () {
        ga('send', 'event', 'button', 'click', 'learn-more-realtime')
    });

    $('#learn-more-visualization').click(function () {
        ga('send', 'event', 'button', 'click', 'learn-more-visualization')
    });

    $('.close').click(function(){
        ga('send', 'event', 'button', 'click', 'close-modal');
    });
});
