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
// add more functionality 