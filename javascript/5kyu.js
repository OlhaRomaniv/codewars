//https://www.codewars.com/kata/52597aa56021e91c93000cb0
//Moving Zeros To The End
var moveZeros = function(arr) {
    return arr.filter((i) => i !== 0).concat(arr.filter((i) => i === 0))
}

//https://www.codewars.com/kata/52449b062fb80683ec000024
//The Hashtag Generator
function generateHashtag(str) {
    let tag = "#";
    const words = str.split(' ').filter((char) => char !== '');
    if (words.length === 0) {
        return false;
    }
    tag += words.map((word) => { return word.charAt(0).toUpperCase() + word.slice(1) }).join('');
    if (tag.length > 140) {
        return false;
    } else {
        return tag;
    }
}