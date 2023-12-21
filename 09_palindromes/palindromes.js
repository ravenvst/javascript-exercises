const palindromes = function (str) {
    str = str.replace("!", "");
    str = str.replace(".", "");
    str = str.replace(/,/g, "");
    str = str.replace(/ /g, ""); 
    str = str.toUpperCase();
    console.log(str);

    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            console.log(str[i]);
            console.log(str[str.length - i - 1]);
            return false;
            
        } else if (str[i] === str[str.length - i - 1]) {
            if (i >= str.length/2 -1) {
                return true;
            } else {
                continue;
            }
        }
        
    }
};

// Do not edit below this line
module.exports = palindromes;
