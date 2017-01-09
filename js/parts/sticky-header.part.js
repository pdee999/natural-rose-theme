//Sticky Header
$naturalrose.siteHeader = $('.site-header');
$naturalrose.stickyHeader = function() {
    var sticky = new Waypoint.Sticky({
        element: $naturalrose.siteHeader[0],
        offset: -30
    });
};