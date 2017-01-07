jQuery(document).ready(function($) {

    var $stickyFooter = function() {
        var $body = $('body'),
            $stickyFooter = $('#site-footer.sticky-footer');

        if ($stickyFooter.length) {
            $body.addClass('sticky-footer');
            var $addPadding = function() {
                var $footer = $('#site-footer'),
                    $footerHeight = $footer.outerHeight() + 'px';
                $body.css('padding-bottom', $footerHeight );
            };
            $addPadding();
            $(window).resize(function() {
                $addPadding();
            });
        }
    };
    $stickyFooter();

});