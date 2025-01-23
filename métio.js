
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
  const apiUrls="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

  const searchBox=document.querySelector(".search input");
  const searchbtn=document.querySelector(".search button");
  const weatherIcon=document.querySelector(".weather-icon");

  async function detailJours(name) {
    const responsee=await fetch(apiUrls + name + `&appid=${apiKey}`);
    var dataDetailJours =await responsee.json();
    console.log(dataDetailJours);
    
    /*document.querySelector(".temperaturee").innerHTML= dataDetailJours.list[0].main.temp  +"°C";
    document.querySelector(".Humidite").innerHTML=dataDetailJours.main.humidity +"%";
    document.querySelector(".wind1").innerHTML=dataDetailJours.wind.speed +"KM/h";*/
   
    
  }
  

  async function chckWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML= data.main.temp  +"°C";
    document.querySelector(".Humidité").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"KM/h";

    document.querySelector(".temperaturee").innerHTML= data.main.temp  +"°C";
    document.querySelector(".Humidite").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind1").innerHTML=data.wind.speed +"KM/h";
    
    
    if(data.weather[0].main == "nuages"){
      weatherIcon.src="image/nuage.svg"
    } 
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src="image/soleil.svg"

    }
    else if(data.weather[0].main == "Plui"){
      weatherIcon.src="image/pluis.svg"

    }
    else if(data.weather[0].main == "soleil"){
      weatherIcon.src="image/soleil.svg"

    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src="image/cloudy-night-2.svg"

    }}
  searchbtn.addEventListener("click" ,()=>{
    chckWeather(searchBox.value);
    detailJours(searchBox.value);
    temp();

  })
  const weekday = ["d","Lundi","Mardi","Mercredi","Jeudi","Vendredi"];
  function temp() {
    const date=new Date();
    let jour=weekday[date.getDay()];
    let lesJours = document.querySelectorAll('.jour');
    let found = false;
    lesJours.forEach((element) =>{
      if(element.innerHTML == jour){
        found = true;
        element.innerHTML = "aujourdui";
      }
    })
  }

  
