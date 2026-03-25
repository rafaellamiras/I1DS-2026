/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

let matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++)
  for (let coluna = 0; coluna < matriz[linha].length; coluna++)
    if (linha === coluna)
      console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);

console.table(matriz);

console.log("-----------------------------------------------");

let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2],
];
console.table(matriz2);

for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[linha].length; coluna++)
    matriz2[linha][coluna] *= 5;
}
console.table(matriz2);

console.log("-----------------------------------------------");
