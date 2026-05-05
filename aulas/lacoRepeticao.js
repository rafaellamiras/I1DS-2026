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

console.log("------------------------------------");
// Dado um vetor, calcule e exiba o somatório de seus elementos
let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

console.log(numeros.length);
// numeros.lenght => mostra a quantidade de itens do array

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

// Laço de repetição - While / Do While
// ------------------------------------
// While testa a condição antes de entrar no laço  de repetição
// Se a condição for inicialmente falsa, o laço não é executado nenhuma vez

var x = 11;

while (x > 10) {
  console.log("Entrei no laço While...");
  x = 0;
}
console.log("Terminei!");

// Soma enquanto (While) menor que 10
var soma1 = 0; // variável para armazenar a soma dos numeros
var num = 0; // variavel para aumentar de 1 em 1
while (num < 10) {
  soma1 += num; // somo o numero atual com o que já existe na variável
  num++; // variável de controle para o while funcionar
  console.log("Somando", soma1);
  console.log("Numero", num);
}
