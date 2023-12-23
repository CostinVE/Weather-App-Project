// const API_KEY = "61271d54ff6709e648e493f1e3e4781f"  // should be private
// const cityForm = document.querySelector("#cityForm")

//    function fetchData(city='Bucharest'){

//     const API_SRC= `http://api.openweathermap.org/data/2.5/forecast?q=Bucharest&appid=61271d54ff6709e648e493f1e3e4781f&units=metric`

//     fetch(API_SRC)
//       .then((response) => response.json())
//       .then((responseJSON) => console.log(responseJSON))

//       var data = await responseJSON

//       console.log(data.wind.speed)

//  }

//   console.log(data.wind.speed)

//    function cityFormSubmitHandler (event) {
//      event.preventDefault() // nu da submit

//    //  const data = new FormData(event.target)
//    //  const entries = Object.fromEntries(data.entries())

//    const cityInput = document.querySelector('city').value

//     fetchData(cityInput.value)
//    }

//    cityForm.addEventListener("submit", (event) => cityFormSubmitHandler(event));

//    console.log(data.rain)

// function cityFormSubmitHandler(event){

//     const data = new FormData(event.target)
//     const entries = Object.fromEntries(data.entries())

//     fetchData(entries.city)
// }

// cityForm.addEventListener("submit", (event) => cityFormSubmitHandler(event))

// console.log(responseJSON)

// Youtube tutorial

const API_KEY = "61271d54ff6709e648e493f1e3e4781f"; // should be private
const API_SRC =
  "http://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBTN = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(API_SRC + city + `&appid=${API_KEY}`);
  var data = await response.json();

  const sunriseTimestamp = data.city.sunrise;
  const timezone = data.city.timezone;

  const sunriseData = new Date(sunriseTimestamp * 1000 + timezone * 1000);

  let hours = sunriseData.getHours();
  let minutes = sunriseData.getMinutes();
  const formattedSunrise = `${hours}:${minutes}`;

  const sunsetTimestamp = data.city.sunset;

  const sunsetData = new Date(sunsetTimestamp * 1000 + timezone * 1000);

  let hours2 = sunsetData.getHours();
  let minutes2 = sunsetData.getMinutes();
  const formattedSunset = `${hours2}:${minutes2}`;

  console.log(data);

  document.querySelector(".city").innerHTML = data.city.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.list[0].main.feels_like) + "°C";
  document.querySelector(".wind").innerHTML =
    "Wind: " + data.list[0].wind.speed + " km/h";

  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.list[0].main.humidity + "%";
  document.querySelector(".sunset").innerHTML = "Sunrise: " + formattedSunrise;
  document.querySelector(".sunset1").innerHTML = "Sunset: " + formattedSunset;


