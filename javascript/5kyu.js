//https://www.codewars.com/kata/52597aa56021e91c93000cb0
//Moving Zeros To The End
var moveZeros = function(arr) {
    return arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0))
}