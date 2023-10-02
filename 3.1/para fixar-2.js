const grade = 59
let message = '';

if (grade >= 80) {
    message = 'Parabéns você foi aprovado(a)';
} else if (grade >= 60 && grade < 80) {
    message = 'Você está na nossa lista de espera.';
} else {
    message = 'Infelizmente, você reprovou';
};

console.log(message);