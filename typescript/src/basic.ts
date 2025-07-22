let userName: string;
let userAge: number;

//... 

userName = 'testing';
userAge = 0;

function add(a:number, b=5) {
  console.log(a+b);
  return a + b;
};

add(10);
add(10, 3);

let age: string|number = 36;

age = '34';
age = 3;

let hobbies: string[]  = ['sports', 'cooking'];

// hobbies.push(9); numbers are not allowed in the array