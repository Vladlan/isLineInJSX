import ts from "typescript";
import fs from "fs";

const propRegex = /[a-zA-Z]+\d+=/g;

const isLineContainsProp = (line: string) => {
  return line.trim().match(propRegex);
};

export function isLineInJSX(filePath: string, lineNumber: number): boolean {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );
  const lines = fileContent.split("\n");
  const line = lines[lineNumber - 1];
  console.log(`[LOG] line ${lineNumber} - ${line}`);

  const lineStart = lines.slice(0, lineNumber - 1).join("\n").length + 1;
  const lineEnd = lineStart + lines[lineNumber - 1].length;
  function nodeContainsLine(node: ts.Node) {
    if (!node) return false;
    return node.getStart(sourceFile) <= lineStart && node.getEnd() >= lineEnd;
  }
  function checkNode(node: ts.Node): ts.Node | undefined {
    if (
      ts.isJsxElement(node) ||
      ts.isJsxFragment(node) ||
      ts.isJsxSelfClosingElement(node)
    ) {
      if (isLineContainsProp(line)) return;
      if (nodeContainsLine(node)) return node;
    }
    return ts.forEachChild(node, checkNode);
  }
  return !!checkNode(sourceFile);
}
