//https://www.codewars.com/kata/5265326f5fda8eb1160004c8
//Convert a Number to a String!

const numberToString = (num) => { return num.toString(); }

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//Reversed Strings
const solution = (str => str.split('').reverse().join(''));

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
//Even or Odd

function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
}

//https://www.codewars.com/kata/56dec885c54a926dcd001095
//Opposite number

function opposite(number) {
    return (-number);
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102
//Return Negative

function makeNegative(num) {
    return num > 0 ? -num : num;
}

//https://www.codewars.com/kata/53369039d7ab3ac506000467
//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
    return bool === true ? 'Yes' : 'No'
}

//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
//Messi goals function

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
//The Wide-Mouthed frog!

const mouthSize = (animal) => { return animal === "alligator" ? "small" : "wide" }

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
//Terminal game move function

function move(position, roll) {
    return position + roll * 2;
}


//https://www.codewars.com/kata/keep-hydrated-1/train/javascript
//Keep Hydrated!

function litres(time) {
    return Math.floor(time * 0.5);
}


//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Convert a string to an array

function stringToArray(str) {
    let arr = str.split(" ");
    return arr;
}


//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DNA to RNA Conversion

function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}


//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Find Maximum and Minimum Values of a List
const min = list => Math.min(...list);
const max = list => Math.max(...list);

//https://www.codewars.com/kata/beginner-lost-without-a-map
//Lost Without a Map

function maps(x) {
    return x.map((a) => a * 2);
}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
//Find the first non-consecutive number

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i + 1];
        }
    }
    return null;
}

//https://www.codewars.com/kata/5556282156230d0e5e000089
//DNA to RNA Conversion

const DNAtoRNA = (dna) => { return dna.replace(/T/g, 'U') }

//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
//Find the smallest integer in the array

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0]
        for (let i = 1; i < args.length; i++) {
            if (args[i] < smallest) smallest = args[i]
        }
        return smallest
    }
}

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
//Beginner Series #2 Clock
function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}

//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
//Remove String Spaces

const noSpace = (x) => x.replace(/\s/g, "");

//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
//Quarter of the year

const quarterOf = (month) => {
    switch (month) {
        case (1):
        case (2):
        case (3):
            return 1;
        case (4):
        case (5):
        case (6):
            return 2;
        case (7):
        case (8):
        case (9):
            return 3;
        case (10):
        case (11):
        case (12):
            return 4;
    }
}

//https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
//The Wide-Mouthed frog!

const mouthSize = (animal) => { return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'; }

//https://www.codewars.com/kata/57eaeb9578748ff92a000009
//Sum Mixed Array
function sumMix(x) {
    return x.reduce((a, b) => Number(a) + Number(b))
}

//https://www.codewars.com/kata/5772da22b89313a4d50012f7
//Grasshopper - Personalized Message

function greet(name, owner) {
    return (name === owner) ? "Hello boss" : "Hello guest";
}

//https://www.codewars.com/kata/515e188a311df01cba000003
//Get Planet Name By ID
function getPlanetName(id) {
    let name;
    switch (id) {
        case 1:
            name = 'Mercury';
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:
            name = 'Neptune';
            break;
    }

    return name;
}

//https://www.codewars.com/kata/57f780909f7e8e3183000078
//Beginner - Reduce but Grow
const grow = (x) => { return x.reduce((a, b) => a * b) }

//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd
//Beginner Series #1 School Paperwork

const paperwork = (n, m) => { return n < 0 || m < 0 ? 0 : n * m; }

//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1
//SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
    let resa = 0,
        resb = 0;
    for (const i in a) {
        resa += a[i] ** 2;
    }
    for (const j in b) {
        resb += b[j] ** 3;
    }
    return resa > resb;
}

//https://www.codewars.com/kata/56ff9b53140fcca90b000530
//SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog {
    constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true);
    }
}

//https://www.codewars.com/kata/571f1eb77e8954a812000837
//Training JS #5: Basic data types--Object
const animal = (obj) => { return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.' }

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
//Convert number to reversed array of digits
function digitize(n) {
    return Array.from(String(n), Number).reverse()
}

//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
//A wolf in sheep's clothing
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }
    const sheeps = [...queue].reverse();
    for (let i = 0; i < sheeps.length; i++) {
        if (sheeps[i] === "wolf") {
            return "Oi! Sheep number " + i + "! You are about to be eaten by a wolf!";
        }
    }
}

//https://www.codewars.com/kata/5715eaedb436cf5606000381
//Sum of positive
function positiveSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum
}

//https://www.codewars.com/kata/55a144eff5124e546400005a
//Classy Classes
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age,
            this.info = name + 's age is ' + age
    }
}

//https://www.codewars.com/kata/55a14aa4817efe41c20000bc
//Classy Extentions
class Cat extends Animal {
    constuctor(name, speak) {}
    speak() {
        return this.name + ' meows.'
    }
}


//https://www.codewars.com/kata/515e271a311df0350d00000f
//Square(n) Sum
function squareSum(numbers) {
    const square = numbers.map((i) => i ** 2)
    return square.reduce((a, b) => a + b, 0)
}

//https://www.codewars.com/kata/515e271a311df0350d00000f
//Square(n) Sum
function squareSum(numbers) {
    const square = numbers.map((i) => i ** 2)
    return square.reduce((a, b) => a + b, 0)
}