const arrayTwoMinNumbersSum = require("./array-two-min-numbers-sum");

describe("array-two-min-numbers", () => {
  it("should return -10", () => {
    const testingArray = [-10, 2, 5, 0];
    const expected = -10;

    const result = arrayTwoMinNumbersSum(testingArray);

    expect(result).toEqual(expected);
  });

  it("should return -20", () => {
    const testingArray = [10, -9, 20, Infinity, 30, -10, 2, 5, 0, -10];
    const expected = -20;

    const result = arrayTwoMinNumbersSum(testingArray);

    expect(result).toEqual(expected);
  });

  it("should return 20", () => {
    const testingArray = [11, 20, 10, 1000, 10];
    const expected = 20;

    const result = arrayTwoMinNumbersSum(testingArray);

    expect(result).toEqual(expected);
  });

  it("should return -Infinity", () => {
    const testingArray = [11, 20, 10, 1000, 10, -Infinity];
    const expected = -Infinity;

    const result = arrayTwoMinNumbersSum(testingArray);

    expect(result).toEqual(expected);
  });

  it("should throw error when array contains not only numbers", () => {
    const testingArray = [11, 20, 10, "something else", 10];

    expect(() => arrayTwoMinNumbersSum(testingArray)).toThrow(
      new Error("Not valid numbers array")
    );
  });

  it("should throw error when array is empty", () => {
    expect(() => arrayTwoMinNumbersSum([])).toThrow(
      new Error("Array should not be empty")
    );
  });
});
