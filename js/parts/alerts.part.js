var siteAlerts = function() {

    var $naturalrose = this;

    //Alert test
    $('#alert-test').on('click', function() {
        $naturalrose.createAlert('#site-alerts', '', 'success', 'This is the alert message');
    });

};

module.exports = siteAlerts;