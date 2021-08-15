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

const mouthSize = (animal) => {
    return animal === "alligator" ? "small" : "wide"
}

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
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
//Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}