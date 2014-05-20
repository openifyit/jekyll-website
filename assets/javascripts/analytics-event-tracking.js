$(document).ready(function () {
    $("[data-track='true']").each(function () {
        $(this).click(function(event){
            ga('send', 'event', 'button', 'click', event.target.id);
        });
    });
});
