let now = new Date();
let h5 = document.querySelector("h5");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
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
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

h5.innerHTML = `${day}, ${month} ${date} ${hours}:${minutes}`;

function showWeatherCondition(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}
function searchCity(event) {
  event.preventDefault();
  let apiKey = "9295d8ec3cd9edc80b455a3441c59e8d";
  let city = document.querySelector("#search-form-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);
