console.log("page loaded...");

function message() {
    alert("Ninja was liked ");
}


function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

// function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
// }

function hide(el) {
    el.remove();
}

// let counterDisplayElem = document.querySelector('.counter-display');
// let counterMinusElem = document.querySelector('.counter-minus');
// let counterPlusElem = document.querySelector('.counter-plus');

// let count = 0;

// updateDisplay();


// counterPlusElem.addEventListener("click",()=>{
//     counter++;
//     updateDisplay();
// });

// counterMinusElem.addEventListener("click",()=>{
//     counter--;
//     updateDisplay();
// });

// function updateDisplay(){
//     counterDisplayElem.innerHTML = count;
// };
// add more functionality 