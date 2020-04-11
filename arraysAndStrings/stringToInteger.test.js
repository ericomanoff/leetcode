const { myAtoi } = require("./stringToInteger");
describe("String To Integer", () => {
  it("should convert a string to an integer", () => {
    expect(myAtoi("42")).toEqual(42);
  });
  it("should work", () => {
    expect(myAtoi("   -42")).toEqual(-42);
  });
  it("should work", () => {
    expect(myAtoi("4193 with words")).toEqual(4193);
  });
  it("should work", () => {
    expect(myAtoi("words and 987")).toEqual(0);
  });
  it("should work", () => {
    expect(myAtoi("-91283472332")).toEqual(-2147483648);
  });
});
