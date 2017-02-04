var prefooterContactForm = function() {

    if (this.contactFormWrapper.length) {
        var $naturalrose = this;
        //Sticky form waypoint
        var stickyContactForm = function() {

            var offset = $naturalrose.viewportHeight - $naturalrose.contactToggleHeight();

            var waypoint = new Waypoint({
                element: $naturalrose.contactFormWrapper,
                handler: function(direction) {
                    if(direction === 'down') {
                        //console.log('down waypoint hit: $scrollPosition + $viewportHeight');
                        if ($naturalrose.contactForm.hasClass('collapsed')) {
                        } else {
                            $naturalrose.contactForm.addClass('collapsed');
                        }
                        if (this.element.hasClass('stuck')) {
                            this.element.removeClass('stuck');
                        }
                    } else if(direction === 'up') {
                        //console.log('up waypoint hit: $scrollPosition + $viewportHeight');
                        if (this.element.hasClass('stuck')) {
                        } else {
                            this.element.addClass('stuck');
                        }
                    }
                },
                offset: offset
            });

            $naturalrose.initForm();

            //Reinitialize on window resize
            $(window).resize(function() {
                $naturalrose.reInitForm();
            });

            //Debug function
            // $(window).scroll(function() {
            //     $initializeForm();
            // });

        };
        stickyContactForm();

        //Form toggle
        var toggleFooterContact = function() {
            //var $contactForm = $('#contact-us');

            //Collapse Form
            $naturalrose.contactForm.addClass('collapsed');

            //Toggle form when button clicked
            $naturalrose.contactToggleButton.on('click', function () {
                $naturalrose.contactForm.toggleClass('collapsed');
            });
        };
        toggleFooterContact();
    }

};

module.exports = prefooterContactForm;