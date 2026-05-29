// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

try {
  const data = fs.readFileSync("myfile.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log("--------------------------");

fs.readFile("myfile.txt", "utf8", (err, data) => {
  console.log("File content:", data);
});

// Expensive operation
let sum = 0;

for (let i = 0; i < 10000000000; i++) {
  sum += i;
}

console.log("Expensive operation done");
