const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345553455",
    email:"andeisr1@gmail.com",
    fones:['55912345498', '55438247384'],
    dependentes: [{
        nome:'Sara Silva',
        parentesco:'Filha',
        dataNasc:'20/03/2011'
    }]
}

cliente.dependentes.push({
    nome:'Sonia Maria',
    parentesco:'Filha',
    dataNasc:'15/05/2014'
})

console.log(cliente.dependentes)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '15/05/2014')

console.log(filhaMaisNova[0].nome);