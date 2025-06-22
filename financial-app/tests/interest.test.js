import { calculateTotalInterest } from "../src/utils";

describe("calculateTotalInterest", () => {
  it("calculates the total interest for a list of investments", () => {
    const investments = [
      { amount: 1000, rate: 5, years: 2 },
      { amount: 2000, rate: 3, years: 4 }
    ];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(340);
  });
});

const { calculateTotalInterest } = require("../src/utils");

// additional test cases for edge scenarios, such as investments with zero years or zero rate
describe("calculateTotalInterest", () => {
  it("calculates the total interest for a list of investments", () => {
    const investments = [
      { amount: 1000, rate: 5, years: 2 },
      { amount: 2000, rate: 3, years: 4 }
    ];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(340);
  });

  it("returns 0 for an empty list of investments", () => {
    const investments = [];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(0);
  });

  it("handles investments with zero years", () => {
    const investments = [
      { amount: 1000, rate: 5, years: 0 }
    ];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(0);
  });

  it("handles investments with zero rate", () => {
    const investments = [
      { amount: 1000, rate: 0, years: 2 }
    ];

    const totalInterest = calculateTotalInterest(investments);

    expect(totalInterest).toBe(0);
  });
});