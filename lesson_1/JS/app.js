// const str = prompt();

// const regExp = /n/;

// console.log(str.matchAll(regExp));


// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector("#phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const n = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

// phoneCheck.onclick = () => {
//     if(n.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = "green";
//     } else {
//         phoneResult.innerHTML = 'NOT OK'
//         phoneResult.style.color = "red";

//     }
// }


let num = 0;
const count = () => {
    num++
    console.log(num);
    if(num < 500) {
        count()
    }

}

count()

const peoples = {
    jon: {
        age: 15,
        parents: {
            nick: {
                age: 50
            },
            stella: {
                age: 48
            }
        }
    },
    dave: {
        age: 20,
        parents: {
            albert: {
                age: 55
            }
        }

    },
    cuk: {
        age: 30,
        parents: {
            alan: {
                age: 67
            },
            aigerim: {
                age: 51
            }
        }

    }
}

// console.log(peoples);

// const parentList = (obj) => {
//     if(obj.parents) {
//         for(let key in obj.parents) {
//             console.log(key);
//             // console.log(obj.parents{key});
//         }
//     } else {
//         console.log("not parents");
//     }
// }

// // parentList(peoples.jon)

// for (let key in peoples) {
//     parentList(peoples[key])
// }

