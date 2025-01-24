const apiKey = "167aba0344bc2572284206b1dcc73ce3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrls = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function detailJours(name) {
  const responsee = await fetch(apiUrls + name + `&appid=${apiKey}`);
  const dataDetailJours = await responsee.json();
  console.log(dataDetailJours);

  for (let i = 1; i <= 4; i++) {
    const dayData = dataDetailJours.list[i * 8]; 
    const dayElement = document.querySelector(`.day:nth-child(${i})`);

    dayElement.querySelector(".temperature").innerHTML = dayData.main.temp + "°C";
    dayElement.querySelector(".Humidite").innerHTML = dayData.main.humidity + "%";
    dayElement.querySelector(".wind").innerHTML = dayData.wind.speed + " KM/h";

    
    const weatherType = dayData.weather[0].main;
    const iconElement = dayElement.querySelector("img");

    if (weatherType === "Clouds") {
      iconElement.src = "image/nuage.svg";
    } else if (weatherType === "Clear") {
      iconElement.src = "image/clair.svg";
    } else if (weatherType === "Rain") {
      iconElement.src = "image/pluis.svg";
    } else if (weatherType === "Sunny") {
      iconElement.src = "image/soleil.svg";
    } else if (weatherType === "Mist") {
      iconElement.src = "image/cloudy-night-2.svg";
    }
  }
}

async function chckWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

 
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
  document.querySelector(".Humidité").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "KM/h";

 
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "image/nuage.svg";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "image/clair.svg";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "image/pluis.svg";
  } else if (data.weather[0].main === "Sunny") {
    weatherIcon.src = "image/soleil.svg";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "image/cloudy-night-2.svg";
  }
}
//fonction afficher les jours
function generateForecastDays() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const forecastContainer = document.querySelector(".forecast");

 
  forecastContainer.innerHTML = "";

  
  const today = new Date();
  const dayIndex = today.getDay(); 

  for (let i = 1; i <= 4; i++) {
    const nextDayIndex = (dayIndex + i) % 7; 
    const nextDay = days[nextDayIndex];

    const dayElement = document.createElement("div");
    dayElement.classList.add("day");

    dayElement.innerHTML = `
      <h4 class="jour">${nextDay}</h4>
      <img src="image/nuage.svg" alt="${nextDay}" class="weather-icon">
      <p class="temperature"></p>
      <p class="Humidite"></p>
      <p class="wind"></p>
    `;

    forecastContainer.appendChild(dayElement);
  }
}

searchbtn.addEventListener("click", () => {
  const city = searchBox.value;
  chckWeather(city);
  detailJours(city);
  generateForecastDays();
});
