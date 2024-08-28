import { isInsideCurlyBraces } from "./isInsideCurlyBraces";

const fileToTest = "./src/genericReactComponent.tsx";

const inputOutput: [number, boolean][] = [
  [1, false],
  [43, false],
  [44, false],
  [52, false],
  [56, false],
  [64, false],
  [64, false],
  [65, true],
  [69, false],
  [70, false],
  [76, false],
  [79, false],
  [80, false],
  [82, false],
  [91, false],
  [98, false],
  [99, false],
  [100, true],
  [102, true],
  [105, true],
  [113, false],
  [999, false],
];

describe("isInsideCurlyBraces", () => {
  inputOutput.forEach(([input, output]) => {
    it(`line ${input} - ${output}`, () => {
      expect(isInsideCurlyBraces(fileToTest, input)).toBe(output);
    });
  });
});
