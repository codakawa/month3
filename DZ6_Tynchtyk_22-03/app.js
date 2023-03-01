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
            <h2>${data[num].title}</h2>
            <span>${data[num].id}</span>
            <h3>${data[num].completed}</h3>
        `
    }
}

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => {
    btnNext.onclick = () => {
        count++
        updData(data, count)
    }
    btnPrev.onclick = () => {
        count--
        updData(data, count)
    }
    const div = document.createElement('div')
    div.setAttribute('class', 'card')
    block.append(div)
    
    updData(data, count)
})

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => console.log(data))