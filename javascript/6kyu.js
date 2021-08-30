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