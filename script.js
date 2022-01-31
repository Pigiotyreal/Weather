let weather = {
   "apikey": "cbcb53ade564e5f5f410dce29fb482c3",
   fetchWeather: function (city) {
       fetch(
       "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "units=imperial&appid="
        + this.apiKey
    )
       .then((response) => response.json())
       .then((data) => console.log(data));
   },
   displayWeather: function (data) {
    const { name } = data;
    const { icon, desciption } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name.icon,desciption,temp.humidity,humidity,speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "01n.png"
    document.querySelector(".description").innerText = desciption;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
});