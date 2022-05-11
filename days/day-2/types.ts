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

enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Test { TEST1 = 7, TEST2, TEST3 };
enum Test2 { STR1 = 'STR1', STR2 = 0, STR3 }
console.log(Test.TEST2);

// any type allows you not to specify the type of the variable

let testAny: any;
testAny = 'aaa';
console.log(testAny);


const person = {
	name: 'henrique',
	age: 20,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN
};

// sets an array of strings
let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person);
