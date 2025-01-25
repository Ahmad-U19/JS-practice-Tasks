function reverseString(str){
    var length=str.length;
    var c;
    for(var i=str.length;i>=0;i--){
        c+=str[i];
    }
    return c;
}

var a="Hello";

var d=reverseString(a);
console.log(d);
