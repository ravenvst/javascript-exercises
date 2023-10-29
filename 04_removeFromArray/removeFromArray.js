const removeFromArray = function() {
    const filteredArray = [];
    const valuesToRemove = Array.from(arguments).slice(1);
    arguments[0].forEach(removeValues);
    
    function removeValues (item){
        for (let i = 0; i < valuesToRemove.length; i ++){
                if (!valuesToRemove.includes(item) && !filteredArray.includes(item)) {
                    filteredArray.push(item);
                    
                }
        }
    }

    /*
    const filteredArray = arguments[0];

    for (let i = 0; i < valuesToRemove.length; i++){

        filteredArray = filteredArray.filter(selectElement);
        
        
       
        function selectElement(element){
            return valuesToRemove[i] !== element;
        }
        
    }
    */
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;

