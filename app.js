const key = "4d7b7fc6f9d244dfb21182039252804";
const url = "http://api.weatherapi.com/v1/current.json";
// const city = "Vilnius";
const temp = document.querySelector("#temp");
const cityInput = document.querySelector("#city-input");
const cityName = document.querySelector("#city-name");
const date = (document.querySelector("#date").textContent =
  getFormattedToday());
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

async function getWeather(city) {
  const response = await fetch(`${url}?key=${key}&q=${city}`);
  const data = await response.json();
  return data;
  console.log(data);
}

function handleWeatherData(data) {
  const tempC = data.current.temp_c;
  const iconUrl = data.current.condition.icon;
  const humidityValue = data.current.humidity;
  const windSpeed = data.current.wind_kph;
  const windDirection = data.current.wind_dir;

  // temp.innerHTML = `${tempC}°C`;

  humidity.innerHTML = `${humidityValue}%`;
  wind.innerHTML = `${windSpeed} km/h ${windDirection}`;
  icon.src = iconUrl;
  cityName.textContent = data.location.name;
}

getWeather(cityInput.value).then((data) => {
  handleWeatherData(data);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  // const city = "Vilnius";
  getWeather(city).then((data) => {
    handleWeatherData(data);
    console.log(e);
  });
});

function getFormattedToday() {
  const date = new Date();
  const day = date.getDate();
  const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );

  function getOrdinal(n) {
    if (n >= 11 && n <= 13) return n + "th";
    switch (n % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
      default:
        return n + "th";
    }
  }

  return `${weekday}, ${month} ${getOrdinal(day)}`;
}

function getWeekdayName(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

console.log(getWeekdayName("2025-05-04")); // Output: "Tuesday"
