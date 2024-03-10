const sumAll = function(a,b) {
    let sum = 0;

    if (a < 0 || b <  0 || typeof(a) != 'number' || typeof(b) != 'number') {
        return 'ERROR';
    }

    if (a < b) {

        while(a <= b)
        {
            sum = sum + a;
            a++;
    
        }
        return sum;
        
    }

    else {
        while(b <= a)
        {
            sum = sum + b;
            b++;
    
        }
        return sum;
    }
};

//(1,4)
// 1 
// Do not edit below this line
module.exports = sumAll;
