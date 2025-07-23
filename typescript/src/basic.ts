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

let users: (string|number)[];

users = [1, '23'];

// users = [[]] anything other than strings or numbers are not acceptable.

let arrayUsers: Array<string|number>;

arrayUsers = ['123', 123];

let possibleResults: [1|-1, number, string];

possibleResults = [1,-1];

possibleResults = [1, 10];

possibleResults = [-1, 10, 3];

possibleResults = [2, 'asdf'];

possibleResults = [-1, 10, 'asdefsadf'];

let userObj: {
  name: string;
  age: number;
  hobbies?: string[];
  role?: {
    description: string;
    id: number;
  }
} = {
  name: "max",
  age: 30,
}

let val: {} = 'some text';

val = null;

// {} means any value that is not null or undefined.

let data: Record<string, number|string>;

data = {
 test: 1,
}

data = ''; // not acecptable

// restrict
enum Role {
  Admin,
  Editor,
  Guest,
} 

let userRole: 'admin' | 'editor' | 'guest' = 'admin' // Role = 5;

userRole = 'guest';
