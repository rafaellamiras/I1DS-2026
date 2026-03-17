/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.


2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/

function subtrair(anoAtual, anoNascimento) {
  let idadeAtual = anoAtual - anoNascimento;
  return idadeAtual;
}


let anoAtual = 2026;
let anoNascimento = 2010;

console.log("__________________________________________________")
console.log("2026 - 2010=", subtrair(anoAtual, anoNascimento));
console.log("A idade atual da pessoa que nasceu em 2010 é:", subtrair(anoAtual, anoNascimento));
console.log("__________________________________________________")


function multiplicacao(quantidadeCombustível, )
