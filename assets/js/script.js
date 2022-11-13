const searchInput = document.querySelector('.input')
const searchBtn = document.querySelector('.btn')
const card = document.querySelector('#card')
const li0 = document.querySelector('.li0')
const li1 = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const li4 = document.querySelector('.li4')
const li5 = document.querySelector('.li5')

searchBtn.addEventListener("click", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    console.log(searchTerm);
    card.hidden = false

    const Url =
    'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=15647aebbea9c6fe13b3adcfad1c1793'

    fetch(Url)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        li0.append(data.name, data.timezone)
        li1.append(data.weather[0].icon)
        li2.append(data.main.temp)
        li3.append(data.weather[0].description)
        li4.append(data.wind.speed)
        li5.append(data.main.humidity)
        
    })
}

