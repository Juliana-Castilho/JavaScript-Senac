// import {mensagem as msg, data as dt} from "./funcoes.js"
// msg e dt como apelido para não ficar extenso
import * as fn from "./funcoes.js";
//importando tudo (*) como fn (fn é um alias)

const body = document.body;
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");

btn1.innerHTML="Mensagem";
btn2.innerHTML="Data atual";

btn1.onclick = ()=>{
    fn.mensagem();
}
btn2.onclick = ()=>{
    fn.corFundo();
}

body.appendChild(btn1);
body.appendChild(btn2);