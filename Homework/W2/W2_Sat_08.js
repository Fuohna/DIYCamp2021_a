function isPalindrome(num) {
    let str = String(num);
    let i = 0;
    let j = str.length - 1;

    while (j > i) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }

    return true;
}

console.log("12321 => " + isPalindrome(12321));
console.log("12312 => " + isPalindrome(12312));