// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
// números pares e a quantidade de números ímpares.

var numeros = [];
var numerosPares = [];
var numerosImpares = [];

for (var contador = 0; contador < 10; contador++) {
    var numero = parseFloat(prompt("Digite um número: "));
    numeros.push(numero);
}

for (var valor of numeros) {
    if (valor % 2 === 0) {
        numerosPares.push(valor);
    } else {
        numerosImpares.push(valor);
    }
}

console.log("Quantidade de números pares: " + numerosPares.length);
console.log("Quantidade de números ímpares: " + numerosImpares.length);
