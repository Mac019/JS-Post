//
Data Types - 7 Types in the primitive 
var str = "Vivek Singh Bisht"; // String 
var x = 3; // Number 
BigInt
Boolean
undefined
null
Symbol
var obj1 = {
    x:  43,
    y:  "Hello world!",
    z: function(){
       return this.x;
    }
 }
 //Hoisting 
 x = 3 ; // Initialization
 console.log(x);
 var x ; // Declarations 

 hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling

function hoistedFunction(){ 
  console.log(" Hello world! ");
} 
// Hoisting takes place in the local scope as well
function doSomething(){
    x = 33;
    console.log(x);
    var x;
  } 
  //Important 
var x;
console.log(x); // Outputs "undefined" since the initialization of "x" is not hoisted
x = 23;


/// Var Let Const 
function varExample() {
    if (true) {
      var x = 10; // Declared inside an if block
    }
    console.log(x); // Accessible here (function-scoped): 10
  }
  
  varExample();

  function letExample() {
    if (true) {
      let y = 20; // Declared inside an if block
      console.log(y); // Accessible here: 20
    }
    // console.log(y); // Error: y is not defined (block-scoped)
  }
  
  letExample();

  function constExample() {
    if (true) {
      const z = 30; // Declared inside an if block
      console.log(z); // Accessible here: 30
      // z = 40; // Error: Assignment to constant variable
    }
    // console.log(z); // Error: z is not defined (block-scoped)
  }
  
  constExample();

  //redeclaration
let x = 10; // Global scope
console.log(x); // Output: 10

{
  let x = 20; // Block scope (different scope from global)
  console.log(x); // Output: 20
}

function testScope() {
  let x = 30; // Function scope (different scope from global and block)
  console.log(x); // Output: 30
}

testScope();

console.log(x); // Output: 10 (global `x` is unaffected)

const y = 10; // Global scope
console.log(y); // Output: 10

{
  const y = 20; // Block scope (different scope from global)
  console.log(y); // Output: 20
}

function testScope() {
  const y = 30; // Function scope (different scope from global and block)
  console.log(y); // Output: 30
}

testScope();

console.log(y); // Output: 10 (global `y` is unaffected)

// Pass by Value  only for primitive data types 
let x = 5;
function changeValue(y) {
  y = 10;
}
changeValue(x);
console.log(x); // Output: 5 (unchanged)

// Pass by Reference only for objects and arrays 
let arr = [1, 2, 3];
function changeArray(a) {
  a[0] = 99;
}
changeArray(arr);
console.log(arr); // Output: [99, 2, 3] (modified)


// High Order Functions Passing a function
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const userName = "Alice";
  console.log(callback(userName));
}

processUserInput(greet); // Output: "Hello, Alice!"

// High Order Returning as a function

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


// a) map

const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]  // filter // reduce 






let a = 20;

b = a;

b = 30;
console.log(a); // 20 
console.log(a); // 30

not with the objects and arrays

let obj1 = {
  name : "Makarand";
}

let obj2 = obj1 ;
obj2.name = "Vrushab";

console.log(obj1); // Vrushab
console.log(obj2); // Vrushab


strict mode in  js 
duplicate arguments arenotnallowd 
js key words cant be the function names or the parameters
Not allowed to create global ariables


function (name){
  return function(value);
  return name * value;
}