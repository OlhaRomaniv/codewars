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