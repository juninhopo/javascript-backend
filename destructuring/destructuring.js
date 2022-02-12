const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

// metodo grande
// const num1 = 1
// const num2 = 2

//metodo menor utilizando o destructuring
const [num1, num2, ...outrosnumeros] = [1, 2, 3, 4, 5, 6]

console.log(numeros)

console.log(num1, num2, ...outrosnumeros)

// ... serve para entrar no obj(const, variavel)

// se nao tiver valor ele retorna o padrao
// se passar valor ele retorna o valor 
const [nome1 = 'darlan'] = []

console.log(nome1)

const pessoa = {
    nome: 'fernanda',
    idade: '22'
}

const pessoaComTelefone = {
    ...pessoa,
    telefone: +5567994857485
}

console.log(pessoa, pessoaComTelefone)

// nesse jeito com a chaves ele pega o valor de pessoa que tem o nome da variavel, no caso ele pegou o nome === pessoa.

// const nome = pessoa.nome
const { nome } = pessoa

console.log(nome)

// exemplo com o jeito normal
const idade = pessoa.idade
console.log(idade)




function imprimeDados({ nome, idade }) {
    console.log(nome, idade)
}

imprimeDados(pessoa)