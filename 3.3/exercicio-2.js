const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustumers (customer) {
    if (typeof customer != 'string'){
        return 'o parâmetro passado deve ser do tipo strung!';
    }


    trybeBankCustomers.push(customer)
    return 'Pessoa adicionada com sucesso!';

};

console.log(addCustumers(true));
console.log(addCustumers('Joaquim'));
console.log(trybeBankCustomers);