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
function morning(currentHour) {
  if (currentHour < 11) {
    return "AM";
  } else {
    return "PM";
  }
}
let midDay = morning(currentHour);
let fullDate = `${day}, ${month} ${currentDate}`;
let fullTime = `${hour}:${minute} ${midDay}`;
let today = document.querySelector(".today");
today.innerHTML = `${fullDate}`;
let time = document.querySelector(".time");
time.innerHTML = `${fullTime}`;
let apiKey = "16f449ba2c6eb2958ad3c1f42a8facfa";
function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-input");
  if (input.value) {
    let city = document.querySelector(".current-city");
    city.innerHTML = `${input.value}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showTemperatureCity);
  } else {
    alert("Please type a city");
  }
}
function showTemperatureCity(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(".current-weather");
  temperatureElement.innerHTML = `${temperature}°`;
  let windspeed = Math.round(response.data.wind.speed);
  let windspeedElement = document.querySelector("#windspeed-number");
  windspeedElement.innerHTML = `${windspeed}`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity-number");
  humidityElement.innerHTML = `${humidity}`;
  let description = response.data.weather[0].description;
  let descriptionElement = document.querySelector(".note");
  descriptionElement.innerHTML = `${description}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
