const cityName = document.querySelector(".cityName")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")


document.querySelector(".btn").addEventListener("click", () => {
    const cityNameValue = cityName.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=e417df62e04d3b1b111abeab19cea714`)
    .then(response => response.json())
    .then(data => {
        city.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp - 273) + " &deg" + "c"
    })
})