const mcDonalds = {
  bigMac: 26.9,
  bigTasty: 39.9,
  mcFritasMedia: 13.9,
  topSundayChocolate: 11.9,
  isDelicious: true,
  city: "Curitiba",
  neighborhood: {
    'Jd Paraiso': 'Rua America 40',
    'Jd Del Ray': 'Rua Dos Fones de Ouvido 10',
    'Jd Cascatinha': 'Rua Alexandre 50'
  },
  unit: "Park Shopping Barigui",
};

console.log(mcDonalds.city);
console.log(mcDonalds['city']);

console.log(mcDonalds.neighborhood['Jd Cascatinha']);

