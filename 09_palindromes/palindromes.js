const palindromes = function (str) {
    str = str.replace(/\s/g, '');
    let str2 = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-zA-Z]/i)) {
            str2 += str[i].toLowerCase();
        } else {
            
        }
    }

    for (let i = 0; i < (str2.length/2); i++) {
        if(str2[i] !== str2[str2.length - (1 + i)]) {
            return false;
        }
        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
