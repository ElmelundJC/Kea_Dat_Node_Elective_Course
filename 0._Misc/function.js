function myFirstFunction() {
    return "Greetings";
}

console.log(myFirstFunction());

const myVariableFuntion = function () {
    console.log("Hello there from the anonymous function");
};

myVariableFuntion();


// arrow functions declare the "this" keyword differently, binds it to the scope of the function
const myArrowFunction = () => {
    console.log("Hello there from the anonymous function that's also an arrow function")
};

myArrowFunction();

// callbacks
function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // take some time...
    // and more time...
    anyFunctionReference();
}

// create sayHiLater so that is says "Hi"

const sayHi = () => {
    console.log("Hi");
}

// call sayHiLater so that it says "Hi"
sayHiLater(sayHi);

// hoisting --> send the functions or calls to the top () function declerations gets hoisted to the top. 
// The parameter works as a reference to a function (can be called whatever you want!) and then get called inside the function.


// call sayHiLater so that it says "Hello" or a new greeting that you like

const sayHello = () => {
    console.log("Hello");
}

sayHiLater(sayHello);


function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

// call interact
// interact should call a poke function and the poke function should say something like: "Poke " + name

// solve the poke function

const poke = (name) => {
    return "Poke " + name
}

interact(poke, "Thomas");


// hug someone by calling interact and do it all in one line
// example: "Hug " + name where is Napster for instance

interact((name) => "Hug " + name, "Napster");