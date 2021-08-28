//https://www.codewars.com/kata/54ff3102c1bad923760001f3
//Vowel Count

function getCount(str) {
    var vowelsCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowelsCount++
        }
    }

    return vowelsCount;
}

//https://www.codewars.com/kata/56f935002e6c0d55fa000d92
//Fun with ES6 Classes #2 - Animals and Inheritance

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }
    introduce() {
        return super.introduce() + "  Meow meow!";
    }
}
class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}

//https://www.codewars.com/kata/52fba66badcd10859f00097e
//Disemvowel Trolls

const disemvowel = (str) => { return str.replace(/[aeiou]/ig, '') }

//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
//Shortest Word

const findShort = (s) => { return Math.min(...s.split(' ').map(i => i.length)) }

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0
//Smallest value of an array

function min(arr, toReturn) {
    return toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//https://www.codewars.com/kata/5412509bd436bd33920011bc
//Credit Card Mask
function maskify(cc) {
    return cc.split('').map((lett, i) => i < cc.length - 4 ? '#' : lett).join('')
}

//https://www.codewars.com/kata/559f8d487fa8511c43000118
//Is this working?
function Counter() {
    this.count = 0;
    this.updateCount = () => { this.count++ };
}

//https://www.codewars.com/kata/546e2562b03326a88e000020
//Square Every Digit
function squareDigits(num) {
    const result = num.toString().split('').map((i) => i ** 2).join('');
    return parseInt(result);
}

//https://www.codewars.com/kata/554b4ac871d6813a03000035
//Highest and Lowest
function highAndLow(numbers) {
    const arr = numbers.split(" ");
    return Math.max(...arr) + " " + Math.min(...arr)
}


//https://www.codewars.com/kata/55b42574ff091733d900002f
//Friend or Foe?
function friend(friends) {
    const names = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            names.push(friends[i]);
        }
    }
    return names
}

//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
//Descending Order
function descendingOrder(n) {
    const num = n.toString().split("").sort().reverse().join('')
    return parseInt(num)
}

//https://www.codewars.com/kata/558fc85d8fd1938afb000014
//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted[0] + sorted[1]
}