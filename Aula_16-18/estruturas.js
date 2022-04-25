// NUMEROS:
// INTEIROS - NUMEROS SEM PONTOS DECIMAIS
// PONTO FLUTUANTE / NUMERO REAL - NUMEROS COM CASAS DECIMAIS


var array = [];
console.log(array.length);

var idade = 37;
console.log(idade);

var altura = 1.74;
console.log("Altura (real): "+altura);

var altura = 1.745419612;
console.log("Altura (real): "+altura.toFixed(2));

var altura = 1.745419612;
console.log("Altura (real): "+altura.toFixed(3));

var altura = 1.745419612;
console.log("Altura (real): "+altura.toPrecision(3));

var altura = 1.745419612;
console.log("Altura (real): "+altura.toPrecision(2));

var dataNascimento = new Date(2000, 8, 29, 19, 15, 8);
console.log("Data Nascimento (datetime): "+dataNascimento);


var notas = [6.72, 8.5, 6.25, 7];
console.log("Notas (array): "+notas);
console.log("Notas (array) tamanho: "+notas.length);

var nome = "Steph@nie Vo1cov"
console.log("Nome (string): "+nome);
console.log("Posicao do 1 (um) no nome: "+nome.indexOf("1", 0));
console.log("Posicao do @ no nome: "+nome.indexOf("@", 0));
console.log("Replace e por &: "+nome.replace("e", "&"));
console.log("Replace o por 0: "+nome.replace("o", "0"));
console.log("Tamanho do nome: "+nome.length);
console.log("Tamanho do nome: "+nome.toUpperCase());

var nomes = ["Stephanie", "Samanta", "José", "Samuel",
"Amanda", "Lauro", "Vitor", "Carol", "Bruna"];

//nomes = nomes.sort();
//nomes = nomes.reverse();

for (let i=0;i<nomes.length;i++) {
    console.log("Posição do Array: "+i);
    console.log("Conteúdo na posição do Array: " + nomes[i]);
}
