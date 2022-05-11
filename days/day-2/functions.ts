// :number after the parameters assures that the function
// returns a number

function add(n1: number, n2:number): number {
  return n1 + n2;
}

// :void is a function that does not return anything
// in this case, it is not necessary to type :void
// and it is just there to make it explicit


function printResult(num: number): void {
  console.log('Result: ' + num); 
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add(5, 12));

// let combineValues: Function;

// this makes sure that combineValues accepts only a function
// with 2 nums as its parameters and that returns a number

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {
  console.log(result);
})
