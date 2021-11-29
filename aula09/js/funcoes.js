function mensagem(){
  alert("Olá! Bom dia!");
}
function data(){
  alert(new Date().toLocaleDateString());
}

function corFundo(){
  document.body.style.backgroundColor="red";
}
function corTexto(){
  document.getElementsByTagName('button')[0].backgroundColor="blue";
  document.getElementsByTagName('button')[1].backgroundColor="green";
}

export {mensagem,data,corFundo,corTexto}

// Mais duas formas de exportar
// export {mensagem}
// export {data}
/*
export function data(){
  alert(new Date().toLocaleDateString());
}
 */