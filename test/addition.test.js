const add = require("../src/addition");

describe("Addition Test Suite", () => {

    it("Should add the numbers correctly", () => {
        expect(add(1, 2)).toBe(3);
    })

    it("should not equal anything else", () => {
        expect(add(1, 2)).not.toBe(1);
    });

});