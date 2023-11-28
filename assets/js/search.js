

//-------------------------------------------- open search box --------------------------------------------

function openSearchBox() {
  const container = document.getElementById('main-container')
  const searchBox = document.getElementById('search-box');
  searchBox.style.display = "flex"
  container.style.display = "none"
}

function closeSearchBox() {
  const container = document.getElementById('main-container')
  const searchBox = document.getElementById('search-box');
  searchBox.style.display = "none"
  container.style.display = "flex"
}





//------------------------------------Fetching data with user Input--------------------------------------------




const inputField1 = document.getElementById("search-input1")
const inputField2 = document.getElementById("search-input2")


inputField1.addEventListener('input', fetchPlaces)
inputField2.addEventListener('input', fetchPlaces)

let interval;

function fetchPlaces(e) {

  const list = document.getElementById('result-list')
  const list2 = document.getElementById('result-list2')
  let place = e.target.value

  let currrentList = document.getElementById('result-list')
  let currrentList2 = document.getElementById('result-list2')
  currrentList.innerHTML = ""
  currrentList2.innerHTML = ""

  clearInterval(interval)
  interval = setTimeout(async () => {
    let response = await fetchData(url.geoLocation(place))

    response && response.length !== 0 && response.map((res) => {
      let li = document.createElement('li');
      let li2 = document.createElement('li');
      li.innerHTML = `<li onclick="fetchLocation(${res.lat},${res.lon})" class="search-each-list"><i class='bx bx-map' ></i><h3>${res.name}, ${res.state? res.state+",": " "} ${res.country}</h3></li>`
      li2.innerHTML = `<li onclick="fetchLocation(${res.lat},${res.lon})" class="search-each-list2"><i class='bx bx-map' ></i><h3>${res.name}, ${res.state? res.state+",": " "} ${res.country}</h3></li>`
      list.appendChild(li);
      list2.appendChild(li2);
    })

  }, 400);
}


