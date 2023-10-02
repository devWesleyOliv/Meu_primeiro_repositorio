const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index];
  };
  
  let average = sum / numbers.length;
  
  console.log(average);

  for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
  };
  
  result = result / numbers.length;
  
  if (result > 20) {
    console.log('O valor da média aritmética é maior que 20');
  } else {
    console.log('O valor da média aritmética é menor ou igual a 20');
  };

  let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
};

console.log(higherNumber);