const fibonacci = function(enteredChosenNumber) {
   
    let chosenNumber = Number(enteredChosenNumber);
    
    if (chosenNumber < 0) {
        return "OOPS";
    }

    if (chosenNumber === 1) {
        return 1;
    }
    
    let x = 0;
    let y = 1;

    for (let i = 1; i < chosenNumber; i++) {
        let temp = x + y;
        if (i === chosenNumber - 1) {
            return temp;
        }
        x = y;
        y = temp;
    }
};

// Do not edit below this line
module.exports = fibonacci;
