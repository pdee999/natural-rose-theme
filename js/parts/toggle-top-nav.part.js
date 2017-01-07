jQuery(document).ready(function($) {

    var $toggleNav = function() {
        var $toggleButton = $('#navbar-toggle'),
            $navMenu = $('#navbar-collapse');

        if ($navMenu.length) {
            //Collapse Menu
            $navMenu.addClass('collapsed');

            //Toggle menu when button clicked
            $toggleButton.on('click', function () {
                $navMenu.toggleClass('collapsed');
            });
        }

    };
    $toggleNav();

});