var toggleNav = function() {

    if (this.navMenu.length) {
        var toggleButton = $('#navbar-toggle'),
            navMenu = this.navMenu;
        //Collapse Menu
        navMenu.addClass('collapsed');

        //Toggle menu when button clicked
        toggleButton.on('click', function () {
            navMenu.toggleClass('collapsed');
        });
    }

};

module.exports = toggleNav;