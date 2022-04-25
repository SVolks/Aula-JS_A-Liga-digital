// WHILE = enquanto //

console.log("ESTRUTURA WHILE: ")

var numero  = 1;
while (numero < 2) {
    numero = numero + 1;
    console.log(numero);
}

console.log("ESTRUTURA WHILE COM SWITCH: ")

var numero1 = 2;
while (numero1 >= 0) {
if (numero1 != 0) {
    switch ((numero1 % 2) == 0) {
        case true:
            console.log(numero1 + ": PAR");
            break;
        default:
            console.log(numero1 + ": ÍMPAR");
            break;
    }
}
numero1 = numero1 - 1;
}

// FOR //

console.log("ESTRUTURA FOR: ")

for (let numero1 = 0; numero1 <= 10; numero1++) {
    console.log(numero1);
}

var notas = [6.5, 7, 8.5, 4.3];
for (let i = 0; i < notas.length; i++) {
    console.log("Indice: " + i + " - Nota: " + notas[i]);
}