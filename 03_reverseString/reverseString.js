const reverseString = function(input) {
    const strArr = input.split("");
    let reverse = '';
    for (let i = strArr.length - 1; i >= 0; i--)
        reverse += strArr[i];
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
