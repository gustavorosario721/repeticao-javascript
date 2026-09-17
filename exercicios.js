document.addEventListener("DOMContentLoaded", () => {
    // === Exercício 01 ===
    let res1 = "";
    for (let i = 1; i <= 10; i++) {
        res1 += i + (i < 10 ? ", " : "");
    }
    document.getElementById("res-1").innerText = res1;

    // === Exercício 02 (Tabuada inicial) ===
    gerarTabuada();

    // === Exercício 03 ===
    let i3 = 1;
    let total = 0;
    while (i3 <= 100) {
        total += i3;
        ++i3;
    }
    document.getElementById("res-3").innerText = "A soma de 1 a 100 é: " + total;

    // === Exercício 04 ===
    let i4 = 0;
    let pares = [];
    while (i4 <= 20) {
        if (i4 % 2 === 0) {
            pares.push(i4 + " é par");
        }
        i4++;
    }
    document.getElementById("res-4").innerHTML = pares.join("<br>");

    // === Exercício 05 ===
    let i5 = 10;
    let regressiva5 = [];
    do {
        regressiva5.push(i5);
        --i5;
    } while (i5 >= 1);
    document.getElementById("res-5").innerText = regressiva5.join(" - ");

    // === Exercício 06 ===
    const aluno = {
        nome: "João",
        nota: 8.5,
        aprovado: true
    };
    let res6 = "";
    for (let info in aluno) {
        res6 += `<strong>${info}:</strong> ${aluno[info]}<br>`;
    }
    document.getElementById("res-6").innerHTML = res6;

    // === Exercício 07 ===
    let notas = [10, 8.5, 7, 6.5, 9];
    let media = 0;
    for (let nota of notas) {
        media += nota;
    }
    media /= notas.length;
    document.getElementById("res-7").innerText = "A média das notas é: " + media.toFixed(2);

    // === Exercício 08 ===
    let impares = [];
    for (let i = 1; i <= 50; ++i) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    document.getElementById("res-8").innerText = impares.join(", ");

    // === Exercício 09 ===
    let regressiva9 = [];
    for (let i = 10; i >= 0; i--) {
        regressiva9.push(i);
    }
    document.getElementById("res-9").innerText = regressiva9.join(" ➔ ");
});

// Função para gerar a Tabuada dinamicamente com base no input do usuário
function gerarTabuada() {
    const input = document.getElementById("numTabuada");
    const containerRes = document.getElementById("res-2");
    const num = Number(input.value);

    if (input.value === "" || isNaN(num)) {
        containerRes.innerHTML = "Por favor, digite um número válido.";
        return;
    }

    let resultadoHTML = "";
    for (let i = 1; i <= 10; i++) {
        resultadoHTML += `${num} x ${i} = <strong>${num * i}</strong><br>`;
    }
    
    containerRes.innerHTML = resultadoHTML;
}

