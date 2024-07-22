let nome = document.getElementById("nome").value;

let primeiro = document.getElementById("primeiro").value;

let segundo = document.getElementById("segundo").value;

let terceiro = document.getElementById("terceiro").value;

let quarto = document.getElementById("quarto").value;

let listaAlunos = document.getElementById('lista_alunos');

let aluno;

let resultadoFinal;

const alunos = [];

class Aluno {
    constructor(nome, nota1, nota2, nota3, nota4, media) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.media = media;
    }
}

function cadastrar() {
    let nome = nomeAluno.value;
    let nota1 = parseFloat(bimestre1.value);
    let nota2 = parseFloat(bimestre2.value);
    let nota3 = parseFloat(bimestre3.value);
    let nota4 = parseFloat(bimestre4.value);
    let mediaFinal = ((nota1 + nota2 + nota3 + nota4) / 4);

    aluno = new Aluno(nome, nota1, nota2, nota3, nota4, mediaFinal);

    if (aluno.media >= 7) {
        resultadoFinal = 'Aprovado!';
    }

    if (aluno.media >= 4 && mediaFinal < 7) {
        resultadoFinal = 'Recuperação!';
    }

    if (aluno.media < 4) {
        resultadoFinal = 'Reprovado!';
    }

    alunos.push(aluno);
    nomeAluno.value = '';
    bimestre1.value = '';
    bimestre2.value = '';
    bimestre3.value = '';
    bimestre4.value = '';
}





// não sei mais Thiago, perdão















