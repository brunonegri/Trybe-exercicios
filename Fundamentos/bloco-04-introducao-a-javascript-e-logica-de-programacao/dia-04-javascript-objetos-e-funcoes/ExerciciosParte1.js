// Exercicio 1

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
// console.log('Bem vinda, '+ info.personagem);

// Exercicio 2

info.recorrente = 'sim'
// console.log(info);

// Exercicio 3

// for (key in info) {
//     console.log(key);
// }

// Exercicio 4

// for (key in info) {
//     console.log(info[key]);
// }

// Exercicio 5

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim'
//   };

// let novaInfo = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim',
//   };

//   for (key in info) {
//       if (info.recorrente === novaInfo.recorrente) {
//           info.recorrente = "Ambos Recorrentes"     
//           console.log(
//               info.personagem + ' e ' + novaInfo.personagem, "\n",
//               info.origem + ',' + novaInfo.origem, "\n",
//               info.nota + ' e ' + novaInfo.nota, "\n",
//               info.recorrente
//           )
//       }
//   }

// Exercicio 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


  // console.log("O livro favorito de " + leitor.nome +" "+  leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

// Exercicio 7

novosTitulos = {
  titulo : 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}

leitor.livrosFavoritos.push(novosTitulos)

// console.log(leitor.livrosFavoritos);

// Exercicio 8

console.log(leitor.nome + ' tem 2 livros favoritos ' + leitor.livrosFavoritos[0].titulo + ' e ' + leitor.livrosFavoritos[1].titulo);

// console.log(leitor.livrosFavoritos[1].titulo);