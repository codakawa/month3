const som = document.querySelector(".som")
const usd = document.querySelector(".usd")

// som.addEventListener("input", () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.addEventListener("load", () => {
//         const response = JSON.parse(request.response);

//         usd.value = (som.value / response.usd).toFixed(2);
//     })
// })

function convert(elem, target, isTrue) {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response);
            if(isTrue) {
                target.value = (elem.value / response.usd).toFixed(2);
            } else {
                target.value = (elem.value * response.usd).toFixed(2);
            }
            elem.value === "" && (target.value = '')
        }
    }
}

convert(som, usd, true)
convert(usd, som, false)