let userName: string;
let userAge: number;

//... 

userName = 'testing';
userAge = 0;

function add(a:number, b=5) {
  return a + b;
};

add(10);
add(10, '5');

