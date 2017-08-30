// Is a word a palindrome
var isPalindrome = function(str) {
    if (str.length <= 1) {
        return true;
    }
    
    if (str[0] === str[str.length - 1]) {
        return isPalindrome( str.slice(1, str.length - 1) );
    }
    
    return false;
};

console.log(isPalindrome('madam'));