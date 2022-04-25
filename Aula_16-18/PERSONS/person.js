    // Encapsulamento
//function person(fname,lname){
//    let firstname = fname;
//    let lastname = lname;

    // let, private function etc
//    let getDetails_noaccess = function(){
//        return (`Primeiro nome é: ${firstname}, Último nome é: ${lastname}`);
//    }

//    this.getDetails_access = function(){
//        return (`Primeiro nome é: ${firstname}, Último nome é: ${lastname}`);
//    }
//}

//let person1 = new person('Samanta','Alves');
//console.log(person1.firstname);
//console.log(person1.getDetails_noaccess);
//console.log(person1.getDetails_access());

class Pessoa {
    // # = valores não expostos
    #nome = "";
    #cpf = "";
    #sexo = "";

    constructor(nome, cpf, sexo){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#sexo = sexo;
    }

    getName = function() {
        return this.#nome;
    }

    alterarNome = function (novoNome) {
        this.#nome = novoNome;
    }

    descrever = function() {
        console.log(this.#nome + " - " + this.#cpf);
    }
}

let tiago = new Pessoa("Tiago", "123.123.123-00", "Masculino");
console.log(tiago.getName());
tiago.alterarNome("Alex");
console.log(tiago.getName());

module.exports = Pessoa