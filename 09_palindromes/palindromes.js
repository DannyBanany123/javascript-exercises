const palindromes = function (string) {
    let bank = "abcdefghijklmnopqrstuvwxyz";
    let word = string.toLowerCase();
    let a = "";
    let b = "";
    for (let i = 0; i < word.length; i++) {
        if (bank.includes(word.charAt(i))) {
            a += word.charAt(i);
        }
    }
    for (let i = word.length - 1; i >= 0; i--) {
        if (bank.includes(word.charAt(i))) {
            b += word.charAt(i);
        }
    }
    console.log(a);
    console.log(b);
    return a === b;
};

// Do not edit below this line
module.exports = palindromes;
