/*
    Usando o ... Como operador rest ()
    Na prática, usamos para mesclar uma lista de argumentos / parâmentros para uma função
*/

const ordenar = (...parametros) => parametros.sort();

console.log(ordenar('Aluno 01', 'Aluno 02', 'Aluno 03'));
console.log(ordenar('banda 01', 'banda 02', 'banda 03', 'banda 04', 'banda 05'));

// function ordenar(...parametros) { // rest
//     return parametros.sort();
// }

// console.log(ordenar('Aluno 01', 'Aluno 02', 'Aluno 03'));
// console.log(ordenar('banda 01', 'banda 02', 'banda 03', 'banda 04', 'banda 05'));

console.log('===================================================')

const teste = [
    "teste01", "teste02", "teste03"
];
console.log(teste);
console.log(ordenar(...teste)); // Spread


console.log('===================================================')

// function soma(...valores) {
//     let total = 0;

//     for (let valor of valores) {
//         total += valor;
//     }

//     return total;
// }

const soma = (...valores) => {
    let total = 0;

    for (let valor of valores) {
        total += valor;
    }

    return total;
}

console.log(soma(10, 20));
console.log(soma(5, 99, 17, 25, 3, 12));