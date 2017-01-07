var $contactForm = $('#footer-contact-form'),
    $toggleButton = $('#contact-form-toggle'),
    $toggleHeight = $toggleButton.outerHeight(),
    $viewportHeight = $(window).height();

//Initialize sticky form
var $initializeForm = function() {
    setTimeout(function() {
        var $scrollPosition = $(window).scrollTop(),
            $formHeight = $contactForm.outerHeight(),
            $totalFormHeight = $formHeight - $toggleHeight,
            $footerHeight = $('#site-footer').outerHeight(),
            $documentHeight = $(document).height();
        // console.log($documentHeight);
        // console.log($scrollPosition + $viewportHeight);
        // console.log(($documentHeight - $formHeight - $footerHeight) + $toggleHeight);
        if (($scrollPosition + $viewportHeight) < (($documentHeight - $formHeight - $footerHeight) + $toggleHeight) ) {
            setTimeout(function() {
                $contactForm.addClass('stuck');
            }, 1);
        }
    }, 1);
};

jQuery(document).ready(function($) {

    if ($contactForm .length) {
        //Sticky form waypoint
        var $stickyContactForm = function() {

            var $offset = $viewportHeight - $toggleHeight;
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

            $initializeForm();

            //Reinitialize on window resize
            $(window).resize(function() {
                $contactForm.removeClass('stuck');
                Waypoint.refreshAll();
                $initializeForm();
            });

            //Debug function
            // $(window).scroll(function() {
            //     $initializeForm();
            // });

        };
        $stickyContactForm();

        //Form toggle
        var $toggleFooterContact = function() {
            var $contactForm = $('#contact-us');

            //Collapse Form
            $contactForm.addClass('collapsed');

            //Toggle form when button clicked
            $toggleButton.on('click', function () {
                $contactForm.toggleClass('collapsed');
            });
        };
        $toggleFooterContact();

    }

});