// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo 
// com o raio fornecido

function calcularPerimetro(novoRaio) {
    var novoPerimetro = 2 * 3.14 * novoRaio;
    return novoPerimetro;
}

var novoRaio = parseInt(prompt("Digite o raio do círculo: "));
console.log(calcularPerimetro(novoRaio));

