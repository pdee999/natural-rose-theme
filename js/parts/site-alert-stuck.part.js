var siteAlertsStuck = function() {

    var alerts = $('.site-alert');

    if (alerts.length) {
        $.each(alerts, function() {
            var closeButton = $(this).find('.close');

            if($(this).hasClass('stuck')) {
                if(closeButton.length) {
                    closeButton.remove();
                }
            }
        });
    }

};

module.exports = siteAlertsStuck;