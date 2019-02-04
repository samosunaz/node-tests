const chai = require("chai");
const add2Numbers = require("./../functions");

describe("add2Numbers()", () => {
  it("should add 2 numbers", () => {
    const x = 1;
    const y = 2;

    const sum = x + y;

    const sumByFunction = add2Numbers(x, y);

    chai.expect(sumByFunction).to.be.equal(sum);
  });
});
