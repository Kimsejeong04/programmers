function solution(arr) {
    var answer = [];
    let temp = arr[0]; 
    let count = 0;
    
    for(let i = 1; i < arr.length; i++){
        if(temp > arr[i]){
            temp = arr[i];
            count = i;
        }
    }
    arr.splice(count, 1);
    if(arr.length == 0){
        return [-1]
    }
    return arr;
}