// O comando abaixo diz que o documento html deve obter a tag h1 e mudar o seu texto para "Mudei o texto" - inner significa que deve ser processado dentro do html
//document.getElementsByTagName("h1")[0].innerHTML="Mudei o texto"; 

// nome = prompt("Digite o seu nome");
// document.getElementsByTagName("h1")[0].innerHTML=nome;

/*
var é utilizado para declaração de variáveis globais, enquanto que o let é utilizado para declarações de forma de bloco.

se você fizer uma declaração de variável usando um var dentro de if,for,while... esta variável será vista fora desta estrutura.
Já a declaração let utilizada dentro desses blocos não será vista fora deles.
Mas se você fizer uma declaração usando let ou var fora dos blocos, estas serão vistas por todo o código. /

var idade = 10;
let email = "joao@terra.com.br";

if (10==10){
  
  var nome = "Pedro";
  let sobrenome = "Oliveira";
}
console.log(nome); //está dentro do bloco acima, mas é lido normalmente por ser uma var
console.log(sobrenome); // está dentro do bloco, mas ele não pode ser lido fora por ser let - console apresente erro
*/

//document.getElementsById("saida").innerHTML="Mensagem";
//document.getElementsById("saida").style.backgroundColor="yellow";
//document.getElementsById("saida").style.color="red";

//no exemplo abaixo, o document.getElementsById foi substituido por tag para abreviar e o const não permite que ela seja modificada. Neste caso, não se deve usar var ou let.

const tag = document.getElementById("saida");

tag.innerHTML = "Novo texto";
tag.style.backgroundColor = "green";
tag.style.color = "yellow";