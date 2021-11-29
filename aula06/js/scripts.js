let x = 0;

// function movimenta(){
//   document.getElementById("caixa1").style.marginLeft=`${x}px`;
//   if(x >= window.screen.width-200){
//     x = window.screen.width-200;
//   } else {
//     x+=10;
//   }
//   // para capturar o tamanho da tela usamos o comando de screen(width,height)
//   console.log(window.screen.width)
// }

var acao = setInterval(movimenta, 100); 

function movimenta(){
  document.getElementById("caixa1").style.marginLeft=`${x}px`;
  if(x >= (window.screen.width/2)){
    //parar a execução do serInterval
    cleadInterval(acao);
  } else {
    x+=10;
  }
}

document.getElementById("caixa1").onmouseover=()=>{
  document.getElementById("caixa1").style.backgroundColor="blue";
  document.getElementById("caixa1").style.width="300px";
  document.getElementById("caixa1").style.height="300px";
}

document.getElementById("caixa1").onmouseout=()=>{
  document.getElementById("caixa1").style.backgroundColor="darkred";
  document.getElementById("caixa1").style.width="100px";
  document.getElementById("caixa1").style.height="100px";
}

// 1000 é milésimo de segundo. 1000 = 1s