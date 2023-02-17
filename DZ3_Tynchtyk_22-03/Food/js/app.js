const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");
const modal = document.querySelector(".modal");
const modalBtns = document.querySelectorAll(".btn_dark, .btn_white")
const closeModalBtn = document.querySelector(".modal__close");
let currentTab = 0;

const updateTabContent = (i = 0) => {
    tabContent.forEach(item => {
        item.style.display = "none";
    })
    tabs.forEach(item => {
        item.classList.remove("tabheader__item_active")
    })

    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}

const autoUpdTab = () => {
    currentTab++
    if(currentTab === 4) {
        currentTab = 0
    };
    updateTabContent(currentTab)
}

let updTab = setInterval(autoUpdTab, 3000)

tabs.forEach((item, i) => {
    item.onclick = () => {
        currentTab = i;
        updateTabContent(currentTab);
        clearInterval(updTab);
        updTab = setInterval(autoUpdTab, 3000)
    }
    
})

updateTabContent()

// ------------------------------------

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide")
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show")
    document.body.style.overflow = ''
}

modalBtns.forEach((item) => {
    item.onclick = () => openModal()
})

closeModalBtn.onclick = () => closeModal()

modal.onclick = (e) => {
    if(e.target === modal) {
        closeModal()
    }
}
window.onkeydown = (e) => {
    if(e.key === "Escape") {
        closeModal()
    }
}

window.addEventListener('scroll', () => {
    let currentHeight = document.documentElement.scrollHeight - window.scrollY;

    if(currentHeight === document.documentElement.clientHeight) {
        openModal();
    }
})

setTimeout(openModal, 3000)

// ------------------------------------

const deadLine = "2023-02-18 15:00"


function getTimeRemaining(deadLine) {
    const time = new Date(deadLine) - new Date(),
        days = Math.floor((time / (1000*60*60*24))),
        hours = Math.floor((time / (1000*60*60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    if(time <= 0) {
        return false
    } else {
        return {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

}

function setClock(el, deadLine) {
    const element = document.querySelector(el),
        days = element.querySelector("#days"),
        hours = element.querySelector("#hours"),
        minutes = element.querySelector("#minutes"),
        seconds = element.querySelector("#seconds")

    setInterval(updateClock, 1000)
    updateClock();

    function updateClock() {
        const time = getTimeRemaining(deadLine);
        if(!time) {
            days.innerHTML = setZero(0);
            hours.innerHTML = setZero(0);
            minutes.innerHTML = setZero(0);
            seconds.innerHTML = setZero(0);
        } else {
            days.innerHTML = setZero(time.days);
            hours.innerHTML = setZero(time.hours);
            minutes.innerHTML = setZero(time.minutes);
            seconds.innerHTML = setZero(time.seconds);
        }
        
        // setInterval(updateClock, 1000)
    }

    function setZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }
}

setClock(".timer", deadLine)

// -----------------------------------

