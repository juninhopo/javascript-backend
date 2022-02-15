const listaLivros = require('./array2')

function mergeSort(array2) {
    if(array2.length > 1) {
        const meio = Math.floor(array2.length / 2)
        const parte1 = mergeSort(array2.slice(0, meio))
        const parte2 = mergeSort(array2.slice(meio, array2.length))

        array = ordena(parte1, parte2)
    }
    return array2
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]
    
        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    
        return resultado.concat(posicaoAtualParte1 < parte1.length 
            ? parte1.slice(posicaoAtualParte1) 
            : parte2.slice(posicaoAtualParte2))
    }
}



console.log(mergeSort(listaLivros))