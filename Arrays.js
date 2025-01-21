Adding And Removing Elements

push(): Adds one or more elements to the end of the array.

const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]

pop(): Removes the last element of the array and returns it.

arr.pop(); // 4, arr is now [1, 2, 3]

unshift(): Adds one or more elements to the beginning of the array.

arr.unshift(0); // [0, 1, 2, 3]

shift(): Removes the first element of the array and returns it.
arr.shift(); // 0, arr is now [1, 2, 3]

splice(): Adds or removes elements at a specific index.
const arr = [1, 2, 3, 4];
arr.splice(2, 1, 99); // [1, 2, 99, 4]


2. Iterating Over Arrays

forEach(): Executes a function for each array element.

arr.forEach((num) => console.log(num));

map(): Creates a new array with the results of calling a function on every element.

const squared = arr.map((num) => num * num); // [1, 4, 9, 16]

filter(): Creates a new array with elements that pass a test.

const even = arr.filter((num) => num % 2 === 0); // [2, 4]


reduce(): Reduces the array to a single value by executing a function for each element.

const sum = arr.reduce((acc, num) => acc + num, 0); // 10

reduceRight(): Works like reduce() but processes elements from right to left.

const reversedSum = arr.reduceRight((acc, num) => acc + num, 0); // 10


3. Searching and Sorting

find(): Returns the first element that satisfies the test function.

const found = arr.find((num) => num > 2); // 3

findIndex(): Returns the index of the first element that satisfies the test function

const index = arr.findIndex((num) => num > 2); // 2

indexOf(): Returns the index of the first occurrence of an element

const index = arr.indexOf(2); // 1

lastIndexOf(): Returns the index of the last occurrence of an element

const index = arr.lastIndexOf(2); // 1

includes(): Checks if an array contains a specific element.

const hasTwo = arr.includes(2); // true

sort(): Sorts the elements of an array.

arr.sort((a, b) => a - b); // Ascending order


reverse(): Reverses the order of the elements in an array.

arr.reverse(); // [4, 3, 2, 1]


4. Joining and Slicing

concat(): Merges two or more arrays into one.

const merged = arr.concat([5, 6]); // [1, 2, 3, 4, 5, 6]

slice(): Extracts a section of an array and returns it as a new array.

const part = arr.slice(1, 3); // [2, 3]

join(): Joins all elements of an array into a string

const str = arr.join(", "); // "1, 2, 3, 4"

5. Array Properties

length: Returns the number of elements in an array.

const len = arr.length; // 4

6. Other Array Methods

every(): Checks if all elements satisfy a test

const allPositive = arr.every((num) => num > 0); // true


some(): Checks if at least one element satisfies a test

const hasOdd = arr.some((num) => num % 2 !== 0); // true

flat(): Flattens nested arrays into a single array.

const nested = [1, [2, [3, 4]]];
const flat = nested.flat(2); // [1, 2, 3, 4]

flatMap(): Maps and flattens an array in one step.

const mapped = arr.flatMap((num) => [num, num * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]

fill(): Fills an array with a static value.

arr.fill(0); // [0, 0, 0, 0]

copyWithin(): Copies part of an array to another location in the same array

arr.copyWithin(1, 2); // [1, 3, 4, 4]


toString(): Converts an array to a string

const str = arr.toString(); // "1,2,3,4"

isArray(): Checks if a value is an array.

Array.isArray(arr); // true
