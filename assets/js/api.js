

// ---------Function to Fetch data from api with different url and secret key for the api-------------------------------

const API_KEY="2e3d919601091cd86d955652723c5b5f"

const fetchData=async(url)=>{
    showSpinner();
    try{
       let response= await fetch(`${url}&appid=${API_KEY}`)
       let data=await response.json()
       hideSpinner();
       return data;
    }catch(err){
        console.log(err.message);
    }
}

const url={
    currentWeather(lat,lon){
        return (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`);
    },
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}`
    },
    airPollution(lat,lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
    },
    geoLocation(location){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5`
    },
}