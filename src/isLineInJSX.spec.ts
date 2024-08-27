import { isLineInJSX } from "./isLineInJSX";

const fileToTest = "./src/genericReactComponent.tsx";

const inputOutput: [number, boolean][] = [
  [43, false],
  [44, true],
  [52, true],
  [56, true],
  [64, true],
  [69, true],
  [70, true],
  [76, true],
  [79, true],
  [80, false],
  [82, false],
  [91, true],
];

describe("isLineInJSX", () => {
  inputOutput.forEach(([input, output]) => {
    it(`line ${input} - ${output}`, () => {
      expect(isLineInJSX(fileToTest, input)).toBe(output);
    });
  });
});
