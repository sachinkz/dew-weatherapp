const days = ['Sun', 'Mon', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ["Jan", "Feb", "Mar", "Apr", "may", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "dec"]




const todaysDate = () => {
    const today = new Date();
    const istOptions = {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    };
    const istDateString = today.toLocaleDateString('en-US', istOptions);
    return istDateString
}

const currentTime = () => {
    let god = new Date
    let minute = god.getMinutes();
    let hour = god.getHours();
    let ampm = hour >= 12 ? "PM" : "AM"
    hour = hour > 12 ? hour - 12 : hour;
    let seconds = god.getSeconds();

    return { hour, minute, seconds, ampm }
}


function getTimeOffset(offset) {
    let utc = Date.now();
    let d = new Date(utc - offset)
    return `${d.getHours()}:${d.getMinutes()}`
}

const kelvinToCelsius = (kel) => {
    const cel = Math.round(kel - 273.15)
    return cel;
}


function getSunrise(timestamp) {
    const sunriseDate = new Date(timestamp * 1000)
    return sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
function getSunset(stamp) {
    const sunsetDate = new Date(stamp * 1000)
    return sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const meterToKm = (mtr) => {
    return mtr / 1000;
}



const showSpinner = () => {
    document.getElementById("loading-spinner").style.display = "flex"
}
const hideSpinner = () => {
    document.getElementById("loading-spinner").style.display = "none"
}

const getPercent = (num, temp) => {
    let val = num / (temp + 10) * 100;
    return val
}

const getDate = (t) => {
    const tStamp = t * 1000; // Convert seconds to milliseconds
    const date = new Date(tStamp);

    const options = { day: 'numeric', month: 'short' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate
}


const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedTime = date.toLocaleTimeString('en-US', options);

    return formattedTime;
};

