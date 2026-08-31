function solution(n) {
    var answer = [];
    let temp = n.toString();
    for(let i = temp.length - 1; i >= 0; i--){
        answer.push(Number(temp[i]));
    }
    return answer;
}