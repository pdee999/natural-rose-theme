var toggleSearch = function() {

    if (this.searchBar.length) {
        var searchToggleButton = $('#search-toggle'),
            $naturalrose = this;
        //Collapse Search
        this.searchBar.addClass('collapsed');
        //Toggle search when button clicked
        searchToggleButton.on('click', function () {
            $naturalrose.searchBar.toggleClass('collapsed');
        });
    }

};

module.exports = toggleSearch;