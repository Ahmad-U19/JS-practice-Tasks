var arr=[1,2,3,4,5,6];
var arr2=[];
var index=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr2[index]=arr[i];
        index++;
    }
}
console.log(arr2);