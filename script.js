let weather = {
   "apikey": "7917d0aff3be19359224317b8eabac0f",
   fetchWeather: function (city) {
       fetch(
       "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=imperial&appid="
        + this.apikey
    )
       .then((response) => response.json())
       .then((data) => this.displayWeather(data))
       .catch((err)=> console.log(this));
   },
   displayWeather: function (data) {
    console.log(data)
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
