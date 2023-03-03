async function fetchData(url) {
    const resp = await fetch(url);
    const _data = await resp.json();
    
    for(i of _data) {
        const card = document.createElement("div")
        card.innerHTML = `
            <img src="https://ichef.bbci.co.uk/live-experience/cps/800/cpsprodpb/15ACF/production/_128838788_e5a01113f178e7289a42df02838647ea119176420_206_3222_18132000x1125.jpg" alt="404">
            <h3>${i.title}</h3>
            <span>${i.body}</span>
        ` 
        card.setAttribute("class", "card")
        document.querySelector(".main").appendChild(card)
    }

}

fetchData("https://jsonplaceholder.typicode.com/posts")