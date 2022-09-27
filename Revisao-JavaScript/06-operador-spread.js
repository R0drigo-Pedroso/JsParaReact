/* Usando o ... como operador spread (Espalhar)

Na prática, copiamos o conteúdo de um array (bandas) para dentro  de outro (maisBandas)

Imutabilidade (não muda)
*/

const bandas = ['Banda 01', 'Banda 02', 'Banda 03', 'Banda 04', 'Banda 05', 'Banda 06'];
const maisBanda = [...bandas, 'Banda 11', 'Banda 12', 'Banda 13', 'Banda 14', 'Banda 15', 'Banda 16'];

console.log(maisBanda);

console.log('=================================================================================================');


// Spread com Objetos

const dados = {
    nome: 'Sirleide',
    idade: 27,
};

const novosDados = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 25 // sobrescrevendo o valor somente da propriedade idade
};

console.log(novosDados); // Novo objeto contendo os dados do anterior também
console.log('Idade atualizada: ' + novosDados.idade);
console.log(dados);
