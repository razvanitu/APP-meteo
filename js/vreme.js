var API_KEY = "b71b80fc0a8db2f9bafb5ec6d7e07c13";
var cel = true;
var wd;
var loc = "45.78,24.15".split(',');

if("geolocation" in navigator)
{

    navigator.geolocation.getCurrentPosition(function(position){
    
});
}
function displayTemp (fTemp, c){
  if(c) return Math.round((fTemp -32)* (5/9)) + " C";
  return Math.round(fTemp) + "F"
}

function render (wd, cel){
    
    var currentLocation = wd.name;
    var currentWeather = wd.weather[0].description;
    var currentTemp = displayTemp(wd.main.temp, cel);
    var high = displayTemp(wd.main.temp_max, cel);
    var low = displayTemp (wd.main.temp_min, cel);
    var icon = wd.weather[0].icon;

    $('#currentLocation').html(currentLocation);
    $('#currentTemp').html(currentTemp);
    $('#currentWeather').html(currentWeather);
    $('#high-low').html(high +"/" +low);

    var iconSrc = "http://openweathermap.org/img/w/" +icon + ".png";
    $('#currentTemp').prepend('<img src=' + iconSrc +">");
}

function fetchWeatherFromAPI () {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
        +loc[0]+ '&lon='+ loc[1] +'&APPID=' + API_KEY, function(apiData){
            wd = apiData;
            render(wd, cel);
    });
}


$(function(){

    fetchWeatherFromAPI();

    $("#toggle").click(function(){
        cel =!cel;
        render(wd, cel);
    });
    $("#refresh").click(function(){
        fetchWeatherFromAPI();
        
    });
    $('#g01-01').on('change',function(){
    var_val = $(this).is(':checked') ? 'checked' : 'unchecked';
    console.log(var_val);
    if (var_val === "unchecked"){
        console.log("ssssaz");
    }
    else
     
     {
         console.log("ssssaz22222222222");
         setInterval(function(){ fetchWeatherFromAPI() }, 60000);
     }
    //setTimeout(function(){ fetchWeatherFromAPI() }, 3000);
    
});
})


