//var menuListToggle = document.querySelector(".main-nav__toggle");
//var menu = document.querySelector(".main-nav");
//var menuList = document.querySelector(".main-nav__nav-list");


/*if (menuListToggle) {
    if (widthWindow && widthWindow >= 768) {
        menuList.classList.remove("visually-hidden");
        menuListToggle.classList.remove("main-nav__toggle--closed");
        menuListToggle.classList.remove("main-nav__toggle--opened");
    } else {
        menuList.classList.add("visually-hidden");
        menu.classList.remove("main-nav--nojs");
        menuListToggle.addEventListener("click", function () {
            menuList.classList.remove("visually-hidden");
            if (menuListToggle.classList.contains("main-nav__toggle--closed")) {
                menuListToggle.classList.remove("main-nav__toggle--closed");
                menuListToggle.classList.add("main-nav__toggle--opened");
                menuList.classList.remove("visually-hidden");
            } else {
                menuListToggle.classList.add("main-nav__toggle--closed");
                menuListToggle.classList.remove("main-nav__toggle--opened");
                menuList.classList.add("visually-hidden");
            }
        });
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (menuListToggle.classList.contains("main-nav__toggle--opened")) {
                    menuListToggle.classList.remove("main-nav__toggle--opened");
                    menuListToggle.classList.add("main-nav__toggle--closed");
                    menuList.classList.add("visually-hidden");
                }
            }
        });
    }
}*/

function initMap() {
    var mapContainer = document.querySelector(".contacts__map-wrapper");
    var widthWindow = document.documentElement.clientWidth;
    var coordinates = {lat: 59.939079, lng: 30.323042}
    var coordinatesDesktop = {lat: 59.939044, lng: 30.318672},
        zoom = 17,
        map = new google.maps.Map(mapContainer, {
            center: widthWindow && widthWindow >= 1300 ? coordinatesDesktop : coordinates,
            zoom: zoom
        }),
        image = {
            url: "img/map-pin.png",
            scaledSize: widthWindow && widthWindow >= 768 ? new google.maps.Size(124, 106) : new google.maps.Size(62, 53),
        };

    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: image
    });
}

window.onresize = function () {
    initMap();
};
window.onload = function () {
    initMap();
};
