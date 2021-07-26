function romanToInt(roman) {
    var a = [];
    var len = roman.length;

    for (let i = 0; i < len; i++) {
        if (roman[i] == 'I')
            a[i] = 1;
        else if (roman[i] == 'V')
            a[i] = 5;
        else if (roman[i] == 'X')
            a[i] = 10;
        else if (roman[i] == 'L')
            a[i] = 50;
        else if (roman[i] == 'C')
            a[i] = 100;
        else if (roman[i] == 'D')
            a[i] = 500;
        else if (roman[i] == 'M')
            a[i] = 1000;
    }

    let res = a[len - 1];

    for (let i = len - 1; i > 0; i--) {
        if (a[i] > a[i - 1])
            res = res - a[i - 1];
        else if (a[i] === a[i - 1] || a[i] < a[i - 1])
            res = res + a[i - 1];
    }
    return res;
}

console.log(romanToInt("VIM"));
console.log(romanToInt("MMXXI"));