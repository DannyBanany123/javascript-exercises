const findTheOldest = function(array) {
    let init = calculateAge(array[0]);
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        let age = calculateAge(array[i]);
        if (age > init) {
            index = i;
            init = age;
        }
    }
    return array[index];
};

function calculateAge(obj) {
    let age;
    if (!("yearOfDeath" in obj)) {
        age = 2022 - obj.yearOfBirth;
    } else {
        age = obj.yearOfDeath - obj.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
