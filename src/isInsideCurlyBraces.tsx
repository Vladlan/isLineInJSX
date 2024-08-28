import fs from "fs";

export const isInsideCurlyBraces = (
  filePath: string,
  lineNumberFromEditor: number
): boolean => {
  if (lineNumberFromEditor <= 0)
    throw new Error("Line number should be greater than 0");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n");
  const lineNumber = lineNumberFromEditor - 1;

  const limit = Math.min(lines.length - lineNumber, lineNumber);
  for (let i = 1; i < limit; i++) {
    const lineToCheckBot = lineNumber + i;
    const lineToCheckTop = lineNumber - i;
    const resTop = checkLineTop(lines, lineToCheckTop);
    const resBot = checkLineBot(lines, lineToCheckBot);
    if (resTop !== undefined || resBot !== undefined)
      return Boolean(resBot || resTop);
  }

  return false;
};

function checkLineTop(lines: string[], lineNumber: number) {
  if (lines[lineNumber].includes("={") && !lines[lineNumber].includes("}"))
    return true;
  if (lines[lineNumber].includes("=>")) return true;
  if (/[<\/>}\[\]]/.test(lines[lineNumber])) return false;
}

function checkLineBot(lines: string[], lineNumber: number) {
  if (/[<\/>{\[\]]/.test(lines[lineNumber])) return false;
  if (lines[lineNumber].includes("}")) return true;
}
