const subtract = require("../src/subtraction");


describe("Subtraction Test Suite", () => {

    it("should not equal anything else", () => {
        expect(subtract(2, 1)).not.toBe(1);
    });

});