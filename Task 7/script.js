var array=[44,11,23,99];

function Max(s){
    var maxi=0;
    for(let i=0;i<array.length;i++){
        if(s[i]>maxi){
            maxi=s[i];
        }
    }
    return maxi;
}

var d=Max(array);
console.log(d);