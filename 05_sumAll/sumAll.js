const sumAll = function(fromInt, toInt) {
    let sum = 0;

    if (fromInt < 0 || toInt < 0 || typeof fromInt !== "number" || typeof toInt !== "number"){
        return "ERROR";
    }
    else if (fromInt < toInt) {
        for (let i = fromInt; i <= toInt; i ++){
            sum += i;
        } 
    } else {
        for (let i = fromInt; i >= toInt; i --){
            sum += i;
        }
    }       

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
