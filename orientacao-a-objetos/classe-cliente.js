class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

const andre = new Cliente('andre', 'andre@gmail.com','32145335432',100)
const darlan = new Cliente('darlan', 'darlan@gmail.com','32144235432',100)

andre.exibirSaldo()

console.log(andre)
console.log(darlan)