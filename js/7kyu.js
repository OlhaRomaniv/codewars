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