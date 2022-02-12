// const Livro = function(nome, editora, paginas) {
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas

//     this.getNome = function(){
//         return gNome
//     }
//     this.getEditora = function(){
//         return gEditora
//     }
//     this.getPaginas = function(){
//         return gPaginas
//     }
// }

// const GraphQL = new Livro('GraphQL', 'Casa do Codigo', 143)

// console.log(GraphQL.getNome())
// console.log(GraphQL.getEditora())
// console.log(GraphQL.getPaginas())

// //prototype

// const nome = 'Alura'
// // por de baixo dos panos o js fazia da seguinte maneira de
// const temp = new String(nome)

// console.log(temp.toString())

//////////////////////////////////////////////////
// agora usando classes 

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} e um livro da editora ${this.editora} e tem ${this.paginas} paginas.`)
    }
}

const FefeLore = new Livro('A historia de Fernanda', 'Claudia N.', 456)

console.log(FefeLore)
FefeLore.anunciarTitulo()
FefeLore.descreverTitulo()


class LivroColecao extends Livro {
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da colecao ${this.nomeColecao}`)
    }
}

const darlanJunior = new LivroColecao('A incrivel historia de Darlan Jr.', 'Familia Pires')
darlanJunior.descreverColecao()