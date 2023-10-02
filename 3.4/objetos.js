const products = [
  {
    product: "Leite",
    price: 3.4,
    available: true,
    categories: ["Laticínios", "Bebidas"],
    stock: {
      quantity: 100,
      location: "corredor 2, Prateleira C",
    },
    supplier: {
      nome: "Laticínios Delicia",
      contact: {
        phone: "987654321",
        emaul: "contato@laticiosdelicia.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 4 },
      { user: "Cliente2", rating: 5 },
      { user: "Cliente3", rating: 4 },
    ],
  },
  {
    product: "Cereal",
    price: 4.99,
    available: true,
    categories: ["Café da manhã", "Mercearia"],
    stock: {
      quantity: 50,
      location: "corredor 4, Prateleira A",
    },
    supplier: {
      nome: "Comidas Saudáveis Ltda",
      contact: {
        phone: "123456789",
        emaul: "contato@comidassaudaveis.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 3 },
      { user: "Cliente2", rating: 4 },
      { user: "Cliente3", rating: 5 },
    ],
  },
  {
    product: "Sabonete",
    price: 2.99,
    available: true,
    categories: ["Higiene", "Cosméticos"],
    stock: {
      quantity: 200,
      location: "corredor 1, Prateleira B",
    },
    supplier: {
      nome: "Indústria de Cosméticos Beleza Pura",
      contact: {
        phone: "987654321",
        emaul: "contato@belezapura.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 4 },
      { user: "Cliente2", rating: 5 },
      { user: "Cliente3", rating: 4 },
    ],
  },
  {
    product: "Café",
    price: 8.99,
    available: true,
    categories: ["Mercearia", "Bebidas"],
    stock: {
      quantity: 150,
      location: "corredor 3, Prateleira C",
    },
    supplier: {
      nome: "Café Delicioso",
      contact: {
        phone: "012345678",
        emaul: "contato@cafedelicioso.com",
      },
    },
    reviews: [
      { user: "Cliente1", rating: 4 },
      { user: "Cliente2", rating: 5 },
      { user: "Cliente3", rating: 4 },
    ],
  },
];

const countProducts = (array) => {
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    count += array[index].stock.quantity;
  }
  return count;
};
const addProperty = (array, name) => {
  for (let index = 0; index < array.length; index += 1) {
    array[index][name].push({ user: "Cliente4", rating: 5 });
  }
};

console.log(countProducts(products));
addProperty(products, "reviews");
console.log(products[0]);
