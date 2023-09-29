function sortNumbers(numbers) {
  let new_bigger;

  for (let index = 0; index <= numbers.length; index += 1) {
    for (let compare = index + 1; compare < numbers.length; compare +=1){    
      if (numbers[index] > numbers[compare]) {
        new_bigger = numbers[index];
        numbers[index] = numbers[compare];
        numbers[compare] = new_bigger;
      }
    }
  }
  return numbers;
}
console.log(sortNumbers([3, 6, 7, 8, 78, 12, 985490584, 9, 1, 2]));
