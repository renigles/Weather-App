function morning(currentHour) {
  if (currentHour < 11) {
    return "AM";
  } else {
    return "PM";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  let newCity = input.value
  if (newCity) {
    let city = document.querySelector(".current-city");
    city.innerHTML = `${newCity}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperatureCity);
  } else {
    alert("Please type a city");
  }
}
function search(start){
let city = document.querySelector(".current-city");
    city.innerHTML = `${start}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${start}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperatureCity);
}
function showTemperatureCity(response) {
  metricWeather = response.data.main.temp;
  let temperature = Math.round(metricWeather);
  let temperatureElement = document.querySelector(".current-weather");
  temperatureElement.innerHTML = `${temperature}`;
  let windspeed = Math.round(response.data.wind.speed);
  let windspeedElement = document.querySelector("#windspeed-number");
  windspeedElement.innerHTML = `${windspeed}`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity-number");
  humidityElement.innerHTML = `${humidity}`;
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector(".note");
  descriptionElement.innerHTML = `${description}`;
  icon = response.data.weather[0].icon;
  lat = response.data.coord.lat
  lon = response.data.coord.lon
  let iconElement = document.querySelector(".current-icon")
  iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${icon}@2x.png`);
let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
axios.get(apiURL).then(displayForecast);
}

function displayForecast(response) {
  let forecast = response.data.daily;
let forecastElement = document.querySelector(".forecast");
let forecastHTML = `<div class="row">`;
forecast.forEach(function(forecastDay, index){ 
  if(index < 6){
forecastHTML = forecastHTML + `<div class = "col-2 forecast-each" ><div class = "forecast-text-day">${formatDay(forecastDay.dt)}</div>
<div ><img class= "forecast-icon" src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="${forecastDay.weather[0].main}" width = 42px></div>
<div class = "forecast-text-temperature" ><span class= "high-forecast">${Math.round(forecastDay.temp.max)}°</span><span class= "low-forecast">  ${Math.round(forecastDay.temp.min)}°</span></div>
`;
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
}});
} 
function formatDay (timestamp) {
  let date = new Date (timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return days[day];
}
let now = new Date();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentDate = now.getDate();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11"
];
let minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59"
];
let month = months[now.getMonth()];
let day = days[now.getDay()];
let hour = hours[currentHour];
let minute = minutes[currentMinute];
let units = "metric";
let metricWeather = null;
let icon = null;
let lon = null;
let lat = null;
let midDay = morning(currentHour);
let fullDate = `${day}, ${month} ${currentDate}`;
let fullTime = `${hour}:${minute} ${midDay}`;
let today = document.querySelector(".today");
today.innerHTML = `${fullDate}`;
let time = document.querySelector(".time");
time.innerHTML = `${fullTime}`;
let apiKey = "16f449ba2c6eb2958ad3c1f42a8facfa";
search ("new york")
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


