var nome = "Stephanie";

switch (nome) {
    case "Tiago":
    case 'Alex':
    case "Leonardo":
        console.log(nome + ": Aprendiz de professor");
        break;
    case "Cris":
    case "Hele":
        console.log(nome + ": Chefe da Liga Digital");
        break;
    default:
        console.log(nome + ': Aluno do vem.ser=dev');
        break;
}

console.log("Fim switch, início switch com if")

var nome1 = "Cris";
if (1 == 1) {
    switch (nome1) {
        case "Tiago":
        case 'Alex':
        case "Leonardo":
            console.log(nome1 + ": Aprendiz de professor");
            break;
        case "Cris":
        case "Hele":
            console.log(nome1 + ": Chefe da Liga Digital");
            break;
        default:
            console.log(nome1 + ': Aluno do vem.ser=dev');
            break;
    }
}


// SWITCH //
console.log("Fim switch com if, início switch")
var numero = 17;

var resto = numero % 2;
console.log("Resto = " + resto);

switch (resto) {
    case 0:
        console.log("Número par");
        break;
    default:
        console.log("Número ímpar");
        break;
}


if (nome === "Tiago" || nome === "Alex" || nome === "Leonardo") {
    console.log(nome + ': aprendiz de professor (IF)');
} else if (nome === "Cris" || nome === "Hele") {
    console.log(nome + ": chefe da Liga Digital (IF)")
} else {
    console.log(nome + ": aluno do vem.ser=dev (IF)")
}