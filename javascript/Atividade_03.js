const alturasHomens = [];
const alturasMulheres = [];
const generoHomem = [];
const generoMulher = [];

for (let i = 0; i < 15; i++) {
    const genero = prompt("Qual o sexo? M ou F? ");

    if (genero === "M") {
        const altura = parseFloat(prompt("Qual sua altura? "));
        generoHomem.push(genero);
        alturasHomens.push(altura);
    } else if (genero === "F") {
        const altura = parseFloat(prompt("Qual sua altura? "));
        generoMulher.push(genero);
        alturasMulheres.push(altura);
    } else {
        alert("Informe se o genero é M ou F");
    }
}

let maiorAltura = 0;
for (const altura of alturasMulheres) {
    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}

for (const altura of alturasHomens) {
    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
}

let menorAltura = 0;
for (const altura of alturasMulheres) {
    if (menorAltura === 0) {
        menorAltura = altura;
    } else if (altura < menorAltura) {
        menorAltura = altura;
    }
}

for (const altura of alturasHomens) {
    if (menorAltura === 0) {
        menorAltura = altura;
    } else if (altura < menorAltura) {
        menorAltura = altura;
    }
}

const mediaAlturaHomens = alturasHomens.reduce((total, altura) => total + altura, 0) / alturasHomens.length;

alert(`Maior altura: ${maiorAltura}`);
alert(`Menor altura: ${menorAltura}`);
alert(`Média da altura masculina: ${mediaAlturaHomens}`);
alert(`Quantidade de mulheres: ${alturasMulheres.length}`);
