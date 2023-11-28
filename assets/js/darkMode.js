


// ------------------------Function to switch theme of app from light to dark-------------------------------------


function changeColor() {

    let toggle = document.getElementById("toggle")
    let toggleBtn = document.getElementById("toggleBtn")
 
    if (toggle.classList.contains('dark-mode-btn')) {
        toggle.classList.remove('dark-mode-btn')
        toggleBtn.classList.remove('dark-mode-circle') 
    } else {
        toggle.classList.add('dark-mode-btn')
        toggleBtn.classList.add('dark-mode-circle')
    }

    var r = document.documentElement;
    var rStyle = window.getComputedStyle(r);

    let background100 = rStyle.getPropertyValue("--background-100")
    let background200 = rStyle.getPropertyValue("--background-200")
    let background300 = rStyle.getPropertyValue("--background-300")
    let heading100 = rStyle.getPropertyValue("--heading-100")
    let heading200 = rStyle.getPropertyValue("--heading-200")
    let heading300 = rStyle.getPropertyValue("--heading-300")
    
    let bg100="rgb(11, 11, 11)"; 
    let bg200="rgb(23, 23, 23)";
    let bg300="rgb(17, 17, 17)";
    let hd100="rgb(222, 222, 222)"
    let hd200="rgb(110, 110, 110)"
    let hd300="rgb(192, 192, 192)"


    background100 ===heading100 ? r.style.setProperty("--background-100", bg100) : r.style.setProperty("--background-100",heading100 );
    background200 ===heading200 ? r.style.setProperty("--background-200", bg200) : r.style.setProperty("--background-200",heading200 );
    background300 ===heading300 ? r.style.setProperty("--background-300", bg300) : r.style.setProperty("--background-300",heading300 );
    heading100 ===background100 ? r.style.setProperty("--heading-100", hd100) : r.style.setProperty("--heading-100",background100 );
    heading200 ===background200 ? r.style.setProperty("--heading-200", hd200) : r.style.setProperty("--heading-200",background200 );
    heading300 ===background300 ? r.style.setProperty("--heading-300", hd300) : r.style.setProperty("--heading-300",background300 );

}



