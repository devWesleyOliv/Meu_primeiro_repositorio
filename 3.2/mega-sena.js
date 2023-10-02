//sorteio dos números
let lotteryNumbers = [];

let allexGame = [7, 18, 23, 28, 35, 49];
let lucasGame = [11, 21, 37, 12, 1, 3];
let eduardoGame = [22, 32, 52, 12, 4, 2];
let AllGames = [allexGame, lucasGame, eduardoGame]

for (let index = 0; index < 6; index += 1) {
    let randomNumber = (Math.ceil(Math.random() * 60))
    if (lotteryNumbers.includes(randomNumber)) {
        index -= 1;
    } else {
        lotteryNumbers.push(Math.ceil(Math.random() * 60))
    }
}

numberOfHits = 0;
let hits = [];

for (let game of AllGames) {

    for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1) {
        console.log(`indexLottery ----> ${indexLottery}`);
        for (let indexGame = 0; indexGame < 6; indexGame += 1) {
            if (lotteryNumbers[indexLottery] === game[indexGame]) {
                numberOfHits++;
                hits.push(lotteryNumbers[indexGame]);
            }
        }
    }
//Mostrar os resultados

console.log('-----------------------')
console.log('Número de sorteados:', lotteryNumbers);
console.log('Jogo:', game);
console.log('Quantidade de acertos', numberOfHits);
console.log('Números acertados:', hits);
console.log('-----------------------');

}



//Passe para String Literals