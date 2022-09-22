// Concatenação
const nome = "Rodrigo";
const sobrenome = "Pedroso";

let idade = 30;
let cidade = "São Paulo";
let estado = "SP";

/* Meu nome é Rodrigo Pedroso, tenho 30 anos e moro atualmente na cidade de São Paulo SP */

let mensagem = "Meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos e moro atualmente de " + cidade + " - " + estado + ".";

console.log(mensagem);

console.log('=================================')

// Método template Literal/string
let mensagem2 = `Meu nome é <br class="teste"> ${nome.toUpperCase()} ${sobrenome.toUpperCase()} </br> tenho ${idade} anos e moro atualmente na ${cidade} - ${estado}`;
console.log(mensagem2)