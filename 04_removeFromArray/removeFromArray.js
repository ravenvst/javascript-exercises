


const removeFromArray = function(myArray, x) {
    
    const filteredArray = myArray.filter(checkEntry);
    return filteredArray;

    function checkEntry(entry){
        return x!==entry;
    }
};

// Do not edit below this line
module.exports = removeFromArray;
