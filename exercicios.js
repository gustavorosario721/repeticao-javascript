{
    console.log("=== Exercício 01 ===");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

{
    console.log("\n=== Exercício 02 ===");
    const num = 10;
    for (let i = 1; i <= 10; i++) {
        console.log(num, "x", i, "=", num * i);
    }
}

{
    console.log("\n=== Exercício 03 ===");
    let i = 1;
    let total = 0;

    while (i <= 100) {
        total += i;
        ++i;
    }

    console.log("A soma de 1 a 100 é: " + total);
}

{
    console.log("\n=== Exercício 04 ===");
    let i = 0;
    while (i <= 20) {
        if (i % 2 === 0) {
            console.log(i + " é par");
        }
        i++;
    }
}

{
    console.log("\n=== Exercício 05 ===");
    let i = 10;

    do {
        console.log(i);
        --i;
    } while (i >= 1);
}

{
    console.log("\n=== Exercício 06 ===");
    const aluno = {
        nome: "João",
        nota: 8.5,
        aprovado: true
    };

    for (let info in aluno) {
        console.log("Campo:", info);
        console.log("Valor:", aluno[info]);
    }
}

{
    console.log("\n=== Exercício 07 ===");
    let notas = [10, 8.5, 7, 6.5, 9];
    let media = 0;

    for (let nota of notas) {
        media += nota;
    }

    media /= notas.length;

    console.log("A média das notas é: " + media);
}

{
    console.log("\n=== Exercício 08 ===");
    for (let i = 1; i <= 50; ++i) {
        if (i % 2 !== 0) {
            console.log(i + " é ímpar");
        }
    }
}

{
    console.log("\n=== Exercício 09 ===");
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }
}