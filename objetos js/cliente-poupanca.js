function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor) {
        this.saldo += valor;
    }
}

function ClientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca('ju','58944372891','ju@gmail.com',100,200);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

//depositando 35 reais
ju.depositarPoup(35);

console.log(ju);