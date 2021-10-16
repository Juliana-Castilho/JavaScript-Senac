var cor = prompt("Digite uma cor, pode ser \nVermelho, Verde, Azul, Amarelo, Preto, Cinza, Roxo, Rosa");

var fundo = "";

/*
Para transformar os caracteres em maiúsculo ou minúsculo, podemos usar os seguintes comandos 
toUpperCase() -> para letras maiúsculas 
toLowerCase() -> para letras minúsculas.
*/
cor = cor.toLowerCase();

switch(cor){
  case "vermelho":
    fundo="red";
    break;

  case "verde":
    fundo="green";
    break;

  case "azul":
    fundo="blue";
    break;

  case "amarelo":
    fundo="yellow";
    break;

  case "preto":
    fundo="black";
    break;

  case "cinza":
    fundo="gray";
    break;

  case "roxo":
    fundo="purple";
    break;

  case "rosa":
    fundo="pink";
    break;

  default:
    fundo="white";
    break;
}

document.body.style.backgroundColor=fundo;