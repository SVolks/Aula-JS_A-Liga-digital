let carro = {

    // PROPRIEDADES
     marca: "GM",
     modelo: "ONIX",
     cor: "Preto",
     ano: 2022,
     velocidade: 0,
     ligado: false,


     // AÇÕES
     ligar : function() {
        console.log("Dando partida no carro...");
         this.ligado = true;
     },

     desligar : function() {
        console.log("Desligando o carro...");
         this.ligado = false;
     },

     acelerar : function() {
        console.log("Aumentando a velocidade...");
        this.velocidade++;
     },

     frear : function(){
        console.log("Diminuindo a velocidade...");
        this.velocidade--;
     }
};

console.log("CARRO LIGADO: "+carro.ligado);
carro.ligar();
console.log("CARRO LIGADO: "+carro.ligado);