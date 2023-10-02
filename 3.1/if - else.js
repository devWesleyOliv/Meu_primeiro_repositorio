const beenPrice = 10;
const totalMoney = 100;
let message = '';

if (totalMoney < beenPrice) {
    message = 'Você não possui saldo suficiente :(';
} else if (totalMoney === beenPrice) {
    message = 'Você vai gastar todo o seu dinheiro.';
} else {
    message = 'Pode comprar!';
};

console.log(message);