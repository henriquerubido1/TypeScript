"use strict";
// an unknwon variable is a bit more precise
// than an any variable 
let userInput;
let userName;
userInput = 5;
userInput = 'Henri';
if (typeof userInput === 'string') {
    userName = userInput;
}
// never is different from void, since never 
// specifies that the function returns nothing
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
