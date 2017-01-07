jQuery(document).ready(function($) {

    var $stickyHeader = function() {
        var $siteHeader = $('.site-header');
        if ($siteHeader.length) {
            var sticky = new Waypoint.Sticky({
                element: $siteHeader[0],
                offset: -30
            });
        }
    };
    $stickyHeader();

});