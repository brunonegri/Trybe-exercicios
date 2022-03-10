// Exercicio 1

// contagem = [1,2,3,4,5,6,7,8,9,10]
// res = 1

// for (i = 0; i < contagem.length; i++) {
//     res *= contagem[i]
// }
// console.log(res);

// Exercicio 2

// let word = 'tryber'
// let reverse = ''
// for (i = word.length -1; i >= 0; i--) {
//     reverse += word[i]
// }
// console.log(reverse);

// Exercicio 3

// let array = ["java","javascript", "python", "html", "css"];

// let menor = array[0].length;
// let maior = array[0].length;

// for (let i = 0; i < array.length; i++) {
//   if (array[i].length > maior) {
//     maior = array[i];
//     console.log(maior);
//   }

//   if (array[i].length < menor) {
//     menor = array[i];
//     console.log(menor);
//   }
// }

// Exercicio 4

for (let i = 2; i < 50; i++) {
    let primo = true

    for (let index = 2; index < i; index++) {
        if (i % index === 0 ) {
            naoPrimo = false;
            break;
        }
    }
    if (primo) console.log(i)
}
