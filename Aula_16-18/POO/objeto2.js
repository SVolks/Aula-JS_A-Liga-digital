function carro(marca, modelo, cor, ano)  {

    // PROPRIEDADES
    this.marca = marca,
    this.modelo = modelo,
    this.cor = cor,
    this.ano = ano,
    this.velocidade = 0,
    this.ligado = false
}

let meuCarro1 = new carro("MG", "F480", "Preto", "1990");
let meuCarro2 = new carro("VW", "Fusca", "Ciano", "1974");

console.log(JSON.stringify(meuCarro1));
console.log(JSON.stringify(meuCarro2));
