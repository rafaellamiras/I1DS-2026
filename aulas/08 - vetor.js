// Criando variáveis do tipo Array (Vetor)

var dinos = ["Tiranosauro Rex", "Estegossauro", "Brontossauro", "Tricerátops"];

//Imprimindo os dados em forma de linha
console.log(dinos);
//Imprimindo os dados em forma de tabela
console.table(dinos);

// Lenght -> "Tamanho" do Array (Quantidade de elementos)
console.log("O Vetor tem", dinos.length, "elementos");

// Imprimir Elemento a partir do indice
console.log(dinos[0]);

// Push - Adiciona um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no início da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// Obter um Elemento a partir  do indice
console.log("1ª posição", dinos[0]);
console.log("4ª posição", dinos[3]);
console.log("20ª posição (não existe):", dinos[20]);

// pop -> Remover um elemento do final do vetor (último elemento)

dinos.pop();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// shift -> Remover um elemento do início do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// splice -> Remove um elemento a partir de um indice, e também precisa ser informada a quantidade de registro a ser excluido a partir do indice

dinos.splice(1, 1);
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

//Procurar um elemento a partir do nome (descrição)
dinos.push("Petrodáptilo");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

// Procurar  um elemento a partir do nome (descrição)
// indexOF(procurado) -> retorna o indice do elemento no vetor

let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);

// indexOF(procurado) -> retorna -1 caso não encontre o elemento
procurado = "Cristianossauro";
indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);

// Excluir um elemento com base em seu nome
// 1º localizar o indice de elemento a partir do nome
// 2º excluir o registro com base no indice retornado

procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do Indice
dinos[1] = "Anquilossauro";
console.table(dinos);
