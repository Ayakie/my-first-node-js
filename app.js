'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 0; i <= number; i++) {
    sum += i;
}
console.log(sum)