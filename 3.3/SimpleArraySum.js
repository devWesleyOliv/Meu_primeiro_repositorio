function simpleArraySum(numbers) {
    let sum = 0;
    for(let index = 0; index < numbers.length; index += 1){
        sum += numbers[index];
    }
    return sum;
}
console.log(simpleArraySum([1, 2, 3, 10, 40]));