// 1) Supondo que a população de um país A seja da ordem de 80000 habitantes com 
// uma taxa anual de crescimento de 3% e que a população de B seja 200000 
// habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que 
// calcule e escreva o número de anos necessários para que a população do país A 
// ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

var populacaoA = 80000;
var taxaDeCrescimentoA = 0.03;
var populacaoB = 200000;
var taxaDeCrescimentoB = 0.015;
var anosDecorridos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaDeCrescimentoA;
  populacaoB += populacaoB * taxaDeCrescimentoB;
  anosDecorridos++;
}

console.log("Levará " + anosDecorridos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
