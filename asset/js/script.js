console.log('boom')

let city = 'Havre'
let apikey = 'a7e67e2af18d8623bcd9e74c95572536'


let url = `https://api.openweathermap.org/data/2.5/forecast?lang=fr&units=metric&q=${city}&appid=${apikey}`

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
console.log(data.city.sunrise)
console.log(data.list[0].dt_txt)
console.log(data.list[0].main.temp)
console.log(data.list[0].weather[0].description)
console.log(data.list[0].main.humidity)
console.log(data.list[0].wind.speed)
console.log(data.list[0].visibility)

document.getElementById('interface').innerHTML = `<div class="weather-card">
            <div class="row justify-content-end">
                <div class="col-auto">
                    <div class="sunny-icon">
                        <i class="bi bi-sun-fill"></i>
                    </div>
                </div>
            </div>

            
            <h1 class="weather-title text-center mb-4">
            ${data.city.name}</h1>
            <div class="input-group mb-3">
                <input type="text" class="form-control"
                    placeholder="Enter Your City Name"
                    aria-label="City Name"
                    aria-describedby="basic-addon2">
                <button class="btn btn-primary weather-btn"
                        type="button" id="button-addon2">Avoir le temps</button>
            </div>
            <div id="weatherInfo">
                <div class="weather-icon text-center">
                    <i class="bi bi-cloud-sun"></i>
                </div>
                <div class="weather-info text-center">
                    <p>date: ${moment(data.list[0].dt_txt).format('L')}</p>
                    <p>horaire: ${moment(data.list[0].dt_txt).format('LT')}</p
                    <p>Temperature: ${data.list[0].main.temp}°C</p>
                    <p>Temps: ${data.list[0].weather[0].description}</p>
                    <p>Humidité: ${data.list[0].main.humidity}%</p>
                    <p>Vent: ${data.list[0].wind.speed} m/s</p>
                    <p>Visibilité: ${data.list[0].visibility}km</p>
                </div>
            </div>
        </div>
       </div>

`














    })
