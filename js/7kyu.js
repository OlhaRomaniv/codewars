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