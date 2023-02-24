const somEl = document.querySelector(".som")
const usdEl = document.querySelector(".usd")
const euroEl = document.querySelector(".euro")

function convert(elem, target, target2) {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const response = JSON.parse(request.response);
            const usdC = response.usd;
            const euroC = response.euro;

            if(elem === somEl) {
                target.value = (elem.value / usdC).toFixed(2);
                target2.value = (elem.value / euroC).toFixed(2);
            } else if(elem === usdEl) {
                target.value = (elem.value * usdC).toFixed(2);
                target2.value = ((elem.value * usdC) / euroC).toFixed(2);
            } else {
                target.value = (elem.value * euroC).toFixed(2);
                target2.value = ((elem.value * euroC) / usdC).toFixed(2);
            }

            if(elem.value === "") {
                target.value = "";
                target2.value = "";
            }
        }
    }
}

convert(somEl, usdEl, euroEl)
convert(usdEl, somEl, euroEl)
convert(euroEl, somEl, usdEl)