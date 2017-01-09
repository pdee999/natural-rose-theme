//Toggle Navigation
$naturalrose.navMenu = $('#navbar-collapse');
$naturalrose.toggleNav = function() {
    var $toggleButton = $('#navbar-toggle');
    //Collapse Menu
    $naturalrose.navMenu.addClass('collapsed');

    //Toggle menu when button clicked
    $toggleButton.on('click', function () {
        $naturalrose.navMenu.toggleClass('collapsed');
    });
};