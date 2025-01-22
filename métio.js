
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
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
  async function chckWeather(){
    const response=await fetch(apiUrl +`&appid=${apiKey}`);
    var data =await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=data.name +"°C";
    document.querySelector(".Humidité").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"KM/h";

  }
  chckWeather();

  
