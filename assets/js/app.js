document.addEventListener('DOMContentLoaded', initialLocation)

function initialLocation(){
  fetchLocation(9.9313,76.2674);
}



// ------------------------Function to Access Browsers current Location-------------------------------------

function accessLocation() {

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchLocation(latitude, longitude);
      },
      (error) => {
        console.error(`Error getting location: ${error.message}`);
      }
    );
  } else {
    console.error("Geolocation is not supported by your browser");
  }

}


// ------------------------Function to Fetch datas from different APIs-------------------------------------



async function fetchLocation(lat, lon,search) {
  let curWeather = await fetchData(url.currentWeather(lat, lon))
  let fCast = await fetchData(url.forecast(lat, lon))
  let airPol = await fetchData(url.airPollution(lat, lon))
  displayDatas(curWeather, fCast, airPol);
  if(search){
    closeSearchBox();
    document.getElementById('search-results').style.display='none'
  }
}



// ------------------------Function to display fetched datas on HTML-------------------------------------

const current = document.getElementById('current-weather')
const sunset = document.getElementById('sunset')
const sunrise = document.getElementById('sunrise')
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const visibility = document.getElementById('visibility')
const feelsLike = document.getElementById('feels-like')
const so2 = document.getElementById('so2')
const no2 = document.getElementById('no2')
const o3 = document.getElementById('o3')
const graph=document.getElementsByClassName('graph-level')
const foreTemp=document.getElementsByClassName('fore-temp')
const forecastDates=document.getElementsByClassName('forecast-dat')
const todayTimes=document.getElementsByClassName('today-times')
const windSpeed=document.getElementsByClassName('today-windspeed')


function displayDatas(cur, fore, air) {
  console.log(cur,fore)
  current.innerHTML = `<div class="temp-and-img flex-around">
  <div  class="current-temperature flex-col flex-around">
      <div class="heading-last-updated">
          <h3>Now </h3>
          <p id="last-updated">update now</p>
          <a onclick="fetchLocation(${cur.coord.lat, cur.coord.lon})" href=""><i onclick"initialLocation()" class='bx bx-rotate-right flex'></i></a>
      </div>
      <h1>${kelvinToCelsius(cur.main.temp)}°c</h1>
      <h5>${cur.weather[0].description}</h5>
  </div>
  <img class="current-logo" src="./assets/images/weather_icons/${cur.weather[0].icon}.png" alt="">
</div>
<hr>
<p class="common-heading date-and-loc"><i class='bx bx-calendar-alt'></i>${todaysDate()}</p>
<p class="common-heading date-and-loc"><i class='bx bx-location-plus'></i>${cur.name}, ${cur.sys.country}</p>`

  
  humidity.innerText = `${cur.main.humidity}%`
  pressure.innerText = `${cur.main.pressure} hpa`
  sunrise.innerText = `${getSunrise(cur.sys.sunrise)}`
  sunset.innerText = `${getSunset(cur.sys.sunset)}`
  visibility.innerText = `${meterToKm(cur.visibility)}km`
  feelsLike.innerText = `${kelvinToCelsius(cur.main.feels_like)}°c`

  so2.innerText=`${air.list[0].components.so2}`
  no2.innerText=`${air.list[0].components.no2}`
  o3.innerText=`${air.list[0].components.o3}`


  for(let i=0;i<graph.length;i++){
    let t=kelvinToCelsius(fore.list[i].main.temp)
    graph[i].style.width=`${getPercent(t,kelvinToCelsius(cur.main.temp))}%`

    if(t>=40){
      graph[i].style.backgroundColor='red'
    }else if(t>=30&&t<40){
      graph[i].style.backgroundColor='orange'
    }else if(t>=20&&t<30){
      graph[i].style.backgroundColor='yellowgreen'
    }else if(t>=10&&t<20){
      graph[i].style.backgroundColor='green'
    }else if(t>=0&&t<10){
      graph[i].style.backgroundColor='cyan'
    }else if(t<0){
      graph[i].style.backgroundColor='blue'
    }
    foreTemp[i].innerText=`${kelvinToCelsius(fore.list[i*9].main.temp)}°c`
    forecastDates[i].innerText=`${getDate(fore.list[i*9].dt)}`
  }
  for(let i=0;i<todayTimes.length;i++){
    todayTimes[i].querySelector("h5").innerText=formatTime(fore.list[i].dt);
    todayTimes[i].querySelector("img").src=`./assets/images/weather_icons/${fore.list[i].weather[0].icon}.png`
    todayTimes[i].querySelector("#today-times-temp").innerText=`${kelvinToCelsius(fore.list[i].main.temp)}°c`;
    windSpeed[i].querySelector("h5").innerText=formatTime(fore.list[i].dt);
    windSpeed[i].querySelector("#today-wind-speed").innerText=`${innerText=fore.list[i].wind.speed} kmph`;
  }

 

}










