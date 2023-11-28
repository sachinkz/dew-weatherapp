const days=['Sunday','Monday','Wednesday','Thursday','Friday','Saturday']
const months=["Jan","Feb","Mar","Apr","may","Jun","Jul","Aug","Sep","Oct","Nov","dec"]




 const todaysDate = () => {
    let god = new Date
    let month = god.getUTCMonth()
    let day = god.getUTCDay()
    let date = god.getUTCDate()
    
    return `${days[day]}, ${date}, ${months[month]}`
}

 const currentTime=()=>{
    let god = new Date
    let minute=god.getMinutes();
    let hour=god.getHours();
    let ampm=hour>=12? "PM":"AM"
    hour=hour>12?hour-12:hour;
    let seconds=god.getSeconds();

    return {hour,minute,seconds,ampm}
}


function getTimeOffset(offset){
    let utc=Date.now();
    let d=new Date(utc-offset)
    return `${d.getHours()}:${d.getMinutes()}`
}

const kelvinToCelsius=(kel)=>{
    const cel=Math.round(kel-273.15)
    return cel;
}


function getSunrise(timestamp){
    const sunriseDate=new Date(timestamp * 1000)
    return sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
function getSunset(timestamp){
    const sunsetDate=new Date(timestamp * 1000)
    return sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const meterToKm=(mtr)=>{
    return mtr/1000;
}



const showSpinner=()=>{
    document.getElementById("loading-spinner").style.display="flex"
}
const hideSpinner=()=>{
    document.getElementById("loading-spinner").style.display="none"
}

const getPercent=(num,temp)=>{
    let val= num/(temp+10)*100;
    console.log(val)
    return val
}
