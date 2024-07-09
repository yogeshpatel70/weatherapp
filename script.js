const apiurl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const APIkey="9892144acaa7599942ae8ee8b177f6e8";
const searchbox=document.querySelector('.search input');
const btn=document.querySelector('.search button');
const weathericon=document.querySelector(".weather-icon");
const weather1=document.querySelector(".weather");
const error=document.querySelector(".error");
async function checkweather(city){
    const response= await fetch(apiurl+city+`&APPID=${APIkey}`);
    var data=await response.json();
    if(data.name==undefined){
        error.style.display="block";
        weather1.style.display="none";
    }
    else{
        error.style.display="none";
    }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="Clouds"){
        weathericon.src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="clear.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="snow.png";
    }
    else if(data.weather[0].main=="Wind"){
        weathericon.src="wind.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="drizzle.png";
    }
    weather1.style.display="block";
}
btn.addEventListener("click",()=>{

    checkweather(searchbox.value);
})