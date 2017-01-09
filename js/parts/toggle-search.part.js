//Toggle Search
$naturalrose.searchBar = $('#search');
$naturalrose.toggleSearch = function() {
    var $searchToggleButton = $('#search-toggle');
    //Collapse Search
    $naturalrose.searchBar.addClass('collapsed');
    //Toggle search when button clicked
    $searchToggleButton.on('click', function () {
        $naturalrose.searchBar.toggleClass('collapsed');
    });
};