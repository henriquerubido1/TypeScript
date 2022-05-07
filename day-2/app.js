function types(num, str, bool) {
    console.log("".concat(num, " is a ").concat(typeof num, ", ").concat(str, " is a ").concat(typeof str, " and ").concat(bool, " is a ").concat(typeof bool));
}
var number = 4;
var string = 'a';
var boolean = true;
types(number, string, boolean);
