// Trabalhando com comunicação assincrona (ajax)
import fetch from 'node-fetch'

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(error => console.log('Erro na Operação: ' + error.errno));



console.log('----------------------');
// const acessaApi = async () => { //Arrow Function
async function acessaApi() { //tradicional
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.log('Não funfo: ' + error.errno);
    }
}

acessaApi();