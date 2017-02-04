var stickyHeader = function() {

    if (this.siteHeader.length) {
        var sticky = new Waypoint.Sticky({
            element: this.siteHeader[0],
            offset: -30
        });
    }

};

module.exports = stickyHeader;