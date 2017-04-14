var googleMap = function() {

    var map = $('.hero-unit.map');
    if (map.length) {
        $.each(map, function() {
            var thisMap = this,
                mapDisplayStatic = $(thisMap).find('.map-display .google-map')[0],
                mapDisplayStreetView = $(thisMap).find('.map-display .street-view')[0],
                mapDisplayDirections = $(thisMap).find('.directions .directions-display')[0],
                // mapLat = $(thisMap).data('lat'),
                // mapLng = $(thisMap).data('lng'),
                // mapCoordinates = {lat: mapLat, lng: mapLng},
                // mapLocation = $(thisMap).data('location'),
                mapAddress = $(thisMap).data('address'),
                // mapZip = $(thisMap).data('zip'),
                // mapCountry = $(thisMap).data('country'),
                detailsToggle = $(thisMap).find('.details-toggle'),
                startInput = $(thisMap).find('#startLocation'),
                getDirectionsButton = $(thisMap).find('.directions .get-directions'),
                streetViewToggle = $(thisMap).find('.street-view-toggle'),
                directionsToggle = $(thisMap).find('.directions-toggle'),
                directionsClose = $(thisMap).find('.close-directions'),
                centerMapButton = $(thisMap).find('.center-map');

            function initMap() {

                // INITIALIZE MAP
                var map = new google.maps.Map(mapDisplayStatic, {
                    draggable: true,
                    scrollwheel: false,
                    // zoom: 12,
                    // center: mapCoordinates,
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
                    },
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#fff"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    // "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 5
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 10
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ad2506"
                                },
                                {
                                    "lightness": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#000"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#a32406"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#000"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a32406"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#a32406"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#a32406"
                                },
                                {
                                    "visibility": "on"
                                },
                                {
                                    "weight": "1"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on",
                                    "color": "#000"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a32406"
                                },
                                {
                                    "lightness": 30
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#727272"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#fff"
                                }
                            ]
                        }
                    ]
                });

                //GEOCODE ADDRESS, SET CUSTOM MARKER CENTER AND PAN MAP
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': mapAddress
                },
                function(results, status) {
                    if(status == google.maps.GeocoderStatus.OK) {
                        var marker = new google.maps.Marker({
                            position: results[0].geometry.location,
                            map: map,
                            icon:'img/map-marker.png'
                        });
                        var address = results[0].geometry.location;
                        map.setCenter(address);
                        map.setZoom(16);
                        initDirections(address);
                        initStreetView(address);
                        panMap(address);
                        centerMap(address);
                        // map.panBy(-250, 100);
                        // map.panTo(address);
                    }
                });

                //CUSTOM MARKER
                // var marker = new google.maps.Marker({
                //     position: mapCoordinates,
                //     map: map,
                //     icon:'img/map-marker.png',
                //     title: 'Natural Rose'
                // });

                //PAN MAP TO RIGHT
                // map.panBy(-250, 100);

                //PAN MAP
                function panMap(address) {
                    map.panTo(address);
                    if ($(window).width() >= 768) {
                        map.panBy(-250, 100);
                    }
                }

                //CENTER MAP
                function centerMap(address) {
                    centerMapButton.on('click', function () {
                        panMap(address);
                    });
                }

                //INITIALIZE DIRECTIONS
                var directionsService = new google.maps.DirectionsService(),
                    directionsDisplay = new google.maps.DirectionsRenderer({
                        map: map,
                        suppressMarkers: true,
                        polylineOptions: {
                            strokeColor: "#0d2d82",
                            strokeOpacity: ".8",
                            strokeWeight: 7
                        }
                    });
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(mapDisplayDirections);

                function initDirections(address) {
                    //CALCULATE ROUTE
                    function calcRoute() {
                        var startLocation = $('#startLocation').val();
                        var start = startLocation;
                        var end = address;
                        var request = {
                            origin:start,
                            destination:end,
                            travelMode: 'DRIVING'
                        };
                        // Start/Finish icons
                        var icons = {
                            start: new google.maps.MarkerImage(
                                // URL
                                'img/map-marker.png'
                            ),
                            end: new google.maps.MarkerImage(
                                // URL
                                'img/map-marker.png'
                            )
                        };
                        directionsService.route(request, function(response, status) {
                            if (status == 'OK') {
                                var route = response.routes[0].legs[0];

                                //TODO: Remove markers when directions returned
                                // Removes the markers
                                // setMapOnAll(null);

                                // Creates the origin marker
                                createStartMarker(route.start_location);

                                // Creates the destination marker
                                createEndMarker(route.end_location);

                                // Display directions
                                directionsDisplay.setDirections(response);

                                // Add class
                                $(thisMap).addClass('directions-active');
                            } else {
                                window.alert('Directions request failed due to ' + status);
                            }
                        });
                    }

                    //CUSTOM DIRECTIONS MARKERS
                    function createStartMarker(position) {
                        var marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: 'img/start-marker.png'
                        });
                    }
                    function createEndMarker(position) {
                        var marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: 'img/end-marker.png'
                        });
                    }

                    //CALCULATE ROUTE ON ENTER KEY PRESS
                    if (startInput.length) {
                        $(startInput).keypress(function(event){
                            if(event.keyCode == 13){
                                calcRoute();
                            }
                        });
                    }

                    //CALCULATE ROUTE ON BUTTON CLICK
                    if (getDirectionsButton.length) {
                        getDirectionsButton.on('click', function() {
                            calcRoute();
                        });
                    }
                }

                // INITIALIZE STREET VIEW
                function initStreetView(address) {
                    var panorama = new google.maps.StreetViewPanorama(
                        mapDisplayStreetView, {
                            position: address,
                            // pov: {
                            //     heading: 0,
                            //     pitch: 0
                            // },
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
                            motionTracking: true,
                            motionTrackingControl: true,
                            motionTrackingControlOptions: {
                                position: google.maps.ControlPosition.RIGHT_BOTTOM
                            },
                        });
                    map.setStreetView(panorama);
                    //SET STREET VIEW HEADING
                    google.maps.event.addListener(panorama, 'links_changed', function() {
                        var links =  panorama.getLinks();
                        panorama.setPov({
                            heading: links[0].heading,
                            pitch: 0,
                            zoom: 1
                        });
                    });
                }

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

            //TOGGLE DIRECTIONS FORM
            directionsToggle.on('click', function() {
                $(thisMap).toggleClass('direction-form-active');
            });
            directionsClose.on('click', function() {
                $(thisMap).toggleClass('direction-form-active');
            });

        });
    }

};

module.exports = googleMap;