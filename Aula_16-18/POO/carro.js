class Carro {

    constructor(marca, modelo, cor, ano) {
       
        // PROPRIEDADES
        this.marca = marca,
        this.modelo = modelo,
        this.cor = cor,
        this.ano = ano,
        this.velocidade = 0,
        this.ligado = false
    }

    situacao() {
        console.log(this.modelo + " (" + this.ligado + ") " + this.velocidade + "KM/H")
    }

    descrever() {
        console.log(JSON.stringify(this));
    }

     // AÇÕES
     ligar() {
        console.log("Dando partida no carro...");
         this.ligado = true;
     }

     desligar() {
        console.log("Desligando o carro...");
         this.ligado = false;
     }

     acelerar() {
        if(this.ligado) {
            console.log("Aumentando a velocidade...");
            this.velocidade+=10;
        } else {
            console.log("Ligue o carro...")
        }
     }

     frear(){
        console.log("Diminuindo a velocidade...");
        this.velocidade-=5;
     }
}

module.exports = Carro

//let fusca = new Carro("VW", "Fusca", "Ciano", "1974");
//console.log(JSON.stringify(fusca));