// 6) Escreva uma função que informe o retorno de um investimento (montante) com 
// base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
// fornecidos pelo usuário.

// Use a fórmula: M = C * (1+i)t

// Onde:
// ▪ C = Capital inicial investido
// ▪ i = Taxa de juros, em percentual
// ▪ t = Tempo do investimento, em meses

// Exiba o resultado com duas casas decimais.


function calcularMontante() {
  var capitalInicial = parseFloat(prompt("Digite o capital inicial:"));
  var taxaDeJuros = parseFloat(prompt("Digite a taxa de juros (em percentual):"));
  var tempoEmMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));

  taxaDeJuros = taxaDeJuros / 100;

  var montante = capitalInicial * Math.pow((1 + taxaDeJuros), tempoEmMeses);

  montante = montante.toFixed(2);

  console.log("O montante após " + tempoEmMeses + " meses será de R$ " + montante);
}

calcularMontante();
