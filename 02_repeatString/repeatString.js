const repeatString = function(str, times) {
    if (times == 0) 
        return ''
    
    
    else if (times < 0)
        return 'ERROR'

    value = str;
    
    for (i = 0; i < times - 1; i++) {
        str = value + str;
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;
