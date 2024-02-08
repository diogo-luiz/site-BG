var cells = document.querySelectorAll("#minhatabela tr:not(:first-child) td:nth-child(2)");

// Inicializa a variável para armazenar a soma
var soma = 0;

// Itera sobre os elementos da segunda coluna
cells.forEach(function(cell) {
  // Converte o texto da célula para um número e adiciona à soma
  soma += parseInt(cell.textContent);
});

// Exibe o resultado da soma
document.getElementById("totalj1").textContent = soma;
