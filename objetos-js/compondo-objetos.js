const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345553455",
    email:"andeisr1@gmail.com",
    fones:['55912345498', '55438247384']
}

cliente.dependente = {
    nome:'Sara',
    parentesco:'Filha',
    dataNasc:'20/03/2011'
}

console.log(cliente);

cliente.dependente.nome = 'Sara Silva';

console.log(cliente.dependente);