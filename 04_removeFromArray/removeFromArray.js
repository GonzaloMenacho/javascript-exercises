const removeFromArray = function(varArr, object) {

    console.log(varArr);
    for (j = 1; j < arguments.length; j++){
        for (i = 0; i < varArr.length; i++){
            
            
            if (arguments[j] === varArr[i]) {
                varArr.splice(i,1);
                i--;
            }
            
        }
    }
    console.log(varArr);
    return varArr;
}

// Do not edit below this line
module.exports = removeFromArray;
