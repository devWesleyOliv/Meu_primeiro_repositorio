///Exercicio-1

const player = 
  {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
  };

///Exercicio-2

let message = `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`
console.log(message);

///Exercicio-3

let achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo ${player['bestInTheWorld'].length} vezes`
console.log(achievements);