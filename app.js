import fs from "node:fs/promises";

const contentData = await fs.readFile("./text-files/file-3.txt", "utf-8");

const countWords = {};

contentData.split(" ").forEach((word, i) => {
  if (!countWords[word]) {
    countWords[word] = 1;
  } else {
    countWords[word] += 1;
  }
});

console.log(countWords);
