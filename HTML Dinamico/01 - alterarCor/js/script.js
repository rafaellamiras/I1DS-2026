// Criando uma variável para armazenar a DIV com id "lampada"

let lampada = document.getElementById("lampada");

// Criando função para mudar a cor da DIV "lampada" para verde

function acenderVerde() {
  lampada.style.backgroundColor = "green";
}
function acenderVermelho() {
  lampada.style.backgroundColor = "red";
}
// Criando função (arroz function) para trocar cor de acordo com o parametro

const acender = (cor) => {
  lampada.style.backgroundColor = cor;
};
