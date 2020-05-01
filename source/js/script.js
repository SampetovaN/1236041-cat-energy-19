var mapContainer = document.querySelector('.contacts__map-wrapper');
var widthWindow = document.documentElement.clientWidth
function initMap() {
    var coordinates = {lat: 59.939079, lng: 30.323042}
    var coordinatesDesktop = {lat: 59.938969, lng: 30.319994},
        zoom = 17,
        map = new google.maps.Map(mapContainer, {
            center: widthWindow >= 1440 ? coordinatesDesktop : coordinates,
            zoom: zoom
        }),
        image = {
            url: 'img/map-pin.png',
            scaledSize: widthWindow >= 768 ? new google.maps.Size(124, 106) : new google.maps.Size(62, 53),
        };

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}

window.onload = function () {
    initMap();
};

