//function olaMundo(){
// alert("Olá Mundo!");
//}

/* Arrow function */
const olaMundo = () => {
  alert("Olá Mundo!");
};

// Criar uma variavel para armazenar o elemento do documento

let elementoAlvo = document.getElementById("texto");

const mudarTexto = () => {
  elementoAlvo.innerHTML = "🔥 Novo texto com JS";
  elementoAlvo.style.color = "red";
  elementoAlvo.style.backgroundColor = "yellow";
};

const enviarNome = () => {
  let nomeDigitado = document.getElementById("nome").value; //Função que pega todos os elementos com Id (getElementById)
  alert("Olá!" + nomeDigitado);

  // let nomeDigitado = document.getElementByName("nome").value
  //alert("Olá"+ nomeDigitado)
};

const somar = () => {
  event.preventDefault();

  //Buscou os elementos ID
  let numero1 = parseInt(document.getElementById("n1").value);
  let numero2 = parseInt(document.getElementById("n2").value);

  //Realizou a soma dos valores
  let result = parseInt(numero1) + numero2;

  //Desenvolveu o resultado para o formulario
  document.getElementById("resultado").innerHTML = result;
};
