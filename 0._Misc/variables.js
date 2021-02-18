// 'use strict';

// don't EVER do this.. not allowed in strict mode
// totalGlobalVariable = 123;

var myPreciousRing = "0";
// delete myPreciousRing;
// strict mode helps us avoid coding in a bad way

let variableA;
let variableB;

// console.log(variableA + variableB); Dont ever do this
console.log(variableA, variableB); // the reason for this, is that we want to "sneak peak" at the numbers.

// type coercion
// avoid by always using === and !== 


// this is a new scope (a block)    
{

}


{
    let scopeVariable = "abc";
    {
        let scopeVariable = 123;
        console.log(scopeVariable);
    }
    console.log(scopeVariable);
}

// change let to var and it will print 55555
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

