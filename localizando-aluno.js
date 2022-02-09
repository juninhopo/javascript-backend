const alunos = ['joao', 'juliana', 'caio', 'ana'];

const medias = [10,7,9,6];

// includes -> boolean
// indexOf -> 3 -> retorna a posicao da ana dentro do array

let listaDeNotasEAlunos = [alunos,medias];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ', sua media e ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno nao esta cadastrado";
    }
}

console.log(exibeNomeNota("ana"));