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

for (let i = 0; i < 3; i++) {
    console.table(matriz[i][i]);
}

console.table(matriz);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 5
}