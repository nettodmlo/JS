// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, 
// o maior valor e a soma dos valores.

var numeros = [];
var numeroMenor = 10000000;
var numeroMaior = 0;
var somaValores = 0;

for (var contador = 0; contador < 6; contador++) {
    var numero = parseFloat(prompt("Digite um número: "));
    numeros.push(numero);
}

for (var valor of numeros) {
    if (valor > numeroMaior) {
        numeroMaior = valor;
    } else if (valor < numeroMenor) {
        numeroMenor = valor;
    }
}

for (var valor of numeros) {
    somaValores += valor;
}

console.log("Maior valor: " + numeroMaior);
console.log("Menor valor: " + numeroMenor);
console.log("A soma dos valores: " + somaValores);
