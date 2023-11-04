const sumAll = function(begin, end) {
    if (typeof(begin) !== 'number' || typeof(end) !== 'number') return "ERROR";
    if (begin < 0 || end < 0) return "ERROR";
    if (begin > end) {
        let temp = begin;
        begin = end;
        end = temp;
    }
    begin--;
    return (end * (end + 1) - begin * (begin + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
