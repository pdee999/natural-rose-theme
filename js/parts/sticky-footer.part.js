var stickFooter = function() {

    if (this.stickyFooter.length) {
        var body = this.body;
        body.addClass('sticky-footer');
        var $addPadding = function() {
            var $footer = $('#site-footer'),
                $footerHeight = $footer.outerHeight() + 'px';
            body.css('padding-bottom', $footerHeight );
        };
        $addPadding();
        $(window).resize(function() {
            $addPadding();
        });
    }

};

module.exports = stickFooter;