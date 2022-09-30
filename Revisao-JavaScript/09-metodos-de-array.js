/*map (mapeia, transformar em outra coisa) 
Passa pelos ou itera sobre elementos de um array e realiza operações
Através de uma função (callbank) gerando um novo array
*/

const numeros = [10, 20, 30, 40, 50];

/*
//Usando modelo tradicional
const numerosDobrados = numeros.map(function (numero) {
    return numero * 2;
});*/

//Usando array fuction
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(numeros); //Original
console.log(numerosDobrados); //Transformado/mapeado

console.log('=================================================');

//Transforma nomes em letras maisculas

const nomes = ["Bernadety", "Jucicleudo", "Mariany", "Quinteria"];

const letraGrande = nomes.map(nome => nome.toUpperCase());

console.log(nomes);//sem o .toUpperCase()
console.log(letraGrande);// como o .toUpperCase()

console.log('=======================FILTER==========================');

//Usando Filter

const vendas = [1500, 2000, 10_000, 1000, 500];

const meta = 1100;

const acimaDaMeta = vendas.filter(venda => venda > meta);

console.log(vendas); // Valores Originais
console.log(acimaDaMeta); // Vendas acima da meta

console.log('=================================================');

const alunos = ["Fulaninho", "Joãozinho", "Mariazinha", "Antoninho", "Aline"];
/*
const resultados = alunos.filter(aluno => {
    //Forma mais antiga
    // if (aluno.charAt(0) == 'A') {
    //     return aluno;
    // }

    //Formato mais recente
    if (aluno.startsWith("A")) {
        return aluno;
    }

});
*/

//Simplificando Array Faction
const result = alunos.filter(aluno => aluno.startsWith("A") ?? aluno);

console.log(alunos);
//console.log(resultados);
console.log(result);


//Array de Objetos
const cursos = [
    { id: 1, titulo: "HTML5,CSS3", categoria: "Front-end", preco: 500 },
    { id: 2, titulo: "Js e React", categoria: "Front-end", preco: 800 },
    { id: 3, titulo: "React Native", categoria: "Mobile", preco: 1000 },
    { id: 4, titulo: "Photoshop", categoria: "Design", preco: 400 },
    { id: 5, titulo: "PHP e MySQL", categoria: "Back-end", preco: 600 },
    { id: 6, titulo: "Flutter", categoria: "Mobile", preco: 900 },
];

const cursosFront = cursos.filter(curso => curso.categoria == "Front-end");
const cursosMobile = cursos.filter(curso => curso.categoria == "Mobile");

console.log(cursos);
console.log(cursosFront);
console.log(cursosMobile);

console.log("------------------------");

//Usando o MAP para trazer o titulo do curso
const titulos = cursos.map(curso => curso.titulo);
console.log(titulos);

console.log("------------------------");

const titulosCursosFront = cursos.filter(curso => curso.categoria == 'Front-end').map(curso => curso.titulo);

console.log(titulosCursosFront);

console.log('=======================REDUCE==========================');

//Usando Reduce (reduzir a um unico valor/resultado)

const valores = [10, 50, 2000, 5, 25];

const soma = valores.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0);

console.log(soma);


console.log("----------Filter e Reduce--------------");

const somaCursosMobile = cursos
    .filter(curso => curso.categoria == "Mobile")
    .reduce((acumular, curso) => {
        return acumular + curso.preco
    }, 0 //valor inicial para o reduce reconhecer o inicio.
    );

console.log(somaCursosMobile);