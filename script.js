fetch('http://api.openweathermap.org/data/2.5/forecast?id=703448&appid=6bd01b54787d2cd00136d465f7bae07e')
  .then(function (resp) { return resp.json() })
  .then(function (data) {
    console.log(data)

    document.querySelector('.location').textContent = data.city.name
    document.querySelector('.weather-temp').textContent = ((data.list["0"].main.temp - 273) | 0) + '°C'
    document.querySelector('.date-day').textContent = data.list["0"].dt_txt
    document.querySelector('.weather-desc').textContent = data.list["0"].weather["0"].description



  })
  .catch(function () {

  })