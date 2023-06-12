import {livros} from './listaLivros.js';
import {troca} from './troca.js';

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
      let analise = atual;
      while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
        troca(lista, analise);
        analise--
      }
    }
    console.log(lista);
   }
insertionSort(livros);
//teste de mesa (DESK CHECKING)
//Faça como eu fiz: Extraindo funções

