const add = require("./addition");
const multiply = require("./multiplication");

module.exports = function (a, b, c) {
    return multiply(add(a, b), c);
}