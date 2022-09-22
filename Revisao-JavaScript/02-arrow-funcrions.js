// Formas de trabalhar com funções

// Sintaxe tradicional
function nomeDaFuncao() {
    console.log('Funcão de sintaxe tradicional');
}

// Sintaxe de Função anônima 
var nomedaVariavel = function () {
    console.log('Outra forma de declarar função...');
}

// Chamada de Função
nomeDaFuncao();
nomedaVariavel();


console.log('====================================');

/* Crie uma Função que receba dois valores numéricos, calcule a diferença entre eles e retorne o resultado para uma variável externa */

// Revisão de funções passando valores e metodos.
function calcular(valor1, valor2) {
    let resultado = valor1 / valor2;
    return resultado;

    // Opção de [Refatoramento]
    //return valor1 - valor2;
}

let resultado = calcular(5, 2);
console.log(resultado);


console.log('===========================================================')

/* Arrow Function (função "seta/Flecha") Possibilidade diversas sintaxes, e até simplificação */
const exemplo1 = () => {
    console.log('Uma arrw funcion qualquer...')
}

exemplo1();


//Arrow Function com parâmetro

//const ola = (nome) = {}

/* podemos omitir os parenteses no caso de 1 parâmetro.
const ola = nome => { 
    console.log('olá' + nome);
}*/

// Podemos omitir as {} no caso de uma única instrução (Simplificando)
const ola = nome => console.log('Olá ' + nome);
ola('Rodrigo')

// Arrow function valores
/*const metade = (valor) => {
    return valor / 2;
}*/

//Arrow function com retorno IMPLICITO forma simplificada.
const metade = valor => valor / 2;

console.log(metade(100));

console.log('=================================')

// multiplica valores
/*const multiplicaValores = (valor, fator) => {
    return valor * fator;
}*/

// metodo simplificado
const multiplicaValores = (valor, fator) => valor * fator;

console.log(multiplicaValores(10, 3));
console.log(multiplicaValores(50, 2));

// Exercicio Rapido.

console.log('=======================================================================')
/* 
- Monte uma Arrow function que recebe uma nome de pessoa e a converta para letras Maiúscilas.
- Chame a função 3x (passando nomes diferentes) e exibindo no console os resultados
*/
const oi = nome => {
    console.log('Bem vindo ' + nome.toUpperCase() + '!');
}

oi('Rodrigo')
oi('João')
oi('Maria')

