console.log("Hello CodeSandbox??");
console.log("Hi");

// Data Collections
// console.log("Hello CodeSandbox!!! This is cool im using Node");

const movies = [
  "Willy Wonka",
  "7 Brides for 7 Brothers",
  "Interstellar",
  "Jurassic Park",
];

// console.log("1", movies);

//Accessing Elements in an Array
let firstMovie = movies[0];
// console.log("this is the first movie: ", firstMovie);
let lastMovie = movies[movies.length - 1];
// console.log(lastMovie);

// Populating an Array by Index
movies[1] = "Batman";
movies[movies.length] = "The Thing";
movies[10] = "Shrek";

// console.log("2", movies.length);

movies.length = 4;
// console.log(movies);

/**
 * Array Iteration
 */
// [ 'Willy Wonka', 'Batman', 'Interstellar', 'Jurassic Park' ]

for (let i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
}

// Methods

// concat()
let yourMovies = ["The Game", "John Wick", "Django Unchained"];
let myMovies = ["50 First Dates", "The Grinch", "Step Brothers"];

let ourMovies = myMovies.concat(yourMovies, myMovies, yourMovies, myMovies);
// console.log(ourMovies);
// the original arrays were untouched
// console.log(yourMovies);
// console.log(myMovies)

// Copy an array with concat
let yourMoviesCopy = yourMovies.concat();
// console.log(yourMoviesCopy);

// join()
let movieString = myMovies.join(" and ");

// console.log(movieString + " all walk into a bar");

// push() and unshift() - Adding Elements to an Array

// movies =[ 'Willy Wonka', 'Batman', 'Interstellar', 'Jurassic Park' ]
// adding to the end
movies.push("Trading Places", "Antitrust");

// add to the front
// movies.unshift("Star Wars");

// pop() and shift() - Removing Elements from an Array
//pop
let removedLastMovie = movies.pop();

//shift
let movie = movies.shift();

// console.log(movies);

/**
 * Splice
 */

let anothaMovies = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];

// anothaMovies.splice(3, 1, "Spaceballs", "Alien");
// // removed

// anothaMovies.splice(0, 3);

// anothaMovies.splice(1, 0, "The Sting");
// console.log(anothaMovies);

/**
 * Slice
 */

let middleMovies = anothaMovies.slice(1, 3);
// middleMovies => ['Interstellar', 'Scarface']
// movies => ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places']

// reverse
console.log(anothaMovies.reverse());

/**
 * Nested Arrays
 */
// let numArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

let numArray = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
  ],
];

// console.log(numArray[2][1][1]);
// console.log(numArray.at(2).at(1).at(-1));

let twoD = numArray.flat();

let flatStanley = numArray.flat(2);
// console.log(flatStanley);
// console.log(numArray);

/**
 * Sort
 */

let numArray1 = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
let movies1 = [
  "Shrek",
  "Alien",
  "Caddyshack",
  "Batman",
  "Interstellar",
  "Scarface",
  "Spaceballs",
  "Alien",
  "The Count of Monte Cristo",
];

numArray1.sort();
// movies1.sort();
console.log(movies1);

/**
 * indexOf() and lastIndexOf() - Search an Array
 */

// starts searching array from the front
let batmanIndex = movies1.indexOf("Alien"); // 1
console.log(batmanIndex);

// starts searching array from the end
movies.lastIndexOf("Alien"); // 7

/**
 * forEach
 */

let movies2 = [
  "Shrek",
  "Caddyshack",
  "Batman",
  "Interstellar",
  "Scarface",
  "Spaceballs",
  "Alien",
  "The Count of Monte Cristo",
];

movies2.forEach((movie, i) => {
  console.log(i + ")" + movie);
});

/**
 * Spread Operator
 */
let favMovies = ["Home Alone", "Polar Express", "Elf"];

let moviesCopy = [...favMovies];

let moreMovies = ["Love Actually", ...favMovies, "Christmas Vacation"];

console.log(moreMovies);
