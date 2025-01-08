const input_box = document.querySelector(".input-box");
const btn_search = document.querySelector(".btn-search");
const img = document.querySelector(".img");
const temperature = document.querySelector(".temperature");
const des = document.querySelector(".des");
const humidty = document.querySelector(".humidty");
const wind_speed = document.querySelector(".wind-speed");

async function checkWeather(city) {
  const API_KEY = "b4f78c0675ade111984535335dbd530f";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  try {
    const response = await fetch(URL);
    console.log(response);
    const fetchWeather = await response.json();
    console.log(fetchWeather); // Successfully fetched data
    const storeImage = fetchWeather.weather[0].main;
    switch (storeImage) {
      case "Clouds":
        img.src = "./img/clouds.png";
        break;
      case "Clear":
        img.src = "./img/clear.png";
        break;
      case "Rain":
        img.src = "./img/rain.png";
        break;
      case "Mist":
        img.src = "./img/mist.png";
        break;
      case "Snow":
        img.src = "./img/snow.png";
        break;
      default:
        img.src = "./img/Snow.png";
    }
    temperature.innerHTML = `${(fetchWeather.main.temp - 273.15).toFixed(
      2
    )}<sup>°C</sup>`;
    humidty.innerHTML = `${fetchWeather.main.humidity} %`;
    wind_speed.innerHTML = `${fetchWeather.wind.speed} Km/h`;
    des.innerHTML = `<p>${fetchWeather.weather[0].description}</p>`;
    // console.log(fetchWeather);

    // Check for API error response
    if (fetchWeather.cod !== 200) {
      console.log("Hello");

      console.log(`Error: ${fetchWeather.message}`);
      return;
    }
  } catch (error) {
    img.src = "./img/not-found.png";
    temperature.innerHTML = `0<sup>°C</sup>`;
    humidty.innerHTML = `០​ %`;
    wind_speed.innerHTML = `0 Km/h`;
    des.innerHTML = `<p>Can't find ${city}</p>`;
    console.log("Error fetching data: " + error);
  }
}

input_box.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    btn_search.click();
  }
});
btn_search.addEventListener("click", () => {
  checkWeather(input_box.value.trim());
});
