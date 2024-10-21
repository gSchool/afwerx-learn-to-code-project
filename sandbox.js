

// //Data types

// //STRING
// let someName = 'Trevor';
// someName += " S";
// console.log(someName);

// //Numbers
// let someNumber = 27;
// someNumber = someNumber + 3;
// let someRemainder = someNumber % 3;
// let someDividend = someNumber / 3;
// console.log(someDividend, someRemainder );

// //Non-primitive datatypes
// //Objects 
// let rose = {
//     name: "rose",
//     color: "red"
// }
// let tulip = {
//     name: "tulip",
//     color: "yellow", 
//     // gallonsOfWater: 1,
//     // someObject: {
//     //     someKey: "someVariable"
//     // }
// }
// console.log("The beautiful " + rose.name + " is " + rose.color);
// console.log("The beautiful " + tulip.name + " is " + tulip.color);

// //Array 
// let listOfBookPages = [100, 270, 76];
// let listOfBookTitles = ["Great Gatsby", "The Notebook", "IT"];
// let listOfPlants = [rose, tulip];

// console.log(listOfBookPages[0], listOfBookTitles[0], listOfPlants[0].name);

// let pi = 3.14159;
// pi += 8;
// console.log(pi);

// console.log("our very first javascript message");

// //Iterations
// let secondListOfBookTitles = ["Great Gatsby", "The Notebook", "IT"];

// //push and pop
// let myPoppedBook = secondListOfBookTitles.pop();
// let anotherBook = "The Count of Monte Cristo";
// secondListOfBookTitles.push(anotherBook);

// // for loop
// for(let i = 0; i <= 2; i++) {
//     let loggableString = secondListOfBookTitles[i];
//     console.log(loggableString)
// }

// THIS WILL NOT WORK!! IT IS OUT OF SCOPE!!
//console.log(loggableString);

let numbers = [1, 3, 3214, 4564, 5, 78798];

for(let i = 0; i < numbers.length; i++){
    let remainder = numbers[i] % 2;
    //if remainder is 1 - it is odd
    //else it is even
    console.log(remainder)
    if(remainder == 1){
        console.log("ODD!")
    } else {
        console.log("EVEN!")        
    }
}