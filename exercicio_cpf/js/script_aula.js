let cpf9 = [3, 7, 2, 4, 7, 0, 6, 5, 8];
let pelo10 = 10;
let peso11 = 11;
let resultado = 0;
let resto = 0;
let cpf9 = cpfSubstring(0.9);

//no for o i indica a posição do array
for(let i = 0; i < 9; i++){
  resultado += cpf9[i] * peso10;
  peso--;
}

console.log(digitoPrimeiro);
resto = resultado % 11;

if(resto < 2){
  cpf9+="0";
}
else{
  cpf9+=(11-resto);
}

//--

resultado = 0;

for(let i = 0; i < 10; i++){
  resultado += cpf9[i] * peso11;
  peso11--;
}

console.log(digitoPrimeiro);
resto = resultado % 11;

if(resto < 2){
  cpf9+="0";
}
else{
  cpf9+=(11-resto);
}

if(cpf != cpf9){
  alert("CPF Inválido.");
}
else{
  alert("CPF Válido.");
}
