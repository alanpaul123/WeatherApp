const userInput = document.getElementById("userInput");
const degree = document.querySelector(".degN");
const feels = document.querySelector(".feelLike");
const place = document.querySelector(".place");
const placeDate = document.querySelector(".placeDate");
const pName = document.querySelector(".pName");
const pHum = document.querySelector(".pHum");
const pWind = document.querySelector(".pWind");
const pPress = document.querySelector(".pPress");
const p2 = document.querySelector(".p2");
const p1 = document.querySelector(".p1");
const weathSub = document.querySelector(".weatherSub");
const wrong = document.querySelector(".wrong");
const wrongImg = document.querySelector(".wrongImg");
const displayWeather = document.querySelector(".displayWeather");
const weatherImg = document.querySelector(".weatherImg");
const btn = document.querySelector(".btn");

const getWeather = async function () {
  if (userInput.value != "") {
    try {
      // displayWeather.style.backgroundImage =
      //   "url(https://img.freepik.com/free-vector/gorgeous-clouds-background-with-blue-sky-design_1017-25501.jpg)";

      wrong.style.display = "none";
      weathSub.style.display = "block";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
      );
      const data = await response.json();
      degree.textContent = data.main.temp;
      feels.textContent = data.main.feels_like;
      place.textContent = data.name;
      pName.textContent = data.sys.country;
      pHum.textContent = data.main.humidity;
      pWind.textContent = data.wind.speed;
      pPress.textContent = data.main.pressure;
      p1.textContent = data.weather[0].description;
      let weatherState = data.weather[0].main;

      if (weatherState == "Clouds") {
        weatherImg.src = "image/clouds.png";
      } else if (weatherState == "Haze") {
        weatherImg.src = "image/haze.png";
      } else if (weatherState == "Rain") {
        weatherImg.src = "image/rain.png";
      } else if (weatherState == "Snow") {
        weatherImg.src = "image/snow.png";
      } else if (weatherState == "Clear") {
        weatherImg.src = "image/clear.png";
      } else if (weatherState == "Smoke") {
        weatherImg.src = "image/smoke.png";
      } else {
        weatherImg.src = "image/cold.png";
      }

      console.log(data);
    } catch (err) {
      // p2.textContent = "Enter Valid Name ";
      weathSub.style.display = "none";

      wrong.style.display = "block";
      // displayWeather.style.backgroundImage =
      //   "url(https://i0.wp.com/www.kridha.net/wp-content/uploads/2021/01/Landscape-Vector-Illustration-Background.jpg?fit=960%2C540&ssl=1)";
    }
  } else {
    alert("Enter the valid Data");
  }
};

placeDate.textContent = new Date();
// console.log(new Date());
