const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const M =  Number(input[0]);
const cups = [0, 1, 2, 3];

for(let i = 1; i <= M; i++){
    const [x, y] = input[i].split(' ').map(Number);
    
    const temp = cups[x];
    cups[x] = cups[y];
    cups[y] = temp;
} 

console.log(cups.indexOf(1));