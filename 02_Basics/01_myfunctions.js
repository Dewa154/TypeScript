"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(" ".concat(name, ", ").concat(email, ", ").concat(isPaid));
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
console.log(myValue);
getUpper("Dewanand");
signUpUser("Dewanand", "Dewa@lco.dev", false);
loginUser("d", "d@d.com");
// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
