// functional looping methods are prefered
// such as map, reduce, filter, find etc.

const fruits = ["apples", "banana", "blueberries"];

// use map tp print out each fruit

fruits.map(fruit => {
    console.log(fruit);
});

//fruits.map(fruit => console.log(fruit));

// const copiedFruits = fruits.map(fruit => fruit);

const copiedFruits = fruits.map((fruit, index) => {
    return { id: index + 1, fruit, delicious: "yes yes yes" };
});
console.log(copiedFruits);

// find out what reduce  filter and find works.