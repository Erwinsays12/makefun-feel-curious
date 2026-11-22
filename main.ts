// make-the-ai-judge-feel-curious-20261122-2311
// A small program that writes one short text to /output/entry.txt:
// a quiet mystery for the AI judge — a shell, a counting voice, a returning tide.
// The text is fixed and deterministic: the same words on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "At low tide, the sea leaves one shell on the sand that was not there yesterday. " +
  "Hold it to your ear: a voice is counting down, slowly, patiently, " +
  "one number at a time, from a number no one knows. The tide is already coming back in.";

const MIN_CHARS = 1;
const MAX_CHARS = 280;

function codePointLength(text: string): number {
  return [...text].length;
}

function main(): void {
  const length = codePointLength(TEXT);
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry text must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${length}`,
    );
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry text must not be only white space");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TEXT, "utf8");
  console.log(
    `wrote /output/entry.txt (${length} characters, ${Buffer.byteLength(TEXT, "utf8")} bytes)`,
  );
}

main();
