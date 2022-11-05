const findTheOldest = function(arr) {
    const oldestSort = arr.sort(function(a, b) {
        const today = new Date();
        const thisYear = today.getFullYear();
        if (a.yearOfDeath === undefined) {
            const lastPers = thisYear - a.yearOfBirth;
            const nextPers = b.yearOfDeath - b.yearOfBirth;
            return lastPers > nextPers ? -1 : 1;
        } else if (b.yearOfDeath === undefined) {
            const lastPers = a.yearOfDeath - a.yearOfBirth;
            const nextPers = thisYear - b.yearOfBirth;
            return lastPers > nextPers ? -1 : 1;
        } else{
            const lastPers = a.yearOfDeath - a.yearOfBirth;
            const nextPers = b.yearOfDeath - b.yearOfBirth;
            return lastPers > nextPers ? -1 : 1;
        }
    })
    return oldestSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
