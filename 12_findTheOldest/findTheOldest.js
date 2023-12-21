const findTheOldest = function(ppl) {
    let oldest = ppl.reduce(chooseOldest);

    function chooseOldest (oldestSoFar, current) {
        if (current.yearOfDeath == undefined) {
            const d = new Date();
            current.yearOfDeath = d.getFullYear(); 
        }
        if (oldestSoFar.yearOfDeath == undefined) {
            const d = new Date();
            oldestSoFar.yearOfDeath = d.getFullYear(); 
        }
        if ((oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth)) {
            return oldestSoFar;
        } else {
            return current;
        }
    }
        
    return oldest;   
    
    
};

// Do not edit below this line
module.exports = findTheOldest;
