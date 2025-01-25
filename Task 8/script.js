var str="elephantui";

function countVowels(string){
    var count=0;
    var simple
    for(var i=0;i<str.length;i++){
        switch (string[i]) {
            case "a":
                count++;
                break;
            case "e":
                count++;
                break;
            case "i":
                count++;
                break; 
            case "o":
                count++;
                break;    
            case "u":
                count++;
                break;    
            default:
                simple++;
                break;
        }
    }
    return count;
}

var d=countVowels(str);
console.log(d);