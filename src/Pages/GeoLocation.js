var x = document.getElementById("demo");

export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
export function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

}

export function getLat(position){
    const lat = position.coords.longitude

}
export function getLong(position){
    const long = position.coords.longitude
}



