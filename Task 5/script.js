var a="I am Ahmad";
var le=a.length;
function checkLength(s){
    var l=0;
    for (let index = 0; index<le; index++) {
        l++;
    }
    return l;
}
var d=checkLength(a);
console.log(d);