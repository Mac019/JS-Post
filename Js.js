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

Promises 

const promise = new Promise((resolve, reject) => {
  let success = true; // Simulating success or failure

  if (success) {
      resolve("Operation was successful!");
  } else {
      reject("Operation failed.");
  }
});

promise
  .then((result) => {
      console.log(result); // Output if resolved
  })
  .catch((error) => {
      console.error(error); // Output if rejected
  });


//async-await 

async/await is a modern way to handle asynchronous operations in JavaScript. It is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code, which is easier to read and debug.

async keyword: Declares an asynchronous function that always returns a promise.
await keyword: Pauses the execution of the function until the promise is resolved or rejected. It can only be used inside an async function.

// Simulating a function that fetches data
const fetchData = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched successfully!");
      }, 2000);
  });
};

async function getData() {
  console.log("Fetching data...");
  const result = await fetchData(); // Wait for the promise to resolve
  console.log(result); // Logs: "Data fetched successfully!"
}


getData();


A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callback functions are commonly used in asynchronous programming to handle tasks like data fetching, event handling, and more.

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Pass 'sayGoodbye' as a callback to 'greet'
greet("Alice", sayGoodbye);


function(greet , callback) {
  console.log();
  callback();
}


A closure is a function that has access to its own scope, the scope of the outer function, and the global scope, even after the outer function has finished executing. Closures are created every time a function is defined, not when it is executed.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
  };
}

const closureExample = outerFunction("outside");
closureExample("inside");


function createMultiplier(multiplier) {
  return function (value) {
      return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15



Currying is a technique in functional programming where a function is transformed into a sequence of functions, each taking a single argument. Instead of taking all arguments at once, the curried function takes the first argument, then returns another function that takes the next argument, and so on, until all arguments are provided

function calculate(a) {
  return function (b) {
      return function (c) {
          return a + b * c;
      };
  };
}

console.log(calculate(2)(3)(4)); // 2 + 3 * 4 = 14

//Arrow Functions
const multiply = (a) => (b) => a * b;

const double = multiply(2); // Partially applied function
console.log(double(5)); // 10
console.log(multiply(3)(4)); // 12



Function Composition is a technique in functional programming where you combine two or more functions to produce a new function. The output of one function becomes the input for the next. It allows complex operations to be built by chaining simpler functions.

const add = (x) => x + 2;
const multiply = (x) => x * 3;

const compose = (f, g) => (x) => f(g(x));

const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(5)); // (5 + 2) * 3 = 21


Debouncing and Throttling are techniques used to improve performance and efficiency when handling events in JavaScript. They help control how often a function is executed, particularly in response to frequently occurring events like scrolling, resizing, or typing.

1. Debouncing
Debouncing ensures that a function is called only once after a specified delay, no matter how many times the event is triggered during that delay. It is useful for scenarios where you want to wait until the event stops firing before executing the function.

Use Case:
Preventing multiple API calls while typing in a search input.
Resizing the window and recalculating layout only after resizing is complete.

function debounce(func, delay) {
  let timeout;
  return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const logMessage = () => console.log("Debounced Event!");
const debouncedLog = debounce(logMessage, 1000);

// Event listener
window.addEventListener("resize", debouncedLog);


2. Throttling
Throttling ensures that a function is called at most once every specified interval, regardless of how often the event is triggered. It is useful when you need to execute the function periodically while the event is occurring.

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
      if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
      }
  };
}

// Usage
const logMessage = () => console.log("Throttled Event!");
const throttledLog = throttle(logMessage, 1000);

// Event listener
window.addEventListener("scroll", throttledLog);


What Is Prototypal Inheritance?
Prototypal inheritance is a system in JavaScript where objects can inherit properties and methods from other objects. It is different from the classical inheritance used in many other programming languages like Java or C++.

How It Works
Prototype Object: Each object can have a prototype, and that prototype can have its own prototype, forming a chain.

Prototype Chain: When you access a property, JavaScript searches:

First, the object itself.
If not found, its prototype.
Continues up the chain until it reaches null.
Inheritance: You can use the Object.create() method to create a new object that inherits from a specified prototype.


// Base object
const animal = {
  eat() {
    console.log("Eating...");
  },
};

// Create a new object that inherits from 'animal'
const dog = Object.create(animal);
dog.bark = function () {
  console.log("Barking...");
};

dog.eat(); // Output: Eating... (inherited from animal)
dog.bark(); // Output: Barking...
