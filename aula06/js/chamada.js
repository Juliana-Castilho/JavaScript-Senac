const numeros = [10,3,50,21,6,1];
console.log(pares(numeros));
// Vamos criar um botão e duas divs
const btn = document.createElement("button");
// Vamos adicionar um id no botão
btn.setAttribute("id", "btn");
btn.innerHTML="Clique";
//ou btn.innerText="Clique";

// Criar as divs para a quantidade de anos e os anos bissextos
const divQtd = document.createElement("div");
divQtd.setAttribute("id", "qtd");
const divAno = document.createElement("div");
divAno.setAttribute("id", "ano");

// Adicionar os elementos criados ao body
document.body.appendChild(btn);
document.body.appendChild(divQtd);
document.body.appendChild(divAno);

// Vamos adicionar um evento ao botão btn que será o evento de click
// Esse evento chama a constante ano que tem uma função rodando dentro dela

//btn.addEventListener("click", anos());
btn.onclick=function(){

  const a = anos();
  
  divQtd.innerHTML = a[0];

  for(let i = 0 ; i < a[0]; i++){
    divAno.innerHTML+=`${a[1][i]} <br>`; // para quebrar linha
  }
}

// btn2

const btn2 = document.createElement("button");
const divTexto = document.createElement("div");

btn2.innerHTML="Contar";
divTexto.setAttribute("class", "formato");

document.body.appendChild(btn2);
document.body.appendChild(divTexto);

//arrow function: ()=>
//ou btn2.onclick = function(){
btn2.onclick = ()=>{

  divTexto.innerHTML=texto("Olá! Hoje é sábado, dia 05.");

}
