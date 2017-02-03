var APPID = "b71b80fc0a8db2f9bafb5ec6d7e07c13";
var units = "metric";
var temp;
var loc;
var icon;
var wind;
var conditions;


function update(weather) {
    var iconSrc = "http://openweathermap.org/img/w/" +icon + ".png";
    icon.src = "imgs/codes/" + weather.code + ".png"
    wind.innerHTML = weather.wind;
    conditions.innerHTML = weather.conditions;
    loc.innerHTML = weather.location;
    temp.innerHTML = weather.temp;
    humidity.innerHTML = weather.humidity;
}

var showPositionBycity = function() {
    var city = window.prompt("City name,Country code ?");
    updateByCity(city);
}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    wind = document.getElementById("wind");
    conditions = document.getElementById("conditions");
    humidity = document.getElementById("humidity");
    

    /* geolocation*/
    if(navigator.geolocation){
	    var showPosition = function(position){
            updateByGeo(position.coords.latitude, position.coords.longitude);
        }
	    navigator.geolocation.getCurrentPosition(showPosition, showPositionBycity);
    } else {
        showPositionBycity();
    }
}



function updateByGeo(lat, lon){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"units=" + units +
    "&lat=" + lat +
	"&lon=" + lon +
    "&APPID=" + APPID;
    sendRequest(url);
}


function updateByCity(city){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"q=" + city +
    "&units=" + units +
	"&APPID=" + APPID;
    sendRequest(url);
}


function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.code = data.weather[0].id;
            weather.conditions = data.weather[0].description;
            weather.wind = data.wind.speed;
            weather.location = data.name;
            weather.temp = data.main.temp;
            weather.humidity = data.main.humidity;
            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();    
}
