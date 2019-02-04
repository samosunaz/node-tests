const chai = require("chai");
const functions = require("./../functions");

describe("add2Numbers()", () => {
  it("should add 2 numbers", () => {
    const x = 1;
    const y = 2;

    const sum = x + y;

    const sumByFunction = functions.add2Numbers(x, y);

    chai.expect(sumByFunction).to.be.equal(sum);
  });
});

describe("divide2Numbers()", () => {
  it("should divide 2 numbers", () => {
    const x = 1;
    const y = 2;

    const division = x / y;

    const divideByFunction = functions.divide2Numbers(x, y);

    chai.expect(divideByFunction).to.be.equal(division);
  });
});

describe("multiply2Numbers()", () => {
  it("should multiply 2 numbers", () => {
    const x = 1;
    const y = 2;

    const product = x * y;

    const multiplyByFunction = functions.multiply2Numbers(x, y);

    chai.expect(multiplyByFunction).to.be.equal(product);
  });
});

describe("multiply2Numbers()", () => {
  it("should multiply 2 numbers", () => {
    const x = 1;
    const y = 2;

    const substraction = x - y;

    const substractByFunction = functions.substract2Numbers(x, y);

    chai.expect(substractByFunction).to.be.equal(substraction);
  });
});
