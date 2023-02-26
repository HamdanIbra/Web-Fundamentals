function reverse(arr) {
    var arrnew=[];
    
    for (var i=arr.length-1;i>=0;i--){
        arrnew.push(arr[i]);
        
    }
    arr=arrnew;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
