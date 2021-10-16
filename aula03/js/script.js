var cor = prompt("Digite os números relacionados a cor: n1-vermelho/n2-azul/n3-preto")

/*
if(cor==1){
  document.body.style.backgroundColor="red";
}else if (cor==2){
  document.body.style.backgroundColor="blue";
}else if (cor==3){
  document.body.style.backgroundColor="black";
}else {
  document.body.style.backgroundColor="white";
  alert("O valor digitado não corresponde as cores especificadas")
}
*/
//Vamos refatorar o codigo acima
//DRY --> Don't repeat yourseld

var fundo = "white";
if(cor==1){
  fundo = "red";
}
else if(cor==2){
  fundo = "blue";
}
else if(cor==3){
  fundo = "black";
}else{
  alert("O valor digitado não corresponde as cores especificadas");
}
document.body.style.backgroundColor=fundo;