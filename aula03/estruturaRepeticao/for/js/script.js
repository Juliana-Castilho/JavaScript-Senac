/* 
O for deve ter um início e um fim definido
O while deve ter o início definido, mas não precisa ter o fim definido. Pode ser para leitura de texto que vai aumentando com o tempo.
var i é comum ser feita e significa increment
fot tem sempre 4 elementos ( ; )
*/

function for1(){

  for(var i = 1 ; i <= 10; i++){
    console.log(i);
  //1-inicio da veriável, 2-condição da repetição, 3-corpo, 4-incrementação ou decrementação.
  //Enquanto a ver i for igual ou menos a 10, vai somar + 1
  }
}

function for2(){

  var numero = prompt("Digite um valor a tabuada");
  for(var p = 1 ; p <= 10 ; p++){
    console.log(numero +" x "+ p +" = "+ (numero*p));
    //Exibir o resultado na página html. Vamos usar uma div como base.
    document.getElementsByTagName("div")[0].innerHTML+=numero +" x "+ p +" = "+ (numero*p)+"<br>";
    /*
    - Como pode existir diversas divs ou h1, por exemplo, precisa informar a posição delas [0]. Para não usar a posição, dê um id para ela e getElementById.
    - Foi preciso incluir o + antes do igual, porque senão os resultados vao se substituindo até chegar no 10 e aparece apenas o número da tabuada * 10.
    */
  }
}

function for3(){

  // Vamos fazer uma referência a tag body para criar novos elementos html dentro dela.
  var body = document.body;
  
  // Vamos contruir uma tag h1 e adicioná-la ao body
  var h1 = document.createElement("h1");
  
  // Vamos adicionar um texto ao h1
  h1.innerHTML = "Estrutura de Repetição"
  
  // Adicionar o h1 ao body
  body.appendChild(h1);

  for(var item = 1 ; item <= 20 ; item++){

    var div = document.createElement("div");

    // Adicionar estilo de formatação às divs
    var canal = 11*item;
    div.style.backgroundColor="rgb(100,100,"+canal+")";
    div.style.width=(100*item)+"px";
    div.style.height="100px";
    div.style.margin="10px";

    // Adicionar a div ao body
    body.appendChild(div);

  }
}