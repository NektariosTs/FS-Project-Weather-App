const apiKey = "9d67d7611748bf22875b84863a51a1ed";
    const button = document.getElementById("btn");
        
    button.addEventListener("click", function(){
        const cityName = document.getElementById("cityInput").value
        console.log(cityName);
        fetchWeatherData(cityName , apiKey)
    }) 

     function fetchWeatherData(city , api){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const temperature = document.getElementById("temp")
        temperature.innerHTML = "temperature : " + data.main.temp;
        const location = document.getElementById("location")
        location.innerHTML = "location : " + data.name;
        const weather = document.getElementById("weather")
        weather.innerHTML = "weather : " + data.weather[0].description;
    })
    .catch((error) =>{
        console.log(error)
    })
}