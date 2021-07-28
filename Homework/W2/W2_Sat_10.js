var _res = 0;
let len = 0;
var arr = [];

function isSumExponential(num) {
    let _indexNum = 1, _base = 3;

    while (_base <= Math.floor(Math.sqrt(num))) {
        while (Math.floor(num / _base) !== 0) {
            console.log(num / _base);
            if (num % _base === 1 || num % _base === 0) {
                arr.push(num % _base);
                num = Math.floor(num / _base);
            } else {
                _base++;
            }
        }
    }
    len = arr.length;
    _res = _base;
    return _res;
}

console.log(isSumExponential(30));
for (let i = 0; i < len; i++) {
    console.log(arr[i] + "*" + _res + "^" + i + " + ");
}