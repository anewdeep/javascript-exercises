const sumAll = function(first, last) {
    if (!Number.isInteger(first) || !Number.isInteger(last)) return 'ERROR';
    if (first < 0 || last < 0) return 'ERROR'
    if (first > last) [first, last] = [last, first];
    let sum = 0;
    let i = first;
    while (i <= last) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
