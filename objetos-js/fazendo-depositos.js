const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"12345553455",
    email:"andeisr1@gmail.com",
    fones:['55912345498', '55438247384'],
    dependentes: [
        {
            nome:'Sara Silva',
            parentesco:'Filha',
            dataNasc:'20/03/2011'
        },{
            nome: 'Samia Maria',
            parentesco: 'Filha',
            dataNasc:'15/05/2014'
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo);

cliente.depositar(30);

console.log(cliente.saldo)