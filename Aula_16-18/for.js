let tamanhoMaximo = 10;

for (let contador = 0; contador <= tamanhoMaximo; contador++) {
    let contadorPar = contador % 2 == 0;
    if(contadorPar) {
        console.log(contador);
    }
    if (contador <= tamanhoMaximo) {
        console.log("Fim do estoque...")
    }
}

//console.log(7 / 3);
//console.log(7 % 3);