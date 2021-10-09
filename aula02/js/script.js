/*
O comando abaixo será executado quando o usuário abrir a página.
Será exibido uma janela(prompt) pedindo uma cor. De acordo com a cor selecionada, o fundo da página muda.
Para essa execução estamos usando o comando window(janela | navegador).document(meu documento html).body(corpo da página).addEventLister(substituido por .onload pq deu erroa - dicionando um evento ao body para que ele preste atenção ao carregamento da página - load - e assim executar a função ()=>{} com todo o código de desvio de fluxo if / if else / else)
*/
window.document.body.onload=()=>{
  let escolha = prompt("Digite:\n1->Amarelo\n2->Vermelho\n3->Azul");
  if(escolha==1)
    window.document.body.style.backgroundColor="yellow";
  else if(escolha==2)
    window.document.body.style.backgroundColor="red";
  else if(escolha==3)
    window.document.body.style.backgroundColor="blue";
  else
    window.alert("O número não existe na lista"); 
};