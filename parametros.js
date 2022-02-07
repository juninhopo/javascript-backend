// parametros de funcao 

function soma(num1,num2) {
    return num1+num2;
}

console.log(soma(1,2));
console.log(soma(234,234));
console.log(soma(2,543));
console.log(soma(-240,348));
console.log(soma(32,231));
console.log(soma(23,586));

// parametros x argumentos

// ordem dos parametros

function somaTexto(txt1,txt2) {
    return txt1+txt2;
}

console.log(somaTexto('darlan', ' e fernanda'));

// 

function multiplica(num3,num4) {
    return num3*num4;
}

console.log(multiplica(31,665));
console.log(multiplica(31,665), soma(2,45));

function multiplica2(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica2(soma(4,5)));

