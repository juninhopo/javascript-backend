function apresentar(nome) {
    return `meu nome e ${nome}`;
}

nome = 'darlan';
console.log(apresentar(nome))

//arrow function

const apresentarArrow = nome => `meu nome e ${nome}`;
console.log(apresentarArrow(nome));

const soma = (num1, num2) => num1 + num2;
console.log(soma(1,2));

// arrow function com mais de 1 linha de instrucao

const somaNumerosPequenos = (num1,num2) => {
    if (num1 || num2 > 10) {
        return 'somente de 1 a 9';
    } else {
        return num1+num2;
    }
}

// hoisting: arrow function se comporta como expressao 