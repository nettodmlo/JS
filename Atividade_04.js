//Desenvolva um programa que solicite três notas de um aluno. Calcule a média aritmética das notas. Se o aluno obter média 4 ou inferior, ele está automaticamente reprovado. Caso a média seja maior que 4 e menor que 7, o aluno está em recuperação, e caso seja igual ou maior que 7, o aluno está aprovado. Caso o aluno esteja na recuperação, o programa deve solicitar a nota do aluno na recuperação, somar com a média aritmética calculada anteriormente, e dividir por 2. Se o aluno obter nota 5 ou superior ele está aprovado, caso contrário, reprovado. Observação: Para desenvolvimento do exercício, deve obrigatoriamente utilizar array para armazenar as notas.

var notas = [];

for (var i = 1; i <= 3; i++) {
    var nota = parseFloat(prompt("Digite a nota " + i + ":"));
    notas.push(nota);
}

var media = (notas[0] + notas[1] + notas[2]) / 3;

if (media >= 7) {
    alert("Aluno aprovado!");
} else if (media > 4) {
    var notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
    
    var mediaRecuperacao = (media + notaRecuperacao) / 2;
    
    if (mediaRecuperacao >= 5) {
        alert("Aluno aprovado na recuperação!");
    } else {
        alert("Aluno reprovado na recuperação.");
    }
} else {
    alert("Aluno reprovado!");
}
