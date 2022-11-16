const searchInput = document.querySelector('.input')
const searchBtn = document.querySelector('.btn')
const cardContainerElement = document.querySelector('#card-Container')
const currentDateContainer = document.querySelector('#currentDate-container')

searchBtn.addEventListener("click", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    localStorage.setItem('search-term', searchTerm);
    

    const Url =
    'http://api.openweathermap.org/data/2.5/forecast?q='+searchInput.value+'&APPID=15647aebbea9c6fe13b3adcfad1c1793'

    fetch(Url)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        cityName = data.city.name
            date = data.list[0].dt_txt
            icon = data.list[0].weather[0].icon
            temp = data.list[0].main.temp
            description = data.list[0].weather[0].description
            windSpeed = data.list[0].wind.speed
            humidity = data.list[0].main.humidity
            
            currentDateContainer.innerHTML = `
        <ul>
            <li class="li0">${cityName}</li>
            <li class="li11">${date}</li>
            <img src="http://openweathermap.org/img/wn/${icon}.png" >
            <li class="li2">temp: ${temp}</li>
            <li class="li3">description: ${description}</li>
            <li class="li4">windSpeed: ${windSpeed}</li>
            <li class="li5">humidity: ${humidity}</li>
        </ul>
            `
            
        cardContainerElement.innerHTML = ''
        for (let i = 0; i < 40; i = i + 8) {
            cityName = data.city.name
            date = data.list[i].dt_txt
            icon = data.list[i].weather[0].icon
            temp = data.list[i].main.temp
            description = data.list[i].weather[0].description
            windSpeed = data.list[i].wind.speed
            humidity = data.list[i].main.humidity
            const cardElement = document.createElement('div')
            cardElement.className = 'card'
            cardElement.innerHTML = `
        <ul>
            <li class="li0">${cityName}</li>
            <li class="li11">${date}</li>
            <img src="http://openweathermap.org/img/wn/${icon}.png" >
            <li class="li2">temp: ${temp}</li>
            <li class="li3">description: ${description}</li>
            <li class="li4">windSpeed: ${windSpeed}</li>
            <li class="li5">humidity: ${humidity}</li>
        </ul>
            `
            cardContainerElement.append(cardElement)
        }
    })
    
}
    
   

   
  