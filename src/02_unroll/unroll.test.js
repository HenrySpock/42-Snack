const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });
});

describe("unroll function tests", () => {

  it("should be defined", () => {
    expect(unroll).toBeDefined();
  });

  it("should unroll the 'square' array in spiral order", () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = unroll(square);
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(result).toEqual(expected);
  });

  it("should unroll the 'smallerSquare' array in spiral order", () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const result = unroll(smallerSquare);
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(result).toEqual(expected);
  });

  it("should return an empty array when given an empty array", () => {
    const result = unroll([]);
    expect(result).toEqual([]);
  });
});
