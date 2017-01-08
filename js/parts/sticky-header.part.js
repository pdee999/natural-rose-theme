jQuery(document).ready(function($) {

    $naturalrose.stickyHeader = function() {
        var $siteHeader = $('.site-header');
        if ($siteHeader.length) {
            var sticky = new Waypoint.Sticky({
                element: $siteHeader[0],
                offset: -30
            });
        }
    };
    $naturalrose.stickyHeader();

});