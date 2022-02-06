const nome = 'ju';
const idade = 2021-1981;
const cidadeNacimento = 'Sao Paulo';

// const apresentacao = 'meu nome é ' + nome + ', eu tenho ' + idade + ' anos e nasci em ' + cidadeNacimento;

//template string - mil vezes melhor

const apresentacao = `meu nome e ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNacimento}.`;

console.log(apresentacao);