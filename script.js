console.log("page loaded...");

function message() {
    alert("Ninja was liked " + add() + " time")
    console.log(message + 1);
}


function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

function add() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
}

function hide(el) {
    el.remove();
}

// It is used to import collect.js library
import collect from 'collect.js';

const num = [0 , 1 , 2 , 3 , 4, 5 , 6, 7, 8, 9]; 
const data = collect(num);
const total = data.count();

console.log('Total number of elements are:', {total});
// add more functionality 