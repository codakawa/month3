const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 0

function updData(data, num) {
    if(num < 0) {
        count = num+=1
    } else if(num >= 200) {
        count = num-=1
    } else {
        document.querySelector(".card").innerHTML = `
            <img src="${data[num].url}" alt="404">
        `
    }
}

async function fetchImg() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos")
    const _data = await resp.json()
    btnNext.onclick = () => {
        count++
        updData(_data, count)
    }
    btnPrev.onclick = () => {
        count--
        updData(_data, count)
    }
    const div = document.createElement('div')
    div.setAttribute('class', 'card')
    block.append(div)
    
    updData(_data, count)
}

async function fetchData(url) {
    const resp = await fetch(url);
    const _data = await resp.json();
    
    for(i of _data.slice(0, 200)) {
        const img = document.createElement("div")
        img.innerHTML = `
            <img src="${i.url}" alt="404">
        ` 
        img.setAttribute("class", "img")
        document.querySelector(".main").appendChild(img)
    }

}

fetchData("https://jsonplaceholder.typicode.com/photos")
fetchImg()
