import { livros } from './listaLivros.js';
import  menorValor  from './menorValor.js'; // precisa arrumar o export
import troca from './selectionTroca.js';

//1
//for (let atual = 0; atual < livros.length -1; atual++) {
    //let menor = menorValor(livros, atual)

    //let livroAtual = livros[atual];
    //console.log('posição atual', atual)
    //console.log('livro atual', livros[atual])
    //let livroMenorPreco = livros[menor];
    //console.log('livro menor preço', livros[menor])

    //livros[atual] = livroMenorPreco   //guardar uma informação um dado
    //livros[menor] = livroAtual        //troca os dados de lugares no array
//}
//console.log(livros);

//livros.forEach((livro) => {
    
  //})

 // livros.forEach((livro, indice) => {
    //let menor = menorValor(livros, indice)

 //let livroAtual = livros[indice];
 //let livroMenorPreco = livros[menor];

 //livros[indice] = livroMenorPreco
 //livros[menor] = livroAtual
//})

//livros.forEach((_, indice) => {
   //let menor = menorValor(livros, indice)
    //troca(livros );
 // })
  
 // console.log(livros)
// resolução da professora cheguei no mesmo resultado mais ainda nao estou entendendo muito bem.
  for (let atual = 0; atual < length; atual++) {
   let menor = menorValor(livros, atual);

   troca(livros, atual, menor);
 }
 console.log(livros);