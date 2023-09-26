import calculator from "../src/calculator";

describe("Calculator", () => {
  it("soma 1 + 2 para ser igual a 3", () => {
    // Aqui vai o código desse teste
    expect(calculator.sum(1, 2)).toBe(3);
  });

  it("subtrai 2 - 1 para ser igual a 1", () => {
    // Aqui vai o código desse teste
    expect(calculator.sub(2, 1)).toBe(1);
  });

  it("multiplica 1 * 2 para ser igual a 2", () => {
    // Aqui vai o código desse teste
    expect(calculator.mul(1, 2)).toBe(2);
  });

  it("divide 2 / 1 para ser igual a 2", () => {
    // Aqui vai o código desse teste
    expect(calculator.div(2, 1)).toBe(2);
  });
});
