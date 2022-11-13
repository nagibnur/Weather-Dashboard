const searchInput = document.querySelector('.input')
const searchBtn = document.querySelector('.btn')

const Url =
'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=15647aebbea9c6fe13b3adcfad1c1793'

fetch(Url)
.then(function (response) {
  return response.json();
})
.then(function (data) {
    console.log(data);
})