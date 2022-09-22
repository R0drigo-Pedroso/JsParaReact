// jeito antigo de usar variáveis
//var meuNome = "Rodrigo";


// jeito moderno de usar variáveis
let meuNome = 'Rodrigo';

// Valor que nunca ira mudar
//const meuNome = "Rodrigo"; // const obriga a inicialização

console.log(meuNome);

console.log('=======================================')

let idade = 20;
let mensagem; //ESCOPO GLOBAL - Sem valor ela se torna global

if (idade >= 18) {
    mensagem = 'É maior de idade!';
} else {
    mensagem = 'É menor de idade';
}

console.log(mensagem)

/* 
let e const: possuem escopo de BLOCO quando declarados dentro de blocos (Condicionais, loops), e escopo GLOBAL quando declarados fora dos blocos

Uma variável/constante em escopo de BLOCO só existe e é acessivel DENTRO do bloco em que fo criada.
*/