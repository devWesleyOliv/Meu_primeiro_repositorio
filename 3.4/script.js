const menu = require("./menu");

function printSandwiches() {
  for (sandwiche of menu.sandwiches) {
    console.log(sandwiche.name);
  }
}
printSandwiches();

console.log("---------");

const newItem = {
  name: "X-Infarto",
  price: 57.9,
  ingredients: [
    "42 hambúrgueres",
    "queijo cheddar",
    "molho especial",
    "cebola",
    "azeitona preta",
    "pão",
    "bacon",
    "7 ovos",
    "calabresa",
  ],
  calories: 45800,
};

menu.sandwiches.push(newItem);
printSandwiches();

console.log("---------");

///const printProperty = category => `The ${category}`;
///const printProperty = (category) => `The ${category}`;
const printProperty = (category) => {
  return `The ${category}`;
};

console.log(printProperty("sandwiches"));
console.log("--------");

const addProperty = (category, value) => {
  for (let index = 0; index < menu[category].length; index += 1) {
    const item = menu[category][index];
    if (item.price >= value) {
      item["isExpensive"] = "Muito Caro";
    } else {
      item["isExpensive"] = "Ta barato";
    }
  }
};

addProperty('sandwiches', 25);
console.log(menu.sandwiches);

console.log('-----')

console.log(Object.keys(menu.sandwiches));
console.log('-----')

console.log(Object.values(menu.sandwiches));
console.log('-----')

console.log(Object.entries(menu.sandwiches));

console.log(menu.sandwiches.keys())
console.log('-----')

///for(key of menu.sandwiches.keys()){
    ///console.log(menu.sandwiches[key]);
///};

function discount(category, nome, percent) {
    if(nome === 'Lucas' || nome === 'Allex'){
        for (let index = 0; index < menu[category].length; index+= 1) {
            let object = menu[category][index];
            
            object.price = (object.price - (object.price * percent)).toFixed(2);
        }
    }
}
console.log('111xablau');
console.log(menu.sandwiches);
console.log('222xablau');
discount('sandwiches', 'Lucas', 0.5)
console.log(menu.sandwiches);