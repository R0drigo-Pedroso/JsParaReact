class Pessoa {
    // Propriedade
    nome = 'Digite seu nome'
    genero = 'Informe seu genero'
    idade;

    // Métodos
    mostraGenero() {
        console.log(this.genero);
    }

    mostraNome() {
        console.log(this.nome);
    }

    mostraIdade() {
        if (this.idade < 18) {
            return 'É menor de idade!';
        } else {
            return 'É maior de idade';
        }
    }

    /* if/else ternário 
        return this.idade >= 18 ? 'é maior' : 'é menor';
    */
}


class Aluno extends Pessoa {
    //Propriedades da Classe
    matricula;
    curso;


    //Proprios métodos
    mostraDados() {
        console.log(this.matricula);
        console.log(this.curso);
        console.log(this.idade);

        //Métodos da super classe
        this.mostraNome();
        this.mostraGenero();
        this.mostraIdade();
    }
}


/* Criando objetos/Instâncias*/
let umaCidadao = new Pessoa;
umaCidadao.nome = 'Rodrigo';
umaCidadao.genero = 'Masculino';

console.log(umaCidadao);
console.log('-----------------------------------------');

// Objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Beatriz';
aluno.genero = 'Femenino';
aluno.idade = 17;
aluno.matricula = '32';
aluno.curso = 'Js em React';

//console.log(aluno);
aluno.mostraDados();

//Saída de Idade
console.log(aluno.mostraIdade());