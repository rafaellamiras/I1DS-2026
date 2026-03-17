/*
 1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4
    */

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

console.table(frutas);
console.log("O Vetor no momento possui", frutas.length, "elementos");

frutas.push("Tangerina");
console.table(frutas);
console.log("O Vetor no momento possui", frutas.length, "elementos");

frutas.unshift("Goiaba");
console.table(frutas);
console.log("O Vetor no momento possui", frutas.length, "elementos");

console.log("6ª posição", frutas[5]);

frutas.splice(4, 1);
console.table(frutas);
console.log("O Vetor no momento possui", frutas.length, "elementos");

let novaCópia = frutas.slice(2, 5);
console.table(novaCópia);
console.log("O Vetor no momento possui", frutas.length, "elementos");
