const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let sum = 0;
let heigherNumber = numbers[0];

///Exercicio - 1
console.log("------------");

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
console.log("------------");

///Exercicio - 2
console.log("------------");

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
console.log(result);
console.log("------------");

///Exercicio - 3
console.log("------------");

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
let average = sum / numbers.length;

console.log(average);
console.log("------------");

///Exercicio - 4
console.log("------------");

if (result > 20) {
  console.log("O valor é maior que 20");
} else {
  console.log("O valor é menor que 20");
}

console.log("------------");

///Exercicio - 5
console.log("------------");

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > heigherNumber) {
    heigherNumber = numbers[index];
  }
}
console.log(heigherNumber);
console.log("------------");

///Exercicio - 6

console.log("------------");

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}
if (result === 0) {
  console.log("Nenhum valor impar encontrado");
} else {
  console.log(result);
}
console.log("------------");
