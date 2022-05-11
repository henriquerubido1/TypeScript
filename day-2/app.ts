// an unknwon variable is a bit more precise
// than an any variable 

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Henri';

if (typeof userInput === 'string') {
  userName = userInput;
}

// never is different from void, since never 
// specifies that the function returns nothing

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}

generateError('An error occured!', 500);