function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}


console.log(isPalindrome("olaalo"));  
console.log(isPalindrome("olo")); 
