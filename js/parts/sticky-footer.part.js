// Sticky Footer
$naturalrose.stickyFooter = $('#site-footer.sticky-footer');
$naturalrose.stickFooter = function() {
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
};