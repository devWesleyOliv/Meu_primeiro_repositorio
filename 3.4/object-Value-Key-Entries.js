const animal = {
    name: 'Jade',
    idade: 10,
    comida: 'Petisco',
}

let keys = Object.keys(animal)
console.log(keys);
console.log(keys[0]);

let values = Object.values(animal)
console.log(values);
console.log(values[1]);

let entries = Object.entries(animal)
console.log(entries);
console.log(entries[2][1]);