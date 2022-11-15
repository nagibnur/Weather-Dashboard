const searchInput = document.querySelector('.input')
const searchBtn = document.querySelector('.btn')
const card = document.querySelector('#small')
const li0 = document.querySelector('.li0')
const iconImg = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const li4 = document.querySelector('.li4')
const li5 = document.querySelector('.li5')

searchBtn.addEventListener("click", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    console.log(searchTerm);
    //card.hidden = false

    const Url =
    'http://api.openweathermap.org/data/2.5/forecast?q='+searchInput.value+'&APPID=15647aebbea9c6fe13b3adcfad1c1793'

    fetch(Url)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        console.log(data);
        cityName = data.city.name
        icon = data.list[8].weather[0].icon
        temp = data.list[8].main.temp
        description = data.list[8].weather[0].description
        windSpeed = data.list[8].wind.speed
        humidity = data.list[8].main.humidity

        li0.append(cityName)
        iconImg.append(icon)
        li2.append(temp)
        li3.append(description)
        li4.append(windSpeed)
        li5.append(humidity)
    })
}
    // waether = {cityName, icon, temp, description, windSpeed, humidity}
    // for(let i = 0; weather.lenght)

   
    



