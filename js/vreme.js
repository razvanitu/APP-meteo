var API_KEY = "b71b80fc0a8db2f9bafb5ec6d7e07c13";



function displayTemp(fTemp,c){

  if(c) return Math.round((fTemp -32)* (5/9)) + " C";
  return Math.round(fTemp) + "F"


}

//function render (wd ,cel)
  //var currentTemp = displayTemp(wd.weather[0], cel);
  //  var high = displayTemp (wd.main.temp_max , cel);

  //  var low = displayTemp (wd.main.temp_min, cel);

$(function(){

    var loc;

    $.getJSON('http://ipinfo.io',function (d){

        loc = "45.78,24.15".split(','); // d.loc.split(",");
        console.log(loc);

        $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&lat='
            +loc[0]+ '&lon='+ loc[1] +'&APPID=' + API_KEY, function(wd){
                console.log("got the data ,",wd);
                var currentLocation = wd.name;
                var currentWeather = wd.weather[0].description;
                var currentTemp = wd.weather[0].description;
                var high = wd.main.temp_max;
                var low = wd.main.temp_min;
                var icon = wd.weather[0].icon;
                

                $('#currentLocation').html(currentLocation);
                $('#currentTemp').html(currentTemp);
                $('#currentWeather').html(currentWeather);
                $('#high-low').html(high +"/" +low);
                
                var iconSrc = "http://openweathermap.org/img/w/" +icon + ".png";
            
                $('#currentTemp').prepend('<img src=' + iconSrc +">");
        })
    })
});

//$(function(){

//var loc;

//$.getJSON('http://ipinfo.io',function (d){

//loc = d.loc.split(",");
//console.log(loc);
//$.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&lat='
//+loc[0]+ '&lon='+ loc[1] +'&APPID=' + API_KEY, function(apiData){

    //wd = apiData;

    $('toggle').click(function()
    
    
    {
cel =!cel;

    })