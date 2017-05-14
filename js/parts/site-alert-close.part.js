var siteAlertsClose = function() {

    var $naturalrose = this,
        alerts = $('.site-alert');

    if (alerts.length) {
        $.each(alerts, function() {
            var thisAlert = $(this),
                closeButton = $(this).find('.close');

            //CLOSE ALERT
            closeButton.on('click', function() {
                //Remove alert
                thisAlert.remove();
                //Reinit parallax
                $naturalrose.reinitParallx();
            });
        });
    }

};

module.exports = siteAlertsClose;