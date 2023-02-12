let left = 0;
let posY = 0;
let stopBox = false;
let stopNum = false;
let currentNum = 0;

function animation() {
    if(left < 450 && posY === 0) {
        left += 1;
        document.querySelector(".box").style.left = left+"px";
        // window.setTimeout(animation, 100)
    } else if (left === 450 && posY < 450) {
        posY += 1;
        document.querySelector(".box").style.top = posY+"px";
        // window.setTimeout(animation, 100)
    } else if (left > 0 && posY === 450) {
        left -= 1;
        document.querySelector(".box").style.left  = left+"px";
        // window.setTimeout(animation, 100)
    } else if (left === 0 && posY > 0) {
        posY -= 1;
        document.querySelector(".box").style.top = posY+"px";
    }

    if(!stopBox) {
        window.setTimeout(animation, 1)
    }
}

function numUp() {
    currentNum++;
    document.querySelector(".num").innerHTML = currentNum;
    if(!stopNum) {
        setTimeout(numUp, 100)
    }
}

document.querySelector(".startAnimBox").onclick = () => {
    stopBox = false;
    animation();
}
document.querySelector(".stopAnimBox").onclick = () => {
    stopBox = true;
}


document.querySelector(".startAnim").onclick = () => {
    stopNum = false;
    numUp()
}
document.querySelector(".stopAnim").onclick = () => {
    stopNum = true;
}


