var siteAlertsCreate = function(alertPlaceholder, alertMethod, alertClasses, alertMessage) {
    var $naturalrose = this,
        placeholder = $(alertPlaceholder),
        markup =   '<div class="site-alert ' + alertClasses + '"> ' +
                        '<div class="alert-container"> ' +
                            '<div class="alert-row"> ' +
                                '<div class="alert"> ' +
                                    '<div class="content"> ' +
                                        '<span class="icon"></span> ' +
                                        '<p class="message">' + alertMessage + '</p> ' +
                                        '<button class="close"><span class="icon"></span></button> ' +
                                    '</div> ' +
                                '</div> ' +
                            '</div> ' +
                        '</div> ' +
                    '</div>';

    //Create alerts
    switch (alertMethod) {
        case 'prepend':
            placeholder.prepend(markup);
            break;
        case 'append':
            placeholder.append(markup);
            break;
        case 'before':
            placeholder.before(markup);
            break;
        case 'after':
            placeholder.after(markup);
            break;
        default:
            placeholder.prepend(markup);
    }

    //Scroll to alert
    function scrollToAlert() {
        $('html, body').animate({
            scrollTop: $(alertPlaceholder).offset().top
        }, 500);
    }
    scrollToAlert();

    //Stick alerts
    $naturalrose.stickAlert();

    //Close alerts
    $naturalrose.closeAlert();

    //Reinit parallax
    $naturalrose.reinitParallx();

};

module.exports = siteAlertsCreate;