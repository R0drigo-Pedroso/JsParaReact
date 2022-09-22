// Também é possivel assim: 
//export const pessoa = {

/* //Usando export individual
export const pessoa = {
    nome: 'Rodrigo',
    idade: 30,
    cidade: 'São Paulo'
}

export const curso = {
    titulo: 'JavaScript',
    tempoCurso: '6 Meses'
}*/

//Quando é apenas um recurso
//export default pessoa;

// Exporte geral
const pessoa = {
    nome: 'Rodrigo',
    idade: 30,
    cidade: 'São Paulo'
}

const curso = {
    titulo: 'JavaScript',
    tempoCurso: '6 Meses'
}

export { pessoa, curso };