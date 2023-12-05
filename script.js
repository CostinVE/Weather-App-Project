const API_KEY = ""  // should be private
const cityForm = document.querySelector("#cityForm")

function fetchData(city="Timisoara") {
    const API_SRC = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
}

   fetch(API_SRC)
   .then((response) => response.json())
   .then((responseJSON) => console.log(responseJSON))

function cityFormSubmitHandler(event){
    event.preventDefault()

    const data = new FormData(event.target)
    const entries = Object.fromEntries(data.entries())
    
    fetchData(entries.city)
}

cityForm.addEventListener("submit", (event) => cityFormSubmitHandler(event))