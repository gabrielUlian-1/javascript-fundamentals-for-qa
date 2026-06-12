/* 

pessoas podem pegar livros emprestados em uma biblioteca. Cada livro emprestado contabiliza um total de 3 dias a mais para a entrega dos livros.
o numero de dias e um totalizador, ou seja, posso pegar 3 livros e devolver todos os três em ate 9 dias. Preciso de uma função que seja capaz de retornar a quantidade de dias que terei
para devolver os livros que irei pegar emprestado.

    1. Entrada
    - Quantidade de Livros

    2. Processamento
    - Vó, faça o calculo de quantidade de livros * 3

    3. Saida
    - Quantidade de Dias

*/

export function calculaDias (qtdeLivros){

return qtdeLivros * 3;

}
