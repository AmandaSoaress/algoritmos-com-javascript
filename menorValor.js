const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}
//let atual= 0;foi usada a de dentro do for


//let maisCaro = 0;
//for (let atual = 0; atual < livros.length; atual++) {
// if (livros[atual].preco > livros[maisCaro].preco) {
//maisCaro = atual
//}
//}

//console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)

module.exports = menorValor;