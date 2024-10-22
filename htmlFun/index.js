console.log("we made it to the javascript file!!! hooray! ")

let counterPTag = document.querySelector("#counter");
let clickMeButton = document.querySelector("button");
let setCountToZero = document.querySelector("#zeroer");


let incrementFunction = () => {
    count++;
    console.log("the count!!", count)
    counterPTag.innerHTML = count;
}

let setToZero = () => {
    count = 0;
    counterPTag.innerHTML = count;
}

clickMeButton.addEventListener('click', incrementFunction)
setCountToZero.addEventListener('click', setToZero)
let count = 0;

//OLDER method for creating functions:
// function incrementOld () {

// }

//general guide to creating new code variables/functions
//YAGNI
// You Ain't Gonna Need It
