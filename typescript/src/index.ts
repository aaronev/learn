const small = 1;
const medium = 2;
const large = 3;

//PascalCase
enum Size { Small = 1, Medium, Large}

let mySize: Size = Size.Medium;

console.log(mySize);

function dfP(inputPrice: number) {
  return inputPrice;
}

dfP(12);

function add(a:any, b:any) { // will not compile because of the ts config must set a: any and b: any or some time.
  return a+b;
}