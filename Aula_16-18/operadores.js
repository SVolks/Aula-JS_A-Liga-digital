var a1 = true && true;
console.log('a1 = ' + a1);

var a2 = true && false;
console.log('a2 = ' + a2);

var a3 = false || true;
console.log('a3 = ' + a3);

var a4 = false || (3 == 4);
console.log('a4 = ' + a4);

//var a5 = "Gato" && "Cão";
//console.log('a5 = ' + a5);

//var a6 = false || "Gato";
//console.log('a6 = ' + a6);

//var a7 = "Gato" && false;
//console.log('a7 = ' + a7);

// && = e: (exclusivo, precisa satisfazer toda a condição)
//a1 = true
//a2 = false
//a3 = false
//a4 = false

// || = ou: (precisa satisfazer pelo menos uma condição, mas não toda ela como o &&)
//a1 = true
//a2 = true
//a3 = true
//a4 = false


soma = 3 + 3;
console.log("3 + 3 = "+soma);

subtracao = 4 - 3;
console.log("4 - 3 = "+subtracao);

divisao = 4 / 3;
console.log("4 / 3 = "+divisao);

multiplicacao = 3 * 3;
console.log("3 * 3 = "+multiplicacao);