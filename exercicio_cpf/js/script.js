let cpfPrimeiro = [3, 7, 2, 4, 7, 0, 6, 5, 8];
let digitoPrimeiro = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let multiplicador = [];
let resultado = 0;

for(let i = 0; i < cpfPrimeiro.length; i++){
  digitoPrimeiro[i] = 1;
}

console.log(digitoPrimeiro);

digitoPrimeiro.forEach(d => d = 2); // Sempre que percorrer o indice do array [d], ele recupera o valor do índice ao d, porém não reatribui no array porque não tem um cursor. Substituto do While.

digitoPrimeiro.forEach((a,b) => digitoPrimeiro[b] = 2);

/*digitoPrimeiro.forEach((a,b) => { //a = valor, b = cursor
  console.log(b);
  digitoPrimeiro[b] = 2;
});*/

console.log(digitoPrimeiro);


// mesma utilizade
let arr = [1,2,3,4,5,6];

arr.forEach((a, rodrigo) => arr[rodrigo] = 2);

for(let a = 0; a < arr.length; a++){
    console.log(a)
}

//variavel contando objeto JSON
let cadastro = {
  "rua" : "Pinheiro de Ulhoa Cintra",
  "numero" : 1050,
  "complemento" : "casa 25",
  "bairro" : "Jd. Popular",
  "cidade" : "São Paulo",
  "moradores" : [
      {"nome" : "Rodrigo Castilho", "idade" : 36}, 
      {"nome" : "Juliana Castilho", "idade" : 34}
  ]
}

console.log(cadastro.moradores[0].nome + ", idade: " +cadastro.moradores[0].idade );
console.log(cadastro.moradores[1].nome + ", idade: " +cadastro.moradores[1].idade );

cadastro.moradores.forEach((v) => 
    console.log(v.nome + ", idade: " + v.idade));
    /* exempo json */
/***************** */
//variavel contando objeto JSON
let cadastro = [{
  "rua" : "Pinheiro de Ulhoa Cintra",
  "numero" : 1050,
  "complemento" : "casa 25",
  "bairro" : "Jd. Popular",
  "cidade" : "São Paulo",
  "moradores" : [
      {"nome" : "Rodrigo Castilho", "idade" : 36, "telefones" : null}, 
      {"nome" : "Juliana Castilho", "idade" : 34, "telefones" : [{"numero" : "11982891577"}]}
  ]
},
{
  "rua" : "Rua Maria Aparecida Pelegrino",
  "numero" : 78,
  "complemento" : "",
  "bairro" : "Jd. São Miguel",
  "cidade" : "Taboão da Serra",
  "moradores" : [
      {"nome" : "Veruska Castilho", "idade" : 44,  "telefones" : [{"numero" : "1111111111"},{"numero" : "22222222222"}]}, 
      {"nome" : "Melissa Castilho", "idade" : 10, "telefones" : null}
  ]
}];


cadastro.forEach((c) => {

 c.moradores.forEach(m => {

      console.log("Nome: " + m.nome + ", idade:" + m.idade + ", telefones: ");
      if(m.telefones){

          m.telefones.forEach((t, i) => {
              console.log("Telefone " + i + ": " + t.numero);
          });
      } else {
          console.log("N/A");
      }

      console.log("----------------------------");

  });

});
