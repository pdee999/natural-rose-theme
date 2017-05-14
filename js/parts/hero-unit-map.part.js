var googleMap = function() {

    var $naturalrose = this,
        map = $('.hero-unit.map');
    if (map.length) {
        $.each(map, function() {
            var thisMap = this,
                map,
                markers = [],
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
                directionsWrapper = $(thisMap).find('.directions'),
                getDirectionsButton = $(thisMap).find('.directions .get-directions'),
                printDirectionsButton = $(thisMap).find('.directions .print-directions'),
                streetViewToggle = $(thisMap).find('.street-view-toggle'),
                directionsToggle = $(thisMap).find('.directions-toggle'),
                directionsClose = $(thisMap).find('.close-directions'),
                fullScreenButton = $(thisMap).find('.full-screen'),
                zoomInButton = $(thisMap).find('.zoom-in'),
                zoomOutButton = $(thisMap).find('.zoom-out'),
                centerMapButton = $(thisMap).find('.center-map'),
                detailsTitle = $(thisMap).find('.hero-unit-body .title').text(),
                detailsDate = $(thisMap).find('.hero-unit-body .date').text(),
                detailsTime = $(thisMap).find('.hero-unit-body .time').text(),
                detailsLocation = $(thisMap).find('.hero-unit-body .location').text(),
                detailsAddress = $(thisMap).find('.hero-unit-body .address').text(),
                detailsCity = $(thisMap).find('.hero-unit-body .city').text(),
                detailsState = $(thisMap).find('.hero-unit-body .state').text(),
                detailsZip = $(thisMap).find('.hero-unit-body .zip').text(),
                detailsDescription = $(thisMap).find('.hero-unit-body .description').text(),
                infoContent = '<div class="map-info"><h1 class="title">' + detailsTitle + '</h1><p class="info"><small class="date">' + detailsDate + '</small><small class="time">' + detailsTime + '</small><span class="divider"></span><span class="location">' + detailsLocation + '</span><span class="address">' + detailsAddress + '</span><span class="city">' + detailsCity + '</span><span class="state">' + detailsState + '</span><span class="zip">' + detailsZip + '</span></p><p class="description">' + detailsDescription + '</p></div>';

            // mozfullscreenerror event handler
            function errorHandler() {
                alert('mozfullscreenerror');
            }
            document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);

            // toggle full screen
            function toggleFullScreen() {
                if (!document.fullscreenElement &&    // alternative standard method
                    !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }

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
                    fullscreenControl: false,
                    fullscreenControlOptions: {
                        position: google.maps.ControlPosition.RIGHT_TOP
                    },
                    zoomControl: false,
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
                                    "color": "#a32406"
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
                                    "color": "#1e1e1e"
                                },
                                {
                                    "lightness": 20
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

                //CREATE MAP INFO WINDOW
                var infowindow = new google.maps.InfoWindow({
                    content: infoContent
                });

                //GEOCODE ADDRESS, SET CUSTOM MARKER CENTER AND PAN MAP
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': mapAddress
                },
                function(results, status) {
                    if(status == google.maps.GeocoderStatus.OK) {
                        // var marker = new google.maps.Marker({
                        //     position: results[0].geometry.location,
                        //     map: map,
                        //     icon:'img/map-marker.png'
                        // });
                        var address = results[0].geometry.location;
                        map.setCenter(address);
                        map.setZoom(16);
                        createMarker(address);
                        initDirections(address);
                        initStreetView(address);
                        panMap(address);
                        centerMap(address);
                        // map.panBy(-250, 100);
                        // map.panTo(address);
                    }
                });

                //CREATE CUSTOM MARKER
                function createMarker(address) {
                    var marker = new google.maps.Marker({
                        position: address,
                        map: map,
                        icon:'img/map-marker.png',
                        title: detailsLocation
                    });
                    markers.push(marker);
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                }

                function clearMarkers() {
                    for (var i = 0; i < markers.length; i++) {
                        markers[i].setMap(null);
                    }
                    markers.length = 0;
                }

                //PAN MAP TO RIGHT
                // map.panBy(-250, 100);

                //PAN MAP
                function panMap(address) {
                    map.panTo(address);
                    if ($(window).width() >= 768) {
                        map.panBy(-250, 100);
                    }
                    //Pan map on window resize
                    $(window).resize(function() {
                        map.panTo(address);
                        if ($(window).width() >= 768) {
                            map.panBy(-250, 100);
                        }
                    });
                }

                //CENTER MAP
                function centerMap(address) {
                    centerMapButton.on('click', function () {
                        panMap(address);
                    });
                }

                //ZOOM IN CONTROLS
                zoomInButton.on('click', function() {
                    map.setZoom(map.getZoom()+1);
                });

                //ZOOM OUT CONTROLS
                zoomOutButton.on('click', function() {
                    map.setZoom(map.getZoom()-1);
                });

                //FULL SCREEN
                fullScreenButton.on('click', function() {
                    $(thisMap).toggleClass('full-screen-active');
                    google.maps.event.trigger(map,'resize');
                    toggleFullScreen();
                });

                //EXIT FULL SCREEN WHEN FULL SCREEN EXITED
                var screen_change_events = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange";
                $(document).on(screen_change_events, function () {
                    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
                    if (state === false ) {
                        if($(thisMap).hasClass('full-screen-active')) {
                            $(thisMap).removeClass('full-screen-active');
                        }
                    }
                });

                //EXIT FULL SCREEN WHEN ESCAPE KEY PRESSED
                $(document).keyup(function(e) {
                    if (e.keyCode == 27) { // escape key maps to keycode `27`
                        if($(thisMap).hasClass('full-screen-active')) {
                            $(thisMap).removeClass('full-screen-active');
                        }
                    }
                });

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
                        var start = $('#startLocation').val();
                        var end = address;
                        var request = {
                            origin:start,
                            destination:end,
                            travelMode: 'DRIVING'
                        };

                        // Start/Finish icons
                        // var icons = {
                        //     start: new google.maps.MarkerImage(
                        //         // URL
                        //         'img/map-marker.png'
                        //     ),
                        //     end: new google.maps.MarkerImage(
                        //         // URL
                        //         'img/map-marker.png'
                        //     )
                        // };
                        directionsService.route(request, function(response, status) {
                            if (status == 'OK') {
                                var route = response.routes[0].legs[0];

                                // Removes the markers
                                clearMarkers();

                                // Creates the origin marker
                                createStartMarker(route.start_location);

                                //Create start info window
                                createStartInfo(start);

                                // Creates the destination marker
                                createEndMarker(route.end_location);

                                // Display directions
                                directionsDisplay.setDirections(response);

                                // Add class
                                $(thisMap).addClass('directions-active');

                                //Scroll to directions
                                scrollToDirections();
                            } else {
                                // window.alert('Directions request failed due to ' + status);
                                $naturalrose.createAlert('#mapErrors', 'after', 'error', 'Directions request failed due to ' + status);
                            }
                        });
                    }

                    //CREATE CUSTOM ORIGIN MARKER
                    function createStartMarker(position) {
                        var marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: 'img/start-marker.png',
                            title: 'Origin' //TODO: UPDATE TITLE
                            // title: detailsLocation
                        });
                        markers.push(marker);
                    }

                    //CREATE START INFO WINDOW
                    function createStartInfo(start) {
                        //Origin info window
                        var startInfoContent = '<p class="origin-address">' + start + '</p>';
                        var startInfoWindow = new google.maps.InfoWindow({
                            content: startInfoContent
                        });
                        markers[0].addListener('click', function() {
                            startInfoWindow.open(map, markers[0]);
                        });
                    }

                    //CREATE CUSTOM DESTINATION MARKER
                    function createEndMarker(position) {
                        var marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            icon: 'img/end-marker.png',
                            title: 'Destination' //TODO: UPDATE TITLE
                            // title: position
                        });
                        markers.push(marker);
                        marker.addListener('click', function() {
                            infowindow.open(map, marker);
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

            //SCROLL TO DIRECTIONS
            function scrollToDirections() {
                $('html, body').animate({
                    scrollTop: directionsWrapper.offset().top
                }, 500);
            }

            //TOGGLE DIRECTIONS FORM
            directionsToggle.on('click', function() {
                if($(thisMap).hasClass('directions-active')) {
                    if($(thisMap).hasClass('direction-form-active')) {
                        $(thisMap).removeClass('direction-form-active');
                    } else {
                        $(thisMap).addClass('direction-form-active');
                    }
                } else {
                    if($(thisMap).hasClass('direction-form-active')) {
                        $(thisMap).removeClass('direction-form-active');
                    } else {
                        $(thisMap).addClass('direction-form-active');
                        scrollToDirections();
                    }
                    //focus on start location input
                    startInput.focus();
                }
            });
            directionsClose.on('click', function() {
                $(thisMap).toggleClass('direction-form-active');
            });

            //PRINT DIRECTIONS

            //Print Element Function
            function PrintElem(elem) {
                var mywindow = window.open('', 'PRINT', 'height=400,width=600');

                mywindow.document.write('<html><head><title>' + document.title  + '</title><style type="text/css">' +
                    // '@import "fonts/fontello/css/natural-rose.css", "fonts/fontello/css/animation.css", "fonts/fontello/css/natural-rose-ie7.css";' +
                    '@import url("https://fonts.googleapis.com/css?family=Varela+Round");' +
                    // '@font-face { font-family: "chunkfiveroman"; src: url("fonts/chunk-five-roman/chunkfive-webfont.eot"); src: url("fonts/chunk-five-roman/chunkfive-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/chunk-five-roman/chunkfive-webfont.woff2") format("woff2"), url("fonts/chunk-five-roman/chunkfive-webfont.woff") format("woff"), url("fonts/chunk-five-roman/chunkfive-webfont.ttf") format("truetype"), url("fonts/chunk-five-roman/chunkfive-webfont.svg#chunkfiveroman") format("svg"); font-weight: normal; font-style: normal; }' +
                    'body{font-family: "Varela Round";}' +
                    // 'h1,h2,h3,h4,h5,h6 { font-family: "chunkfiveroman", Arial; color: #000; display: block; visibility: visible; opacity: 1;}' +
                    'h1,h2,h3,h4,h5,h6 { font-family: "Bookman Old Style", Impact, Charcoal, serif; color: #000; display: block; visibility: visible; opacity: 1;}' +
                    '.divider {display: block;} .time, .city {margin-left: 10px;} .state,.zip {margin-left: 5px;} .location{display: block;} .adp-summary{margin-bottom: 10px; margin-left: 30px;}' +
                    '</style>');
                mywindow.document.write('</head><body >');
                mywindow.document.write('<h1>' + document.title  + '</h1>');
                mywindow.document.write(document.getElementById(elem).innerHTML);
                mywindow.document.write('</body></html>');

                mywindow.document.close(); // necessary for IE >= 10
                mywindow.focus(); // necessary for IE >= 10*/

                mywindow.print();
                mywindow.close();

                return true;
            }

            //Print directions on button click //TODO: STYLE PRINT DIRECTIONS
            printDirectionsButton.on('click', function() {
                //Get logo and directions
                var siteLogo = $('.site-brand .logo').html(),
                    mapDirections = $(thisMap).find('.directions-display').html();

                //Remove existing print elements
                var mapPrintDirections = $('#printDirections');
                if( mapPrintDirections.length ) {
                    mapPrintDirections.remove();
                }

                //Create and hide print element
                directionsWrapper.after('<div id="printDirections"><div class="print-header">' + siteLogo + '</div> ' + infoContent + '<div class="directions-wrapper">' + mapDirections + '</div></div>');
                $(thisMap).find('#printDirections').css('display', 'none');

                PrintElem('printDirections');
            });

        });
    }

};

module.exports = googleMap;