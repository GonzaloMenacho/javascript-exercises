const reverseString = function(text) {
    let strArray = text.split(""); // t,e,s,t
    let newArray = [];

    for (i = strArray.length; i >= 0; i--) {
        newArray.push(strArray[i]);
    }

    return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
