/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

// ProfCastelloMaluko
function Votar(idade) {
  if (idade < 16) {
    console.log("Não pode votar");
  } else if (idade >= 18 && idade < 70) {
    console.log("Pode votar!");
  } else {
    console.log("Voto opcional!");
  }
}

Votar(16);
Votar(18);
Votar(12);
Votar(79);
Votar(70);
Votar(59);

// ProfCristiano
function podeVotar(idade) {
  if (idade < 16) {
    return "Não pode votar";
  }
  if (idade >= 18 && idade < 70) {
    return "Pode votar, e é obrigatório!";
  }

  return "Voto opcional, e não é obrigatório!";
}

let idade = 40;

console.log("Idade:", idade, "anos e você:", podeVotar(idade));

/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

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

let nota = 5;
console.log("Sua nota foi:", nota, "-", notaAluno(nota));
