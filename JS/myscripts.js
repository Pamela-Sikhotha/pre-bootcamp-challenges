// TASK 1***********************************************

// x = 0
// y = 1
// Print the value of x
// Print the value of y

// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


//1 answer*


let x = 0;
let y = 1;

console.log(x);
console.log(y);

//2

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);


// TASK 2*****************************************************

// x = 1 + 1 * 2
// y = (1 + 1) * 2
// z = 1 + ( 1 * 2 )
// a =  1 + 1 * 2 / 2
// b =  (1 + 1 * 2 ) /  2

// answer*

let outputx = 1 + 1 * 2;
let outputy = (1 + 1) * 2;
let outputz = 1 + ( 1 * 2 );
let outputa =  1 + 1 * 2 / 2;
let outputb =  (1 + 1 * 2 ) /  2;

console.log(outputx);
console.log(outputy);
console.log(outputz);
console.log(outputa);
console.log(outputb);

// TASK 3 **********************************************

// Write a function that takes 2 numbers as input. If either of the numbers is 65, OR if the sum of the numbers is 65 then return true. Otherwise return false

// Answer*

const always = 65;
let numTwo = 6;
let numThree = 45;

let sum = numTwo + numThree;

if (sum === always || numTwo === always || numThree === always){
    console.log("true");
}else{
    console.log("false");
};




// TASK 4****************************************************

// Write a function that takes 2 numbers as input. If either of the numbers is 3 AND the sum of the numbers contains a 3 then return true. Otherwise return false

// Answer*

const alwaysNow = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else if (InputTwo === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else {
    console.log("false");
};




// Task 5****************************************************

// Write a function that takes in three numbers. These numbers represent the lengths of the sides of a triangle. The function should return the area of a triangle.

//a*
function calculateTriangleArea(side1, side2, side3) {

    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s - side1)*(s-side2)*(s-side3));

    console.log(area);

}
calculateTriangleArea(2,4,4);

// b*
let b = 4;
let h = 4;

let area = (b*h)/2;
 console.log(area)



// Task 6*************************************************************

// Write a function that takes in three numbers and returns the maximum number. Do this without using any builtin methods. Write your own logic from scratch.

//a*
function findMaxNumber (number1, number2, number3) {

    let arrayOfNumbers = [number1, number2, number3];
    let maxNumber = arrayOfNumbers[0];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (maxNumber < arrayOfNumbers[i]) {
            maxNumber = arrayOfNumbers[i];
        }
    }


console.log(maxNumber);
}

findMaxNumber(10,3,0);

//b
const arrayA = [25,1000,2]

arrayA.sort()

arrayA.sort((a,b) => a-b)

const max = arrayA[arrayA.length-1]
console.log(max);



// Task 7***************************************************

// Write a function that takes in a number representing the temperature in Celsius and returns the temperature in Fahrenheit. Write another function that does the opposite (Fereignheit to Celsius)

//answer*
function celToFar(celsius) 
{
  let cTemperature = celsius;
  let celToFahr = cTemperature * 9 / 5 + 32;
  let message = cTemperature+'\xB0C is ' + celToFahr + ' \xB0F.';
    console.log(message);
}

function farToCel(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
celToFar(25);
farToCel(85);




// Task 8*************************************************************

// Make a function to convert any number into hours and minutes. (For example, 71 will become “1 hour, 11 minutes”; 133 will become “2 hours, 13 minutes”.)

// answer*
//a
function timeConvert(n) {
    let num = 71;
    let hours = (num / 60);
    let rhours = Math.floor(hours)
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));

    // b
function timeConverter(n) {
    let number = 133;
    let hours = (number / 60);
    let remainhours = Math.floor(hours);
    let minutes = (hours - remainhours) * 60;
    let remainingminutes = Math.round(minutes);
    return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
    }
    
    console.log(timeConverter(200));


// Task 9***************

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

//answer*

let multiples = function (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    
};


multiples(1000);

console.log(sum);
  


// Task 10*****************************************************

// Write a function that takes in a string and then prints out all the vowels in the string. Make sure it can deal with capital letters and small letters.

//answer*
let vowels = "aeiouAEIOU";
let string = "greAt bootcAmp";

let array = "";
for (i = 0; i < string.length; i++){
    if(vowels.indexOf(string[i]) >= 0) array += string[i];

}
console.log(array);




// Task 11*************************************************

// Make a function that takes two strings as input, and outputs the common characters/letters that they share. (For example, Input: ‘house’, ‘computers’ . Output: ‘Common letters: o, u, e, s’)

//answer*

function findCommonLetters(string1, string2) {
    let string1ToArray = Array.from(string1);
    let string2ToArray = Array.from(string2);

let commonLetters = string2ToArray.filter(value => {
    return string1ToArray.indexOf(value) != -1;
});

console.log(`Common letters: ${commonLetters}`);
}

findCommonLetters('house', 'computers');

    
// Task 12*************

// This task isn’t compulsory but we’ll be impressed if you do it.

// Can you make a user interface for each of the previous tasks? You’ll need HTML and CSS to do it.

//answer*

