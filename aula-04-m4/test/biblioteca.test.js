import assert from 'node:assert';
import { calculaDias } from "../src/biblioteca.js";
    it('Apontar 3 livros resultará em 9 dias de livro emprestado', function(){
    // Usar a função 
        const quantidadeDeDias = calculaDias (3);
    // Validar que ela trouxe o retorno esperado
     assert.equal(quantidadeDeDias, 9);
});
    
    it('Apontar 6 livros resultará em 18 dias de livro emprestado', function(){

        const quantidadeDeDias = calculaDias(6);

        assert.equal(quantidadeDeDias, 18)

});