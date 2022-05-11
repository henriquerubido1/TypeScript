"use strict";
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	// role is a tuple, which is a variable type that is
// 	// is similar to an array, but with pre-determined 
// 	// length and value types
// 	role: [number, string];
// } = {
// 	name: 'henrique',
// 	age: 20,
// 	hobbies: ['Sports', 'Cooking'],
// 	role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum is a variable type which creates a sort of object
// in which the keys are values that are incremented by one
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Test;
(function (Test) {
    Test[Test["TEST1"] = 7] = "TEST1";
    Test[Test["TEST2"] = 8] = "TEST2";
    Test[Test["TEST3"] = 9] = "TEST3";
})(Test || (Test = {}));
;
var Test2;
(function (Test2) {
    Test2["STR1"] = "STR1";
    Test2[Test2["STR2"] = 0] = "STR2";
    Test2[Test2["STR3"] = 1] = "STR3";
})(Test2 || (Test2 = {}));
console.log(Test.TEST2);
// any type allows you not to specify the type of the variable
let testAny;
testAny = 'aaa';
console.log(testAny);
const person = {
    name: 'henrique',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// sets an array of strings
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person);
