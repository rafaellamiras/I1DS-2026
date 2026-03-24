// Criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

// Obtendo elementos com sabe e seus índices

console.log(matriz[0][1]);
console.log(matriz[2][0]);

// EXERCÍCIO //
/*
1. Crie uma matriz 3x3
2. Imprima os valores da digonal principal
3. Altere os valores do intem matriz [1][2] para 20 e matriz [2][0] para 30
*/

var matriz2 = [
  [3, 6, 9],
  [9, 18, 27],
  [2, 4, 6],
];
console.table(matriz);

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);

matriz2[1][2] = 20;
matriz2[2][0] = 30;
console.table(matriz2);
 