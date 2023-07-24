const apiKey = "336a205e5212f606579d1509e87f694f";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");

async function checkWeather(city){
   const response = await fetch(apiURL + city +`&appid=${apiKey}`);
  if(response.status == 404){
   document.querySelector(".error").style.display="block";
   document.querySelector(".weather").style.display="none";

  }
  else{
   var data = await response.json();

 
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + "  km/hr";

   if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "clouds.png";
   } 
   else  if(data.weather[0].main == "Clear"){
      weatherIcon.src = "clear.png";
   } 
   else  if(data.weather[0].main == "Rain"){
      weatherIcon.src = "rain.png";
   } 
   else  if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "drizzle.png";
   } 
   else  if(data.weather[0].main == "Mist"){
      weatherIcon.src = "mist.png";
   } 

   document.querySelector(".weather").style.display = "block";
   document.querySelector(".error").style.display = "none";
  }
  


}

searchBtn.addEventListener("click", ()=>{
   checkWeather(searchBox.value);
})