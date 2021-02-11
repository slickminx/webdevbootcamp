// let total = 0;
// function howmany(){
//     total = 6;
    
// }
// console.log(total);
// howmany();
// console.log(total);

// let bird = 'Scarlet Macaw';

// function birdWatch(){
//     let bird = 'Great Blue Heron';
// }
// birdWatch();
// console.log(bird);

// let radius = 8;
// if(radius > 0){
//     const PI = 3.14159
//     let msg = "hello!";
// }

// console.log(radius)

// function bankRobbery(){
//     const heroes = ['Spiderman', 'Batwoman', "Wolverwine"]
//     function cryForHelp() {
//         function inner(){
//             for (let hero of heroes){
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }


// const add = function(x, y){
//     return x + y;
// }

// function callTwice(func){
//     func();
//     func();
// }
// function callTenTimes(f){
//     for(let i = 0; i < 10; i++){
//         f();
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 7) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

// function makeMysteryFunc() {
//     const rand = Math.random();
//     console.log(rand);
//     if(rand > 0.5){
//         return function(){
//             console.log('Congrat, I am a good function! You win')
//         }
//     } else {
//         return function (){
//             alert("You have been infected by a computer virus.");
//             alert("You have been infected by a computer virus.");
//             alert("You have been infected by a computer virus.");
//             alert("You have been infected by a computer virus.");
//             alert("You have been infected by a computer virus.");
//         }
//     }
// }

// function makeBetweenFunc(min, max) {
//     return function(num){
//         return num >= min && num <= max;
//     }
// }


// function isBetween (num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2 (num) {
//     return num >= 1 && num <= 10;
// }
///////////////Video 216 - Defining Methods - 
///We can add funtions as properties on objects.
/////  We call them methods!

// const myMath = {
//     PI: 3.14159, 
//     square(num){
//         //shorthand version of below
//         return num * num;
//     },
//     cube: function(num){
//         return num ** 3;
//     }
// }

// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     bred: "scottish fold",
//     meow(){
//         console.log(`${this.name} says MEEOOW.`);

//     }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const doubles = numbers.map(function(num){
//     return num * 2;
// });

// function print(ele){
//     console.log(ele);
// }

// numbers.forEach(function(el){
//     if (el % 2 === 0){
//         console.log(el);
//     }
// });

// for(let el of numbers){
//     console.log(el);
// }


// const movies = [
//     {
//     title: 'Amadeus',
//         score: 99
//     },
//     {
//     title: 'Stand By Me',
//         score: 85
//     },
//     {
//     title: 'Waterboy',
//         score: 77
//     },
//     {
//     title: 'Cats',
//         score: 33
//     }
// ];

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`);
// });

// const titles = movies.map(function(movie){
//     return movie.title.toUpperCase();
// })

// const add = (x, y) => {
//     return x + y;
// }

// const rollDie = () =>{
//     return Math.floor(Math.random() * 6) + 1;
// }


// const rollDie = () =>(
//      Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b;

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// const refresh = setInterval(() => {
//     console.log("Refresh the page");
// }, 2000);

//use clearInterval to exit out of setInterval(refresh)

// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "Hey there", punc = '!'){
//     console.log(`${msg}, ${person}${punc}`);
// }

// const nums = [13, 4, 5, 31, 3, 6, 4, 81, 22, 3, 3, 7, 43344];

// Math.max(...nums);  //NaN
// Math.max(nums); //43344

// const cats = ['Blue', 'Scout', 'Rocket'];
// const catscopy = [...cats];
// const dogs = ['Lily', 'Winslow'];

// //const allPets = [...cats, ...dogs];
// const allPets = [1,2,3,...cats, ...dogs, "Fire"];
// const hello = [..."hello"];

// const feline = { legs: 4, family: "Felidae"};
// const canine = { isFurry: true, family: "Caninae"};
// const copyfeline = {...feline, color: "black"};

// //example to use spread operator

// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'tobias123!', 
//     username: "tfunke"
// }

// const newUser = {...dataFromForm, id: 2345, isAdmin: false};

// below doesn't work
// function sum(){
//     //console.log(arguments);
//     return arguments.reduce((total, el) => total + el);
// }

//rest parameters
// function sum(...nums){
//   console.log(nums);
//   return nums.reduce((total, el) => total + el);
// }

// //collecting things into one parameter - REST Parameters
// function raceResults(gold, silver, ...everyoneElse){
//     console.log(`GOLD MEDEAL GOES TO: ${gold}`);
//     console.log(`SILVER MEDEAL GOES TO: ${silver}`);
//     console.log(`THANKS FOR COMING: ${everyoneElse}`);
// }

// const scores = [13576, 22228, 32233, 48448, 55844, 69493, 99026];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const[gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'harvey@gmail.com', 
    password: 'Password', 
    firstName: 'Harvey', 
    lastName: 'Milk', 
    born: 1930, 
    died: 1978, 
    bio: "Harvey Bernard Milk was an American Politiican and the first openly awesome man", 
    city: 'San Francisco', 
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy', 
    lastName: 'Williams', 
    born: 1987, 
    city: 'California', 
    state: 'Maryland'
}

// // const firstName = user.firstName;
// // const lastName = user.lastName;
// // const email = user.email;

// // const {email, firstName, city, bio} = user;

//  const {born: birthYear, died: deathYear = 'N/A'} = user;

// //const {city, state, died = 'N/A'} = user2;

// console.log(birthYear);

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName(user){
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }
function fullName({firstName, lastName}){
    return `${firstName} ${lastName}`
}

const movies = [
    {
    title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
    title: 'Stand By Me',
        score: 85,
        year: 2013
    },
    {
    title: 'Waterboy',
        score: 77,
        year: 2001
    },
    {
    title: 'Cats',
        score: 33, 
        year: 1985
    }
];

//const bestmovies = movies.filter((movie) => movie.score >= 50)
//const bestmovies = movies.filter(({score}) => score >= 50)
// movies.map((movie) => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})