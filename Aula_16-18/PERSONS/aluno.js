const Pessoa = require("./person");
const generateRA = require("./utils");

class Aluno extends Pessoa {
    #ra = ""

    constructor(nome, cpf, sexo) {
        super(nome, cpf, sexo);

        //this.#ra = generateRA();
        //console.log(this.#ra);
    }

    obterRA = function () {
        console.log(this.#ra);
    }
}

let alex = new Aluno("Alex", "123.123.123-00", "M");
console.log(alex.getName());
console.log(alex.descrever());
console.log(alex.obterRA());