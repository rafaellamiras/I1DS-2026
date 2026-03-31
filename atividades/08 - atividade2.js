// ATIVIDADE 1 //

let nome = "Rafaella";
let idade = 16;
let cidade = "Jaú";

console.log(
  "Meu nome é",
  nome,
  ",",
  "tenho",
  idade,
  "anos",
  "e moro na cidade de",
  cidade,
  "!",
);

console.log("================================================");

let num1 = 5;
let num2 = 5;

console.log("num1 =", num1, "num2=", num2);

console.log("A Soma de 5 + 5 é:", num1 + num2);
console.log("A subtração de 5 - 5 é:", num1 - num2);
console.log("A multiplicação de 5 x 5 é:", num1 * num2);
console.log("A divisão de 5 / 5 é:", num1 / num2);
console.log("O resto da divisão é:", num1 % num2);

console.log("=================================================");

let base = 5;
let altura = 4;
let comprimento = 3;
let largura = 6;

console.log("O valor da área do retângulo é:", base * altura);

console.log("=================================================");

console.log("O volume do paralelepípedo é:", comprimento * altura * largura);

console.log("=================================================");

let valor = 20;
let desconto = 10 / 100;
console.log("A valor inicial de um produto é de:", valor);
console.log("O valor do desconto foi de:", valor - valor * desconto, "reais");

console.log("=================================================");

let peso = 50;
let tamanho = 1.6;

console.log("O IMC de uma pessoa com 1,60 de altura é de:", peso / tamanho);

console.log("=================================================");

nota1 = 10;
nota2 = 8;
nota3 = 4;

console.log("A média de 3 notas de um aluno foi de", nota1 + nota2 + nota3 / 3);

console.log("=================================================");

let a = 4;
let b = 5;
let c = 6;

console.log("O valor no delta na equação de 2°grau é:", b * b - 4 * a * c);

console.log("=================================================");

let horas = 7;
let minutos = horas * 60;
let segundos = minutos * 60;

console.log(
  "Se 1 hora tem 60 segundos, 7 horas possui",
  minutos,
  "minutos e",
  segundos,
  "segundos",
);

console.log("=================================================");

let celsius = 40;
let fahrenheit = 60;

console.log(
  "A conversão de temperetura em Celsius '40 graus' para fahrenheit, fica -",
  celsius * 1.8 + 32,
);

// ATIVIDADE 2 //

let numero = 0;

if (numero > 0) {
  console.log("Se o número for maior que 0, é positivo!");
}
if (numero < 0) {
  console.log("Se o número for menor que 0, é negativo!");
}
if (numero == 0) {
  console.log("Se o número for igual a 0, é nulo!");
}

console.log("=================================================");

let valor2 = 4;

if (valor2 % 2 == 0) {
  console.log("É par!");
} else {
  console.log("É ímpar!");
}

console.log("=================================================");

let valor3 = 4;

if (valor3 % 3 == 0) {
  console.log("O valor =", valor3, "é múltiplo de 3!");
} else {
  console.log("O valor =", valor3, "não é múltiplo de 3!");
}
console.log("=================================================");

let nota = 7;

function notaAluno(nota) {
  let frase;
  if (nota < 5) {
    frase = "Você está reprovado!";
  } else if (nota >= 5 && idade < 6.9) {
    frase = "Você está de recuperação!";
  } else if (nota >= 7) {
    frase = "Você está aprovado!";
  }

  return frase;
}

console.log("Sua nota foi:", nota, "-", notaAluno(nota));

console.log("=================================================");

function sistemaVotação(idade) {
  if (idade < 16) {
    console.log("Não pode votar");
  } else if (idade >= 18 && idade < 70) {
    console.log("Pode votar!");
  } else {
    console.log("Voto opcional!");
  }
}

sistemaVotação(12);

console.log("=================================================");

let numero10a50 = 30;

if (numero10a50 >= 10 && numero10a50 <= 50) {
  console.log("Se o número estiver entre 10 e 50, está dentro!");
} else {
  console.log("Se não estiver, está fora!");
}

console.log("=================================================");

const user = "rafaella";
const senha = 12345;

let loginUser = "rafaella";
let loginSenha = 12345;

if (loginUser == user && loginSenha === senha) {
  console.log("Olá, seja bem-vindo");
} else {
  console.log("Acesso negado");
}
console.log("=================================================");

let num3 = 20;
let num4 = 10;

if (num3 > num4) {
  console.log("O número", num3, "é maior que o número", num4);
}
console.log("=================================================");

let num5 = 20;
let num6 = 10;
let num7 = 30;

if (num5 > num6 && num5 > num7) {
  console.log("O numero", num5, " é o maior numero");
}
if (num6 > num5 && num6 > num7) {
  console.log("O numero", num6, "é o maior!");
} else {
  console.log("O numero", num7, "é o maior!");
}

console.log("=================================================");

let idad = 10;

if (idad < 12) {
  console.log("É criança!");
}
if (idad >= 12 && idad <= 18) {
  console.log("É adolescente!");
  if (idad >= 18 && idad < 60) console.log("É adulto!");
  if (idad > 60) console.log("É idoso!");
}

// ATIVIDADE 3 //

let diaDaSemana = 5;
switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("segunda");
    break;
  case 3:
    console.log("terça");
    break;
  case 4:
    console.log("quarta");
    break;
  case 5:
    console.log("quinta");
    break;
  case 6:
    console.log("sexta");
    break;
  case 7:
    console.log("sábado");
    break;

  default:
    console.log("Essa opção não existe");
    break;
}

console.log("=================================================");

let nomeDoMes = 10;
switch (nomeDoMes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.los("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;

  default:
    console.log("Essa opção não existe");
    break;
}

console.log("=================================================");

let trimestre = 1;
switch (trimestre) {
  case 1:
    console.log("Janeiro, Fevereiro, e Março");
    break;
  case 2:
    console.log("Abril, Maio e Junho");
    break;
  case 3:
    console.log("Julho, Agosto e Setembro");
    break;
  case 4:
    console.log("Outubro, Novembro e Dezembro");
    break;

  default:
    console.log("Essa opção não existe");
    break;
}

console.log("=================================================");

let num10 = 5;
let num11 = 6;

let opcao = 1;

switch (opcao) {
  case 1:
    console.log(`Resultado da Soma: ${num10 + num11}`);
    break;
  case 2:
    console.log(`Resultado da Subtração: ${num10 - num11}`);
    break;
  case 3:
    console.log(`Resultado da Multiplicação: ${num10 * num11}`);
    break;
  case 4:
    if (num2 !== 0) {
      console.log(`Resultado da Divisão: ${num10 / num11}`);
    } else {
      console.log("Erro: Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Opção inválida! Escolha de 1 a 4.");
}
console.log("=================================================");

let avaliacao = "B";
switch (avaliacao) {
  case "A":
    console.log("Exelente");
    break;
  case "B":
    console.log("Bom");
    break;
  case "C":
    console.log("Regular");
    break;
  case "D":
    console.log("Ruim");
    break;

  default:
    console.log("Essa opção não existe");
    break;
}

console.log("=================================================");

// ATIVIDADE 5 //

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("=================================================");

let sequencia3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma2 = 0

for (let i = 0; i < sequencia3.length; i++) {
  soma2 += sequencia3[i]

}
console.log("soma dos elementos é:", soma2);

console.log("=================================================");

let sequencia4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma4 = 0

for (let i = 0; i < sequencia4.length; i++) {
  soma4 += sequencia4[i]
}
let media = soma4 / sequencia4.length
console.log("A média da sequencia é:", media)

console.log("=================================================");


