jQuery(document).ready(function($) {

    $naturalrose.toggleSearch = function() {
        var $toggleButton = $('#search-toggle'),
            $searchBar = $('#search');

        if ($searchBar.length) {
            //Collapse Search
            $searchBar.addClass('collapsed');

            //Toggle search when button clicked
            $toggleButton.on('click', function () {
                $searchBar.toggleClass('collapsed');
            });
        }
    };
    $naturalrose.toggleSearch();

});