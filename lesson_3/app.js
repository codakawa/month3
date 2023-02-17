// document.querySelector(".cont").append(document.createElement("button"))
const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.classList.toggle("red");
    })
}) 
