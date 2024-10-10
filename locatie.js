function get_geo_position() {
    var geo = navigator.geolocation;
    geo.getCurrentPosition(on_success, on_error, geo_params);
}

function on_success(position) {
    document.getElementById("latitude").innerHTML = "Latitude = " + position.coords.latitude;
    document.getElementById("longitude").innerHTML = "Longitude = " + position.coords.longitude;
    document.getElementById("acc").innerHTML = "Accuracy = " + position.coords.accuracy;
    document.getElementById("altitude").innerHTML = "Altitude = " + (position.coords.altitude ? position.coords.altitude : 'Not available');

    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&key=AIzaSyCkPur0Ce3ZXvRlxJMYSgZzx1zXy6Y-QIk";

    document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}

function on_error(e) {
    document.getElementById("latitude").innerHTML = "Error: " + e.message;
}

var geo_params = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
};

get_geo_position();
