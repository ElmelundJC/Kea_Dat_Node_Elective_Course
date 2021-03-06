// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console
console.log('Exercise 1');
console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

//console.log('Exercise 2')
const henriette = {
    name: "henriette",
    age: 26
};

friends.push(henriette)
console.log(friends)
// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
console.log('Exercise 3')
let findNumber = significantMathNumbers.indexOf(1729)
console.log(findNumber)

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

// console.log('Exercise 4')
diet.splice(2, 0, 'hamburger', 'soda', 'pizza')
console.log(diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
console.log('Exercise 5')
diet.pop()
console.log(diet)


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
console.log('Exercise 6')
const dinnerTray = diet.slice()
console.log(dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b
console.log('Exercise 7')

// Jeg har løst opgaven på 2 måder

// var secondChar = lettersExpanded.length
// for (var i = 1; i < lettersExpanded.length; i += 2) {
//     secondChar = lettersExpanded[i];
//     console.log(secondChar)
// }

const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)
console.log(every_nth(lettersExpanded, 2));

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------

console.log('Exercise 8')

let numbersArray = numbers.length;
const newArray = [];
for (var i = 0; i < numbersArray; i++) {
    // console.log(numbers[i])
    if (numbers[i] < 0 || numbers[i] > 6) {
        newArray.push(numbers[i]);
        //console.log(numbers[i]);
    } else {
        discardedNumbers.push(numbers[i]);
    }
}
console.log(newArray);
console.log(discardedNumbers);
