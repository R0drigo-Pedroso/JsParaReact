/*Desestruturação (Destructuring)
Extrair dados facilmente de um array ou objeto e armazená-los em variaáveis/constantes
*/

// Usando desestruturação em Array

const [a, b, c] = ['Aluno 01', 'Aluno 02', 'Aluno 03'];
console.log(a);
console.log(b);
console.log(c);

console.log("===============================================");

const alunos = ['Rodrigo', 'Thiago', 'Adriel', 'Lucas'];
const [Rodrigo, Thiago, Adriel, Lucas] = alunos;
console.log(Rodrigo);
console.log(Thiago);
console.log(Adriel);
console.log(Lucas);

console.log("===============================================");

const unidades = ['Penha', 'Santo Amaro', 'Jabaquara', 'Aclimação'];
const [Penha, , Jabaquara, Aclimacao] = unidades; //Pular uma unidade

console.log(Penha);
console.log(Jabaquara);
console.log(Aclimacao);


console.log("===============================================");

// Usando desetruturação em Objetos
const { nome, cidade } = { nome: "Jusicleudo", idade: 56, cidade: 'São Paulo' };
console.log(nome);
console.log(cidade);

console.log("===============================================");


const dados = {
    nome: 'Rodrigo',
    curso: 'React Js',
    nascimento: '18/06/1992'
};

// Definindo um alias (apelido) para nome
const { nome: aluno, curso, nascimento } = dados;
console.log(aluno);
console.log(curso);
console.log(nascimento);