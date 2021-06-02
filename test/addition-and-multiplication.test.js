const addAndMultiply = require("../src/add_and_multiply");
const add = require("../src/addition");
const multiply = require("../src/multiplication");

describe("Add and Multiply test suite", () => {
    it("Should add and multiply correctly", () => {
        expect(addAndMultiply(1, 2, 3)).toBe(multiply(add(1, 2), 3));
    })
});