//Comentário em linha

/*
Comentário de várias linhas
Bloco de código
*/

//Imprimir informações na tela
console.log("Imprime Informações na telas");

/*
Declaração de variaveis;
Sintaxe: let tipo-variavel =  valor-variável;
Exemplo: let idade = 45;
*/

/*
Tipos dados primarios:
Números Inteiros (Int) = 10
Números Decimais (Double) = 8.53
Caracteres AlfaNumeros (string) = "Cristiano"
Numeros Booleanos (bool) = false;
*/

let idade = 45;
let salario = 25864.57;
let ehProfessor = false;
let nome = "João da Silva";

console.log("Nome: ", nome, "Idade: ", idade, "Salário: ", salario);

/*
Operadores matematicos
+ -> Adição
- -> Subtração
* -> Multiplicação
/ -> Divisão
% -> Resto da divisão
*/

let num1 = 10;
let num2 = 2;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

//Imprimir  as operações
console.log("Somando ", num1, " + ", num2, " = ", soma);
console.log("O Resto da Divisão do", num1, " por ", num2, " = ", restoDivisao);

/*
Operadores de comparação
== -> Comparação de Igualdade
!= -> Diferente
> -> Maior que
< -> Menor que
>= -> Maior ou Igual
<= -> Menor ou igual
=== -> Exatamente Igual (Valor  e tipo de variavel)

Retorna 'True' ou 'false' | Verdadeiro ou falso
*/

console.log("O Numero 1 é Igual o Numero 2?", num1 == num2);
console.log("O Numero 1 é Maior ou Igual ao Numero 2?", num1 >= num2);
console.log("O Numero 1 é Menor que o Numero 2?", num1 < num2);

/*
Operadores Lógicos

&& (AND "E") -> Retorna verdadeiro se todas as clausulas forem verdadeiras
|| (OR "OU") -> Retorna verdadeiro se ao uma das clausulas forem verdadeiras 
! (NOT "Negação") -> Operador  de Negação (Inverte o valor lógico)

*/

let sexo = "Feminino";
let idadeAluno = 17;

console.log(
  "É sexo Masculino ou tem 17 ou mais anos de idade? ",
  sexo == "Masculino" || idadeAluno >= 17,
);
console.log(
  "É sexo Masculino e tem 17 ou mais anos de idade? ",
  sexo == "Masculino" && idadeAluno >= 17,
);
console.log(
  "É sexo Masculino ou tem 17 ou mais anos de idade? ",
  !(sexo == "Masculino" && idadeAluno >= 17),
);

//Construção de strings

let n1 = "20";
let n2 = 10;

console.log(n1 + n2);
console.log("20" + n2);

var primeiroNome = "Cristiano";
var sobreNome = " de Paula";

console.log(primeiroNome + sobreNome);
