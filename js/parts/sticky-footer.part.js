jQuery(document).ready(function($) {

    $naturalrose.stickyFooter = function() {
        var $stickyFooter = $('#site-footer.sticky-footer');

        if ($stickyFooter.length) {
            $naturalrose.body.addClass('sticky-footer');
            var $addPadding = function() {
                var $footer = $('#site-footer'),
                    $footerHeight = $footer.outerHeight() + 'px';
                $naturalrose.body.css('padding-bottom', $footerHeight );
            };
            $addPadding();
            $(window).resize(function() {
                $addPadding();
            });
        }
    };
    $naturalrose.stickyFooter();

});