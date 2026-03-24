// Laço de Repetição - FOR (PARA)
// professor te colocou de castigo e pediu para vcoê escrever mil vezes a frase
// "Eu vou prestar atenção às aulas e anotar tudo!

// primeiro utlizo uma variável de controle
// i < 1000 => condição da repetição
// i++ => aumenta a variável de controle para não travar e somar

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas e anotar tudo!");
}
console.log("---------------------------------");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("----------------------------------");
// Escreva todos os números pares entre 1 e 20

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// outra solução de números pares
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
  // % => resto da divisão
  // i % 2 == 0 => se o resto da vivisão de i for 0, ele mostra i
}

console.log("------------------------------------")
// Dado um vetor, calcule e exiba o somatório de seus elementos
let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

console.log(numeros.length);
// numeros.lenght => mostra a quantidade de itens do array

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);
