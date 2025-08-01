const findTheOldest = function(array) {
    array.sort((a,b) => {
        const date = new Date();
        if (a.yearOfDeath && b.yearOfDeath) {
            return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
        } else if (!a.yearOfDeath) return (date.getFullYear() - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        else if (!b.yearOfDeath) return (a.yearOfDeath - a.yearOfBirth) - (date.getFullYear() - b.yearOfBirth);
    })
    return array.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
