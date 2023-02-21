// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "data.json");
//     request.setRequestHeader("Content-type", "application/json");
//     request.send()
//     btn.classList.add("red")
//     request.addEventListener("load", () => {
//         console.log(request.response);
//         const data = JSON.parse(request.response);
//         document.querySelector(".name").innerHTML = data.name;
//         document.querySelector(".age").innerHTML = data.age;

//     })
// })

const obj = {
    n: "n",
    a: "a"
}
const obj2 = {...obj};

obj.n = "ag"
console.log(obj);
console.log(obj2);