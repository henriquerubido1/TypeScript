// an unknwon variable is a bit more precise
// than an any variable 

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Henri';

if (typeof userInput === 'string') {
  userName = userInput;
}
