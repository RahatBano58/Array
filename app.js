"use strict";
// an array of objects is a data structure that allows us to store multiple objects in a single variable.
//Each object in the array can have multiple properties.
//An array of this kind is defined by using an interface to specify the structure of the objects.
let fruits = ["Apple", "Orange", "Banana", "Watermelon"];
console.log(fruits); //[ 'Apple', 'Orange', 'Banana', 'Watermelon' ]
let fruits1 = ["Apple", "Orange", "Banana", "Watermelon"];
console.log(fruits1[0]); //Apple
console.log(fruits1[1]); //Orange
console.log(fruits1[2]); //Banana
console.log(fruits1[3]); //Watermelon
let Friends = ["Tahira", "Zahra", "Zakia", "Mariam"];
console.log(Friends); //[ 'Tahira', 'Zahra', 'Zakia', 'Mariam' ]
let friends = ["Tahira", "Zahra", "Zakia", "Mariam"];
console.log(friends[0]); //Tahira
console.log(friends[1]); //Zahra
console.log(friends[2]); //Zakia
console.log(friends[3]); //Mariam
console.log(friends[4]); //undefined
let Fruits = ["Apple", " Banana", "Watermelon"];
Fruits[1] = "Banana"; // updating the value
console.log(Fruits[1]); //Banana 
//The pop() method removes the last element from an array and returns that value to the caller. If you call pop() on an empty array,
let fruits2 = ["apple", "orange", "watermelon"];
console.log(fruits2); //[ 'apple', 'orange', 'watermelon' ]
fruits2.pop();
console.log(fruits2); //[ 'apple', 'orange' ]
//pop() is used to remove the last element from an array.
//push() is used to add an element to the end of an array
let Ffruits = ["apple", "orange", "watermelon", "Kiwi"];
console.log(Ffruits); //[ 'apple', 'orange', 'watermelon', 'Kiwi' ] 
Ffruits.pop();
Ffruits.push("Mango");
console.log(Ffruits); //[ 'apple', 'orange', 'watermelon', 'Mango' ]
//shift()method removes the first element from an array and returns that element.
let Fruitss = ["apple", "orange", "watermelon"];
Fruitss.shift();
console.log(Fruitss); //[ 'orange', 'watermelon' ]
//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let fruit1 = ["apple", "orange", "watermelon"];
fruit1.unshift("apple");
console.log(fruit1); //[ 'apple', 'apple', 'orange', 'watermelon' ] */
let Fruits1 = ["apple", "orange", "watermelon"];
Fruits1.pop();
Fruits1.pop();
Fruits1.pop();
console.log(Fruits1); //[]
let fruited = ["apple", "orange", "watermelon"];
fruited.shift();
fruited.shift();
fruited.shift();
console.log(fruited); //[]
// A nested array is an array that contains other arrays as its elements. 
let fruitsVeg = ["apple", "orange", "watermelon", ["moli", "pyaz", "bengun"]];
//                0           1        2           3[0]      3[1]      3 [2]
console.log(fruitsVeg); //[ 'apple', 'orange', 'watermelon', [ 'moli', 'pyaz', 'bengun' ] ]
let ffruits = ["apple", "orange", "watermelon", ["moli", "pyaz", "bengan"]];
console.log(ffruits[3][2]); // bengan
//SLICE
//1. First Argument Starting Point (Inclusive) (Included)
//2. Second Argument Ending Point (Exclusive) (Excluded5)
//Array slice()​​ slice() method extracts a section of an array and returns a new array.
let fFruit = ["apple", "orange", "watermelon", "Cherry", "Strawberry", "mango"];
let ans = fFruit.slice(1, 4);
console.log(ans); //[ 'orange', 'watermelon', 'Cherry' ]
let fruiits = ["apple", "orange", "watermelon", "Cherry", "Strawberry", "mango"];
fruits.slice(1, 4);
console.log(fruiits);
//Splice
//First Arg . Starting Point
//Second Arg. Add Or Remove  Element
//The splice() method adds and/or removes array elements. The splice() method overwrites the original array
let fruit = ["apple", "orange", "watermelon", "Cherry", "Strawberry", "mango"];
let aAns = fruit.splice(1, 1, "moli", "bengan");
console.log(fruit);
let Fruit = ["apple", "orange", "watermelon", "Cherry", "Strawberry", "mango"];
let answer = Fruit.splice(1, 2, "moli", "bengan");
console.log(Fruit); //  [ 'apple', 'moli', 'bengan', 'Cherry', 'Strawberry', 'mango' ]
let fFruits = ["apple", "orange", "watermelon", "Cherry", "Strawberry", "mango"];
let Ans = fFruits.splice(1, 0);
console.log(fFruits); //[ 'apple', 'orange', 'watermelon', 'Cherry', 'Strawberry', 'mango' ]
// Structure Data
/*let obj = {
    fruitName: "Apple",
    price : 200,
    season: "summer"
}
console.log(obj.fruitName);
console.log(obj.price);
console.log(obj.season);       //block scope


const students =[
    {
        name: "Rahat",
        rollNumber : 12345,
        timings: "7 - 10"

    },
    {
        name: "Tahira",
        rollNumber : 56780,
        timings: "7 - 10"
    },
    {
        name: "Zakia",
        rollNumber : 34569,
        timings: "7 - 10"
    }
]
console.log(students[0].name);
console.log(students[0].rollNumber)
console.log(students[0].timings)*/
