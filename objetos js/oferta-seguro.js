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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.values(cliente));

console.log(Object.entries(cliente));

oferecerSeguro(cliente);