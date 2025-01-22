
  /*async function fetchCityData(cityName) {
    const url = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
    const headers = new Headers();
    headers.set('X-Api-Key', 'AwOxztTkm1VcnPYr3YNwag==tk5oBTh4eKxnZE5b');
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }
  fetchCityData('BENI MELLAL');*/
  const apiKey="167aba0344bc2572284206b1dcc73ce3";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox=document.querySelector(".search input");
  const searchbtn=document.querySelector(".search button");
  const weatherIcon=document.querySelector(".weather-icon");

  async function chckWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML= data.main.temp  +"°C";
    document.querySelector(".Humidité").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"KM/h";
    
    if(data.weather[0].main == "clouds"){
      weatherIcon.src="image/cloudy-day-2.svg"
    } 
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src="image/pluis.svg"

    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src="image/nuage.svg"

    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src="image/soleil.svg"

    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src="image/cloudy-night-2.svg"

    }}
  searchbtn.addEventListener("click" ,()=>{
    chckWeather(searchBox.value);

  })
  
  
  
