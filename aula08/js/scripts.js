// // var cidades = ["São Paulo, Curitiba, Campinas"]

// //for(let i = 0 ; i < cidades.length ; i++) {
// //  console.log(cidades[i]);
// //}

// //cidades.forEach(function(dado, ix){
// // console.log(`Do ForEach ${dado}`);
// //})

// //function valor(dado, ix){
//  // console.log(dado);
// //}
// //cidades.forEach(valor);

// //function valor(dado, ix){
// // console.log(dado);
// //}

// // cidades.forEach((valor,index)=>{
// //   console.log(`dentro do foreach ${valor} e ${index}`)
// // });

// // cidades.map((dados)=>{
// //   console.log(`map da cidade ${dados}`)
// // });


// /* Vamos construir um objeto em javascript */
// var produto1 = {
//   nome: "Teclado",
//   descrição: "Sem fio",
//   preço: 50.90,
//   quantidade: 30
// };
// var produto2 = {
//   nome: "Mouse",
//   descrição: "Sem fio",
//   preço: 30.50,
//   quantidade: 10
// };
// var produto3 = {
//   nome: "Monitor",
//   descrição: "Monitor Dell",
//   preço: 500.90,
//   quantidade: 5
// };

// var lstProduto = [
//   {
//     nome: "Teclado",
//     descrição: "Sem fio",
//     preco: 50.90,
//     quantidade: 30,
//     fornecedores:[
//       "Microsoft",
//       "Multilaser"
//     ]
//   },
//   {
//     nome: "Mouse",
//     descrição: "Sem fio",
//     preco: 30.50,
//     quantidade: 10,
//     fornecedores:[
//       "Microsoft",
//       "Multilaser"
//     ]
//   },
//   {
//     nome: "Monitor",
//     descrição: "Monitor Dell",
//     preco: 500.90,
//     quantidade: 5,
//     fornecedores:[
//       "Dell"
//     ]
//   }
// ]

// lstProduto.map((item)=>{
//   item.fornecedores.map((fr)=>{
//     console.log(`Empresa: ${fr}`)
//   })
// })


/*
Para obter os dados relacionados aos filmes que vem da API themoviedb, iremos utilizar uma url com o caminho onde os dados estão.
Para que essa requisição aconteça, iremos usar uma função do javascript chamada fetch (significa buscar). O fetch é uma função especial do javascript classificada como promise, ou seja, uma promessa de que ela irá conseguir bustar os dados. Porém existe a possibilidade de essa promessa falhar, portanto temos a opção de tratar essa falha.
*/

// Então pegue esta resposta e transforme esta resposta em json
fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
.then((response)=>response.json())
.then((listaFilmes)=>{

  //fazer uma referencia do body
  const body = window.document.body;
  const container = window.document.createElement("div");
  const header = window.document.createElement("header");
  const main = window.document.createElement("main");
  const h1 = window.document.createElement("h1");

  container.setAttribute("id","container");
  header.setAttribute("id","header");

  h1.innerHTML="Filmes";
  header.appendChild(h1);
  header.innerHTML+=`pag atual: ${listaFilmes.page}
                    - Total de páginas: ${listaFilmes.total_pages}
                    - Total de resultados: ${listaFilmes.total_results}`;

  main.setAttribute("id", "main");

  listaFilmes.results.map((dado)=>{
    var item = window.document.createElement("div");
    var img = window.document.createElement("img");
    var h2 = window.document.createElement("h2");
    var pR = window.document.createElement("p");
    var pV = window.document.createElement("p");

      h2.innerHTML=dado.title;
      pR.setAttribute("class", "lancamento");
      pR.innerHTML=`Lançamento: ${dado.release_date}`;

      pV.setAttribute("class", "media");
      pV.innerHTML=`Média: ${dado.vote_average}`;

      img.src=`https://image.tmdb.org/t/p/w500${dado.poster_path}`;
      item.appendChild(img);
      item.appendChild(h2);
      item.appendChild(pR);
      item.appendChild(pV);
      main.appendChild(item);
})


container.appendChild(header);
container.appendChild(main);
body.appendChild(container);
})
.catch((erro)=>console.erro(`Erro ao tentar carregar a API &{erro}`));
