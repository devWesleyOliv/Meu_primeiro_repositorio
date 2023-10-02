const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customers, newCustomers) {
    for (let index = 0; index < newCustomers.length; index += 1) {
        if (typeof newCustomers[index] === 'string') {
            customers.push(newCustomers[index]);
        } else {
          return 'Todos os valores precisam ser strings.';
        }
      }
      return trybeBankCustomers;
};
console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor']));
console.log(addCustomers(trybeBankCustomers, ['Miranda', 78]));