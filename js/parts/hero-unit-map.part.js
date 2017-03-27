var googleMap = function() {

    var map = $('.hero-unit.map');
    if (map.length) {
        $.each(map, function() {
            var thisMap = this,
                mapDisplayStatic = $(thisMap).find('.map-display .google-map')[0],
                mapDisplayStreetView = $(thisMap).find('.map-display .street-view')[0],
                mapDisplayDirections = $(thisMap).find('.map-display .directions')[0],
                mapLat = $(thisMap).data('lat'),
                mapLng = $(thisMap).data('lng'),
                mapCoordinates = {lat: mapLat, lng: mapLng},
                mapLocation = $(thisMap).data('location'),
                detailsToggle = $(thisMap).find('.details-toggle'),
                getDirectionsButton = $(thisMap).find('.directions .submit'),
                streetViewToggle = $(thisMap).find('.street-view-toggle');

            function initMap() {

                // INITIALIZE MAP
                var map = new google.maps.Map(mapDisplayStatic, {
                    zoom: 12,
                    center: mapCoordinates,
                    mapTypeControl: true,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: google.maps.ControlPosition.TOP_RIGHT
                    },
                    rotateControl: true,
                    rotateControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    fullscreenControl: true,
                    fullscreenControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    zoomControl: true,
                    zoomControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    scaleControl: true,
                    scaleControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    streetViewControl: false,
                    streetViewControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    }
                });

                var marker = new google.maps.Marker({
                    position: mapCoordinates,
                    map: map
                });

                //INITIALIZE DIRECTIONS
                var directionsService = new google.maps.DirectionsService(),
                    directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(mapDisplayDirections);

                //CALCULATE ROUTE
                //TODO: RUN THIS FUNCTION WHEN USER ENTERS ADDRESS
                if (getDirectionsButton.length) {
                    getDirectionsButton.on('click', function() {
                        var startLocation = $('#startLocation').val();
                        function calcRoute() {
                            var start = startLocation;
                            var end = mapLocation;
                            var request = {
                                origin:start,
                                destination:end,
                                travelMode: 'DRIVING'
                            };
                            directionsService.route(request, function(response, status) {
                                if (status == 'OK') {
                                    directionsDisplay.setDirections(response);
                                }
                            });
                        }
                        calcRoute();
                    });
                }

                // INITIALIZE STREET VIEW
                var panorama = new google.maps.StreetViewPanorama(
                    mapDisplayStreetView, {
                        position: mapCoordinates,
                        pov: {
                            heading: 0,
                            pitch: 0
                        },
                        panControl: true,
                        panControlOptions:{
                            position: google.maps.ControlPosition.RIGHT_BOTTOM
                        },
                        zoomControl: true,
                        zoomControlOptions:{
                            position: google.maps.ControlPosition.RIGHT_BOTTOM
                        },
                        addressControl: true,
                        addressControlOptions:{
                            position: google.maps.ControlPosition.TOP_RIGHT,
                            StreetViewAddressControl: true,
                            StreetViewAddressControlOptions: {
                                position: google.maps.ControlPosition.TOP_RIGHT
                            }
                        },
                        fullscreenControl: false,
                        fullscreenControlOptions:{
                            position: google.maps.ControlPosition.LEFT_BOTTOM
                        },
                        linksControl: false,
                        linksControlOptions:{
                            position: google.maps.ControlPosition.TOP_RIGHT
                        },
                        enableCloseButton: false,
                        enableCloseButtonOptions:{
                            position: google.maps.ControlPosition.LEFT_BOTTOM
                        },
                        motionTrackingControl: true,
                        motionTrackingControlOptions: {
                            position: google.maps.ControlPosition.RIGHT_BOTTOM
                        },
                    });
                map.setStreetView(panorama);

            }
            initMap();

            //TOGGLE DETAILS
            detailsToggle.on('click', function() {
                $(thisMap).toggleClass('details-active');
            });

            //TOGGLE STREET VIEW
            streetViewToggle.on('click', function() {
                $(thisMap).toggleClass('street-view-active');
            });

        });
    }

};

module.exports = googleMap;