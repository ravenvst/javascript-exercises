function repeatString (string, num){
    if (num < 0) {
        return "ERROR";
    }

    let count = 0;
    let printout ="";

    while (count < num){
     
        printout += string;
        count++;

    }


    return printout;
}

// Do not edit below this line
module.exports = repeatString;
