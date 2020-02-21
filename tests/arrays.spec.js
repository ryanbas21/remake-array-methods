import * as arr from "../src/arrays";

describe("Rewriting array methods", () => {
    it("map should work on arrays", () => {
        const expected = arr.map(a => a + 1, [1, 2, 3]);
        expect(expected).toEqual([2, 3, 4]);
    });
    it("should filter an array", () => {
        const expected = arr.filter(a => a < 2, [1, 2, 3]);
        expect(expected).toEqual([1]);
        expect(expected).toHaveLength(1);
    });
    it("should pass if at least one value is truthy", () => {
        const expected = arr.some(a => a == 1, [1, 2, 3]);
        expect(expected).toBe(true);
        const falseExpected = arr.some(a => a > 100, [1, 2, 3]);
        expect(falseExpected).toBe(false);
    });
    it("should pass if every value passes the predicate", () => {
        const expected = arr.every(a => a <= 3, [1, 2, 3]);
        expect(expected).toBe(true);
        const falseExpected = arr.every(a => a > 100, [1, 2, 3]);
        expect(falseExpected).toBe(false);
    });
    it("should reduce a list of numbers into one sum", () => {
        const expected = arr.reduce((acc, curr) => acc + curr, 0, [1, 2, 3]);
        expect(expected).toEqual(6);
    });
    it("should reduce a list of numbers into an object", () => {
        const expected = arr.reduce(
            (acc, curr) => {
                acc[curr] = curr;
                return acc;
            },
            {},
            [1, 2, 3]
        );
        expect(expected).toEqual({ "1": 1, "2": 2, "3": 3 });
    });
    it("should return the length of array", () => {
        const expected = arr.length([1, 2, 3]);
        expect(expected).toEqual(3);
    });
    it("should shift a value out of an array", () => {
        const expected = arr.shift([1, 2, 3]);
        expect(expected).toEqual([2, 3]);
    });
    it("should unshift a value out of an array", () => {
        const expected = arr.unshift(1, 2, 3, [4, 5, 7]);
        expect(expected).toEqual([1, 2, 3, 4, 5, 7]);
        expect(expected).toHaveLength(6);
    });
    it("should pop an element off end of an array", () => {
        let a = [1, 2, 3];
        const expected = arr.pop(a);
        expect(expected).toEqual(3);
        expect(a).toHaveLength(2);
    });
});
