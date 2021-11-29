function pares(valores){
  let lista = [];

  for(let i = 0 ; i < valores.length ; i++){
    //% é o resto. Se restar 0, é par
    if(valores[i] % 2 == 0) {
      lista.push(valores[i]);
    }
  }
  return lista;
}

// Função anônina. Ela está vinculada a alguma coisa: Pode ser um botão, elemento html(relacionado a um evento. ex: onclick), variável ou constante.
// Abaixo a função anônina vinculada a uma constante
const anos = function(){
  let qtd = 0;
  let anosBissextos = [];

  for(let i = 1950; i <= 2021; i++){
    if(i % 4 == 0){
      anosBissextos.push(i);
      qtd++;
    }
  }

  //console.log(qtd);
  //console.log(anosBissextos); ou retornar

  // return `${qtd} ${anosBissextos}` que fica como string ou com array
  return [qtd, anosBissextos];
}

const texto = (t)=>{
  return t.length;
}
