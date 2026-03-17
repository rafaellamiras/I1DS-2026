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

// Push - Adiciona um novo elemento no final da final
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
