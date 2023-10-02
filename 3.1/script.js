const pi = 3.14
let num1 = 10
let num2 = 8
"= simbolização de atribuição"
"== simbolização de comparação"
console.log(num1);
console.log(num2);
console.log(`${num1} > ${num2}`);
console.log('---------');

if(`${num1} < ${num2}`) {
    console.log('Sim')
}
else if (num1 == num2){
    console.log('Sim, os números são iguais')
} else {
    console.log(`${num1} > ${num2}`);
    console.log('não');
}
