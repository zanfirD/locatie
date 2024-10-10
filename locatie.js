get_geo_position();
function on_succes(get_geo_position) {
    document.getElementById("latitude").innerHTML = "Latitude = " + SVGTextPositioningElement.coords.latitude;
    document.getElementById("longitude").innerHTML = "Longitude = " + SVGTextPositioningElement.coords.longitude;
    document.getElementById("acc").innerHTML = "Accuracy = " + SVGTextPositioningElement.coords.accuracy;
    document.getElementById("altitude").innerHTML = "Altitude = " + SVGTextPositioningElement.coords.altitude;
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyCkPur0Ce3ZXvRlxJMYSgZzx1zXy6Y-QIk";

    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}

function on_error(e)
{
    document.getElementById("text").innerHTML = e.message;
}

var geo_params = {
    enableHighAccuracy:true,
    timeout:1000,
    maximumAge:0
};

function get_geo_position()
{
    var geo = navigator.geolocation;
    geo.getCurrentPosition(on_succes, on_error, geo_params)
}