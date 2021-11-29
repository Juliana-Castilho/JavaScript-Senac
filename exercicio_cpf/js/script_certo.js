let cpfPrimeiro = [3, 7, 2, 4, 7, 0, 6, 5, 8];
let digitoPrimeiro = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let multiplicador = [];
let resultado = 0;

function calculaDigitoVerificador(digitoVerificador=null) {
  if(digitoVerificador){
    cpfPrimeiro.push(digitoVerificador);
    digitoPrimeiro.unshift(11);
    resultado=0;
  }
  for(let i = 0; i < cpfPrimeiro.length; i++){
    multiplicador[i]=cpfPrimeiro[i]*digitoPrimeiro[i];
  }

//Quando for uma linha, utilizar sem as chaves
//multiplicador.forEach(m => resultado += m);

  multiplicador.forEach(m => {
    resultado += m;
  });

  resultado = (11-(Math.round(resultado%11))); 

}
calculaDigitoVerificador();

console.log(multiplicador);
console.log(resultado);

calculaDigitoVerificador(resultado);

console.log(resultado);