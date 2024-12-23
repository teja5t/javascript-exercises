const repeatString = function(word, n) {
    let out = '';

    if (n < 0) {
        return "ERROR";
    }

    for (let i = 0; i < n; i++) {
        out += word;
    }

    return out;
};

// Do not edit below this line
module.exports = repeatString;
