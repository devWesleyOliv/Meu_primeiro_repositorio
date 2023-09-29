const balance = 100;

function sumBalance(value) {
    return value + balance;
};

function subBalance(value) {
    return balance - value ;
}

function multBalance(value) {
    return value * balance
}

function divBalance(value) {
    return balance / value
}

console.log(sumBalance(250));
console.log(subBalance(25));
console.log(multBalance(23));
console.log(divBalance(45));
