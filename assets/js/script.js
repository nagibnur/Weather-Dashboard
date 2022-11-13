const searchInput = document.querySelector('.input')
const searchBtn = document.querySelector('.btn')
const card = document.querySelector('#card')

searchBtn.addEventListener("click", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    console.log(searchTerm);


    const Url =
    'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=15647aebbea9c6fe13b3adcfad1c1793'

    fetch(Url)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        const weatherdata = [data.main, data.weather[0], data.wind]
        for(let i = 0; i < weatherdata.length; i++) {
            console.log(weatherdata[i]);
        }

        card.append(weatherdata)
    })
}

