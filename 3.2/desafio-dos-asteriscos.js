let n = 5;
let size = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    inputLine = inputLine + symbol;
  }
  
  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);
  }
  
  console.log("------------");
  ///piramide de asteriscos
  
  for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
    inputLine = inputLine + symbol;
    console.log(inputLine);
  }

///piramide de asteriscos

console.log("------------");
console.log("             ");

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}