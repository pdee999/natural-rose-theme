$naturalrose.prefooterContactForm = function() {
    //Sticky form waypoint
    var $stickyContactForm = function() {

        var $offset = $naturalrose.viewportHeight - $naturalrose.contactToggleHeight();
        //console.log($toggleHeight);
        // console.log($offset);
        // console.log($(window).scrollTop() + $viewportHeight);

        var waypoint = new Waypoint({
            element: document.getElementById('footer-contact-form'),
            handler: function(direction) {
                if(direction === 'down') {
                    //console.log('down waypoint hit: $scrollPosition + $viewportHeight');
                    if (document.getElementById('contact-us').classList.contains('collapsed')) {
                    } else {
                        document.getElementById('contact-us').classList.add('collapsed');
                    }
                    if (this.element.classList.contains('stuck')) {
                        this.element.classList.remove('stuck');
                    }
                } else if(direction === 'up') {
                    //console.log('up waypoint hit: $scrollPosition + $viewportHeight');
                    if (this.element.classList.contains('stuck')) {
                    } else {
                        this.element.classList.add('stuck');
                    }
                }
            },
            offset: $offset
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
    $stickyContactForm();

    //Form toggle
    var $toggleFooterContact = function() {
        //var $contactForm = $('#contact-us');

        //Collapse Form
        $naturalrose.contactForm.addClass('collapsed');

        //Toggle form when button clicked
        $naturalrose.contactToggleButton.on('click', function () {
            $naturalrose.contactForm.toggleClass('collapsed');
        });
    };
    $toggleFooterContact();
};