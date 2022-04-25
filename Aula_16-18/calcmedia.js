//const media = 6;

var lista = [
    aluno = {
        nome: 'Tiago dos Santos',
        disciplina: 'Matemática',
        notas: [6.5, 4.3, 2.1, 6.2]
    },
    aluno = {
        nome: 'Alex Carneiro',
        disciplina: 'Matemática',
        notas: [7.5, 8.3, 9.1, 10.0]
    }
];

for (let index = 0; index < lista.length; index++) {
    //var aprovado = false;
    var aluno = lista[index];
    var somaDasNotas = 0;
    for (let iNota = 0; iNota < aluno.notas.length; iNota++) {
    //somaDasNotas = somaDasNotas + aluno.notas[iNota];
        somaDasNotas += aluno.notas[iNota];
    }
    var mediaAluno = somaDasNotas / 4;

    //if (mediaAluno >= 6) {
    //    aprovado = true;
    //} else {
    //    aprovado = false;
    //}
    //aprovado = mediaAluno >= 6;

    console.log(`Aluno: ${aluno.nome} - Disciplina: ${aluno.disciplina} - Média Final: ${mediaAluno} - Status: ${mediaAluno >= 6 ? "Aprovado" : "Reprovado"}`);

    //estrutura if com else resumida:
    //true == true       ?           "true"            :           "false";
    //   (IF)         (ENTAO)     (FAÇA ISSO )    (SENAO/else)    (FAÇA ISSO)
}

//console.log(lista[0]);

//var aluno1 = lista[0];
//var aluno2 = lista[1];

//const mediaAluno1 = (aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3]) / 4;
//const mediaAluno2 = (aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3]) / 4;

//console.log('Média aluno 1: ' + mediaAluno1);

//var statusAluno1 = '';
//var statusAluno2 = '';

//if (mediaAluno1 < media) {
//    statusAluno1 = 'Reprovado';
//} else {
//    statusAluno1 = 'Aprovado';
//}

//if (mediaAluno2 < media) {
//    statusAluno2 = 'Reprovado';
//} else {
//    statusAluno2 = 'Aprovado';
//}

//console.log(statusAluno1);

//console.log(`Aluno: ${aluno1.nome} - Disciplina: ${aluno1.disciplina} - Média Final: ${mediaAluno1} - Status: ${statusAluno1}`);
//console.log(`Aluno: ${aluno2.nome} - Disciplina: ${aluno2.disciplina} - Média Final: ${mediaAluno2} - Status: ${statusAluno2}`);