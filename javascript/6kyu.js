//https://www.codewars.com/kata/525f50e3b73515a6db000b83
//Create Phone Number
function createPhoneNumber(numbers) {
    let mask = "(xxx) xxx-xxxx"
    for (let i = 0; i < numbers.length; i++) {
        mask = mask.replace('x', numbers[i])
    }
    return mask
}

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//Who likes it?
function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return names[0] + ' likes this';
        case 2:
            return names[0] + ' and ' + names[1] + ' like this';
        case 3:
            return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default:
            return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}


//https://www.codewars.com/kata/514b92a657cdc65150000006
//Multiples of 3 or 5
function solution(number) {
    let sum = 0
    for (let i = 1; i < number; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i
        }
    }
    return sum
}

//https://www.codewars.com/kata/55c45be3b2079eccff00010f
//Your order, please
function order(words) {
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');
}

//https://www.codewars.com/kata/54da5a58ea159efa38000836
//Find the odd int
function findOdd(A) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++
            }
        }
        if (count % 2 !== 0) {
            return A[i]
        }
    }
}

//https://www.codewars.com/kata/523f5d21c841566fde000009
//Array.diff
function arrayDiff(a, b) {
    if (a.length === 0) { return [] };
    if (b.length === 0) { return a }
    let array = [];
    a.forEach((el) => {
        if (!b.includes(el)) {
            array.push(el)
        }
    })
    return array
}

//https://www.codewars.com/kata/552c028c030765286c00007d
//IQ Test
function iqTest(numbers) {
    const set = numbers.split(' ')
    const even = [];
    const odd = [];
    for (let i = 0; i < set.length; i++) {
        if (set[i] % 2 === 0) {
            even.push(i)
        } else {
            odd.push(i)
        }
    }
    if (even.length > 1) {
        return odd[0] + 1
    } else {
        return even[0] + 1
    }
}

//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
//Counting Duplicates
function duplicateCount(text) {
    let str = text.toLowerCase();
    let count = 0;
    const characters = {}
    for (let i of str) {
        if (!characters[i]) {
            characters[i] = 1;
        } else {
            characters[i]++
        }
    }
    for (let i in characters) {
        if (characters[i] > 1) {
            count++
        }
    }
    return count
}