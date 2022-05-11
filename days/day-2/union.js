"use strict";
// union and literal type examples bellow
// union type accepts more than one type of variable
// input1, input2 and resultConversion are union type variables
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    {
        return result.toString();
    }
}
const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedAges);
console.log(combinedNames);
