const sumAll = function(num1, num2) {
    let result = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    let add1;
    let add2;
    if (num2 >= num1) {
        add1 = num1;
        add2 = num2;
    } else {
        add1 = num2;
        add2 = num1;
    }
    for (let i = add1; i <= add2; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
