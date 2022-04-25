const lampadaDoQuarto = false;
const lampadaDaSala = false;
//console.log(lampada);

if (lampadaDaSala === true && lampadaDoQuarto === true) {
    console.log('Lâmpadas da sala e do quuarto ligadas!')
} else if (lampadaDaSala === false && lampadaDoQuarto === true ){
    console.log('Lâmpada do quarto ligada e lâmpada da sala desligada, ligue-a!')
} else if (lampadaDaSala === true && lampadaDoQuarto === false) {
    console.log('Lâmpada da sala ligada e lâmpada do quarto desligada, ligue-a!')
} else {
    console.log('Lâmpadas da sala e do quarto desligadas, boa noite!')
};

console.log('Fim');