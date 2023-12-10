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



const API_KEY = "61271d54ff6709e648e493f1e3e4781f"  // should be private
const API_SRC = "http://api.openweathermap.org/data/2.5/forecast?units=metric&q=Paris"



async function checkWeather(){
  const response = await fetch(API_SRC + `&appid=${API_KEY}`)
  var data = await response.json()

  console.log(data)

  document.querySelector(".city").innerHTML = data.city.name
  document.querySelector('.temp').innerHTML = Math.round(data.list[0].main.temp) + "°C"
  document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + " %"

  // Today
  document.querySelector(".max_temp").innerHTML = Math.round(data.list[0].main.temp_max) + "°"
  document.querySelector(".min_temp").innerHTML = Math.round(data.list[0].main.temp_min) + "°"

  // Tommorow

  document.querySelector(".max_temp1").innerHTML = Math.round(data.list[5].main.temp_max) + "°"
  document.querySelector(".min_temp1").innerHTML = Math.round(data.list[5].main.temp_min) + "°"

  // +2 days
  document.querySelector(".max_temp2").innerHTML = Math.round(data.list[13].main.temp_max) + "°"
  document.querySelector(".min_temp2").innerHTML = Math.round(data.list[13].main.temp_min) + "°"

  // +3 days
  document.querySelector(".max_temp3").innerHTML = Math.round(data.list[13].main.temp_max) + "°"
  document.querySelector(".min_temp3").innerHTML = Math.round(data.list[13].main.temp_min) + "°"

  // +4 days
  document.querySelector(".max_temp4").innerHTML = Math.round(data.list[13].main.temp_max) + "°"
  document.querySelector(".min_temp4").innerHTML = Math.round(data.list[13].main.temp_min) + "°"

  // +5 days
  document.querySelector(".max_temp5").innerHTML = Math.round(data.list[13].main.temp_max) + "°"
  document.querySelector(".min_temp5").innerHTML = Math.round(data.list[13].main.temp_min) + "°"

}
checkWeather()

