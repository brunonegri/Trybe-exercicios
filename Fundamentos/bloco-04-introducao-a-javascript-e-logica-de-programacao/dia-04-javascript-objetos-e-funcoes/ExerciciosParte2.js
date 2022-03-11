// Exercicio 1

// function verificaPalindrome(para) {
//     if (para === para.split('').reverse().join('')) {
//         console.log('É palindrome');
//     } else {
//         console.log('Não é palindrome');
//     }
// }

// verificaPalindrome('arara');

// Exercicio 2

// function maiorNoIndex(param) {
// let maior = [0]
// let indice = 0
// for (let i = 0; i < param.length; i++) {
//     if (param[i] > maior) {
//         maior = param[i]
//         indice = i

//     }

// }
// console.log(indice);
// }

// maiorNoIndex([2, 3, 6, 7, 10, 1])

// Exercicio 3

// function menorNoIndex(param) {
//     let menor = [999999999999999]
//     let indice = 0
//     for (let i = 0; i < param.length; i++) {
//         if (param[i] < menor) {
//             menor = param[i]
//             indice = i

//         }
//     }
//     console.log(indice);
// }
// menorNoIndex([2, 4, 6, 7, 10, 0, -3])

// Exercicio 4

// function maiorNome(param) {
//   let maior = param[0].length;
//   let nome = ''

//   for (let i = 0; i < param.length; i++) {
//     if (param[i].length > maior) {
//       maior = param[i].length;
//       nome = param[i]
//     }
//   }
//   console.log(nome)
// }
// maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

// Exercicio 5 NÃO TERMINEI

// function repeteAqui(param) {
//   let contador = 0;
//   let numerorepetido = [];

//   for (let i = 0; i < param.length; i++) {
//     for (let z = 0; z < param.length; z++) {
//       if (param[i] === param[z]) {
//         numerorepetido.push(param[i]);
//       }
//     }
//   }
//   console.log(numerorepetido);
//   console.log(contador);
// }
// repeteAqui([2, 3, 2, 5, 8, 2, 3, 3, 2]);

// Exercicio 6

// function somador(n) {
//   let soma = 0;
//   for (i = 1; i <= n; i++){
//       soma += i
//   }
//   console.log(soma);
// }
// somador(5);

// Exercicio 7

