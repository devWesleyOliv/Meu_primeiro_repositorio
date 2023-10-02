let diaper = '';
let babySize = dez;

//Read.me
//Requisito

//'RN <= 4kg'
//'RN+ > 4kg'
//'P > 6kg && <= 8kg'
//'M > 8kg && <= 10kg'
//'G > 10kg && <=13kg'
//'XG > 13kg && <= 15kg'
//'XXG 15kg && 20'
if (babySize != 'number'){
    console.log('Por favor, informe somente numeros');
}else if(babySize <= 4){
    diaper = 'RN';
} else if (babySize > 4 && babySize <= 6){
    diaper = 'RN+';
} else if (babySize > 6 && babySize <= 8){
    diaper = 'P';
} else if (babySize > 8 && babySize <= 10){
    diaper = 'M';
} else if (babySize > 10 && babySize <= 13){
    diaper = 'G';
} else if (babySize > 13 && babySize <= 15){
    diaper = 'XG';
} else if (babySize > 15 && babySize <= 20){
    diaper = 'XXG';
} else {
    console.log('Erro: tamanho não identificado');
}

let resultado = '10' == 10;

console.log(`Abrir a fralda ${diaper}`);
console.log('Resultado é' + resultado);
