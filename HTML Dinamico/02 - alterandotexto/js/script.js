//Criando função para gerar frases aleatórias
function falar() {
  // Criando vetor de frases
  const frases = [
    "Hoje está um dia bonito!",
    "Falta muito para sexta-feira",
    "Qual o cardápio de hoje no almoço?",
    "Vish, tem prova de matemática",
  ];
  // Criando uma variavel para armazenar a DIV COM ID "tagarela"
  let tagarela = document.getElementById("tagarela");

  // Variavel de controle para frase exibida
  let controle = 0;

  // gerando numero aleatorio entre 0 e 1 (lembrando que o 1 não entra na contagem)
  let numero = Math.random();

  // Obtendo o índice da frase a ser usada;
  if(numero > 0.75) controle = 3;
  else if(numero > 0.5) controle = 2;
  else if(numero > 0.25) controle = 1;

  // Alterando o conteudo de DIV "tagarela"
  tagarela.innerHTML = frases[controle]

}
