

function changeColor() {


    let toggle = document.getElementById("toggle")
    let toggleBtn = document.getElementById("toggleBtn")
    let commonHeadings=document.getElementsByClassName("common-heading");


    
    if (toggle.classList.contains('dark-mode-btn')) {
        toggle.classList.remove('dark-mode-btn')
        toggleBtn.classList.remove('dark-mode-circle')
        for(i=0;i<commonHeadings.length;i++){
            commonHeadings[i].classList.remove("common-heading-dark")
        }
        
        
    } else {
        toggle.classList.add('dark-mode-btn')
        toggleBtn.classList.add('dark-mode-circle')
        for(i=0;i<commonHeadings.length;i++){
            commonHeadings[i].classList.add("common-heading-dark");
        }
    }

    var root = document.documentElement;
    let r=root.style
    let background100 = root.style.getPropertyValue("--background-100")
    let backgroundCard = root.style.getPropertyValue("--background-card")
    let backgroundInnerCard = root.style.getPropertyValue("--background-innerCard")
    let heading100 = root.style.getPropertyValue("--heading-100")


    background100 === 'whitesmoke' ? root.style.setProperty("--background-100", "rgb(12, 12, 12)") : root.style.setProperty("--background-100", "whitesmoke");
    backgroundCard === 'white' ? root.style.setProperty("--background-card", "rgb(26, 26, 26)") : root.style.setProperty("--background-card", "white");
    heading100==="rgb(12, 12, 12)"  ? r.setProperty("--heading-100","rgb(235, 232, 232)") : r.setProperty("--heading-100","rgb(12, 12, 12)") 
    backgroundInnerCard==="whitesmoke" ? r.setProperty("--background-innercard","gray") : r.setProperty("--background-innercard","whitesmoke")
}



