function solution(n) {
    var answer = 0;
    var n_str = n.toString().split('');
    n_str.sort((a, b) => b - a);
    return Number(n_str.join(''));
}