const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {

// ------------------- capittalize -------------------------

    function capittalize(str) {
        return str.replace(/(?:^|\s)\S/g, function(a) {
            return a.toUpperCase();
        });
    }

    
// ------------------------ request -------------------------
    
    const request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    
    // ----------------------------- add users -----------------------
    
    request.addEventListener("load", () => {
        const data = JSON.parse(request.response);

        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        document.body.appendChild(wrapper);

        for(user of data) {
            const div = document.createElement("div");
            div.classList.add("user");
            const name = capittalize(user.name)
            div.innerHTML = `
                <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="404">
                <h2>${name}</h2>
                <span>${user.age}</span>
            `
            wrapper.appendChild(div)
        }
    })


//------------------------------------ style -------------------------

    const style = document.createElement("style");
    style.innerHTML = `
        .user img {
            width: 200px;
            
        }
        .wrapper {
            display: flex;
            justify-content: space-between;
        }
        .user {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        .btn {
            display: none;
        }
    `
    document.head.appendChild(style);
        
})
