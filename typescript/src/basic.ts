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



userRole = 'guest';

type Roll = 'admin' | 'editor' | 'guest' | 'reader';

let userRole: Roll;

const myFunc = (roll: Roll) => {
  return roll;
}

function adds(a:number, b:number): number {
  return a+b;
};

function log(message: string): void { // returns nothing
  console.log(message);
};

function logAndThrow(errorMessage: string): never { // never means that this function will never complete.
  console.log(errorMessage);
  throw new Error(errorMessage);
};

const logged = logAndThrow('hi');

function performJob(cb: (m: string) => void) {
  // ...
  cb('jobd done');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: (msg: string) => string 
}

let user: User = {
  name: 'Max',
  age: 39,
  greet: () => {
    return;
  },
}

const inputEl = document.getElementById('user-name')! //! is a type script feature that tells ts that the code in front of it will not yield null.

if (!inputEl) {
  throw new Error('Element not found!');
}

console.log(inputEl?.value);

const inputEle = document.getElementById('user-name') as HTMLInputElement | null;

console.log(inputEle?.value);

//unknown type

function process(val:unknown) { // unknown type
  if (typeof val === 'object' 
  && !!val 
  && 'log' in val 
  && typeof val.log === 'function') {

  } {
    val.log();
  }
};

function processAny(val:any) { 
  // any could get a runtime error;
  val.log();
};

function generateError(msg: string) {
  throw new Error(msg)
}