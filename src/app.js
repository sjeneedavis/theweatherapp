function displayTemperature(response) {
   console.log (response);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
let humidityElement= document.querySelector("#humidity");
let windElement= document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey= "15fc459ac3739d95955d19e57ff4d582";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);


