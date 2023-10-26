const reverseString = function(string) {
    let stringLength = string.length; 
    let stringReversed = "";
    const splitStringArray = string.split("");

    while (stringLength > 0){
        stringReversed += splitStringArray[stringLength-1];
        stringLength--;
    }

    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