// Hourly Forecast
// Humid

  document.querySelector(".currentHumid").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[0].main.humidity} %</p>`;

  document.querySelector(".currentHumid1").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[1].main.humidity} %</p>`;
  
  document.querySelector(".currentHumid2").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[2].main.humidity} %</p>`;


  document.querySelector(".currentHumid3").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[3].main.humidity} %</p>`;

  document.querySelector(".currentHumid4").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[4].main.humidity} %</p>`;


  document.querySelector(".currentHumid5").innerHTML =
    `<i class="fa-solid fa-droplet" style="color:  #ffffff; font-size: larger; margin-left: 4px"></i>` +
    `<p style="color: #ffffff">${data.list[5].main.humidity} %</p>`;

// Temperature
 document.querySelector('.currentTemp').innerHTML = Math.floor(data.list[0].main.feels_like) + "°C"

 document.querySelector('.currentTemp1').innerHTML = Math.floor(data.list[1].main.feels_like) + "°C"

 document.querySelector('.currentTemp2').innerHTML = Math.floor(data.list[2].main.feels_like) + "°C"

 document.querySelector('.currentTemp3').innerHTML = Math.floor(data.list[3].main.feels_like) + "°C"

 document.querySelector('.currentTemp4').innerHTML = Math.floor(data.list[4].main.feels_like) + "°C"

 document.querySelector('.currentTemp5').innerHTML = Math.floor(data.list[5].main.feels_like) + "°C"

//  Hour-forecast


const jsonData = {
  data: [
      [data.list[0].dt_txt],
      [data.list[1].dt_txt],
      [data.list[2].dt_txt],
      [data.list[3].dt_txt],
      [data.list[4].dt_txt],
      [data.list[5].dt_txt],
      // ... more dynamic lists
  ]
};


document.querySelector('.currentHour').innerHTML = jsonData.data[0][0].slice(11,16)

document.querySelector('.currentHour1').innerHTML = jsonData.data[1][0].slice(11,16)

document.querySelector('.currentHour2').innerHTML = jsonData.data[2][0].slice(11,16)

document.querySelector('.currentHour3').innerHTML = jsonData.data[3][0].slice(11,16)

document.querySelector('.currentHour4').innerHTML = jsonData.data[4][0].slice(11,16)

document.querySelector('.currentHour5').innerHTML = jsonData.data[5][0].slice(11,16)

// Previous attempt for hour formatting


//  }
//   if( hour1 = data.list[0].dt_txt){

//  document.querySelector('.currentHour').innerHTML = hour1.slice(11,13)
//   } else if(hour1 = data.list[1].dt_txt){
//     document.querySelector('.currentHour1').innerHTML = hour1.slice(11,13)
//   }
//   else{

//   }

 
// data: Array(2)
//   0: Array(1)
//   0: "2023-12-23 00:00:00"
//   lenght: 1


  // Today
  document.querySelector(".max_temp").innerHTML =
    Math.round(data.list[0].main.temp_max) + "°";
  document.querySelector(".min_temp").innerHTML =
    Math.round(data.list[0].main.temp_min) + "°";

  // Tommorow

  document.querySelector(".max_temp1").innerHTML =
    Math.round(data.list[5].main.temp_max) + "°";
  document.querySelector(".min_temp1").innerHTML =
    Math.round(data.list[5].main.temp_min) + "°";

  // +2 days
  document.querySelector(".max_temp2").innerHTML =
    Math.round(data.list[13].main.temp_max) + "°";
  document.querySelector(".min_temp2").innerHTML =
    Math.round(data.list[13].main.temp_min) + "°";

  // +3 days
  document.querySelector(".max_temp3").innerHTML =
    Math.round(data.list[22].main.temp_max) + "°";
  document.querySelector(".min_temp3").innerHTML =
    Math.round(data.list[22].main.temp_min) + "°";

  // +4 days
  document.querySelector(".max_temp4").innerHTML =
    Math.round(data.list[30].main.temp_max) + "°";
  document.querySelector(".min_temp4").innerHTML =
    Math.round(data.list[30].main.temp_min) + "°";

  // +5 days
  document.querySelector(".max_temp5").innerHTML =
    Math.round(data.list[38].main.temp_max) + "°";
  document.querySelector(".min_temp5").innerHTML =
    Math.round(data.list[38].main.temp_min) + "°";

  const weatherNOW = data.list[0].weather[0].main;

  function hideSlides() {
    var weatherMain = data.list[0].weather[0].main;
  
    if (weatherMain !== 'Rain') {
      var elementsToHide = document.getElementsByClassName("RainAlert");
  
      for (var i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
    }
  }
  
  hideSlides();
  
  // const dtTime= data.list[0].dt_txt
  // const currentHour = dtTime.slice(11, 13)

  // console.log(currentHour)

  var image = document.createElement("img");
  image.src = "assets/cloudy.png";
  image.setAttribute("height", "120");
  image.setAttribute("width", "120");
  image.setAttribute("alt", "weather...");

  var image2 = document.createElement("img");
  image2.src = "assets/rain.png";
  image2.setAttribute("height", "120");
  image2.setAttribute("width", "120");
  image2.setAttribute("alt", "weather...");

  var sunny = document.createElement("img");
  sunny.src = "assets/sunny.png";
  sunny.setAttribute("height", "120");
  sunny.setAttribute("width", "120");
  sunny.setAttribute("alt", "weather...");

  var snow = document.createElement("img");
  snow.src = "assets/snow.png";
  snow.setAttribute("height", "120");
  snow.setAttribute("width", "120");
  snow.setAttribute("alt", "weather...");


  // var night = document.createElement("img")
  // night.src = 'assets/crescent-moon.png'
  // night.setAttribute("height", "120")
  // night.setAttribute("width", "120")
  // night.setAttribute("alt","weather...")

  function changeBackgroundColor(weatherNOW) {
    var themeDiv = document.getElementById("theme");
    let rain = false;
    let cloudy = false;

    // if(currentHour > 18 & rain === false){
    //   themeDiv.style.backgroundColor = '#1d0c75';
    //   var header = document.querySelector('.header')
    //   header.innerHTML= ''
    //   header.appendChild(night)

    // }

    if (weatherNOW === "Clear") {
      themeDiv.style.backgroundColor = "#4f83f3";
      var header = document.querySelector(".header");
      header.innerHTML = "";
      header.appendChild(sunny);
    } else if (weatherNOW === "Rain") {
      console.log("rain is here");
      rain = true;
      themeDiv.style.backgroundColor = "#777487";
      var header = document.querySelector(".header");
      header.innerHTML = "";
      header.appendChild(image2);
    } else if (weatherNOW === "Clouds") {
      cloudy = true;
      console.log("it's cloudy");
      themeDiv.style.backgroundColor = "#4f83f3";
      var header = document.querySelector(".header");
      header.innerHTML = "";
      header.appendChild(image);
    }  else if (weatherNOW === "Snow") {
      console.log("Snowing");
      themeDiv.style.backgroundColor = "#bac9d9";
      var header = document.querySelector(".header");
      header.innerHTML = "";
      header.appendChild(snow);
      
    }
    else {
    }

    console.log(data.list[0].weather[0].main);
  }

  changeBackgroundColor(weatherNOW);
}

searchBTN.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
