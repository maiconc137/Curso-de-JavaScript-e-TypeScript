let a = 'a'; // b
let b = 'b'; // c
let c = 'c'; // a

console.log(a, b, c);

let x = null;

x = a;
a = b;
b = c;
c = x;

console.log(a, b, c)