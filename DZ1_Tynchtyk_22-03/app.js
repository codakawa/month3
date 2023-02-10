const input = document.querySelector("#input");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector(".result");

checkBtn.onclick = () => {
    const str = input.value.toString();
    const inputArr = str.split("");
    console.log(inputArr);
}
const regExp = /^\d{14}$/

checkBtn.onclick = () => {
    const str = input.value.toString();
    const inputArr = str.split("");

    if(regExp.test(input.value) && inputArr[0] <= 2 && inputArr[0] > 0) {
        result.innerHTML = 'OK'
        result.style.color = "green";
    } else {
        result.innerHTML = 'NOT OK'
        result.style.color = "red";

    }
}


let leftStyle = 0;
function animation() {
    if(leftStyle <= 450) {
        document.querySelector(".box").style.left = leftStyle+"px";
        leftStyle += 5;
        window.setTimeout(animation, 100)
    } else {
        document.querySelector(".box").style.background = "green";
    }
}

document.querySelector(".startAnim").onclick = () => {
    animation();
}