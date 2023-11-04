const removeFromArray = function(array, ...toRemove) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!toRemove.includes(array[i])) {
            returnArray.push(array[i]);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
