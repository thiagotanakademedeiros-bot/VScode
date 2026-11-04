const botaoCalcularMedia = document.getElementById("calcular");
const resultadoMedia = document.getElementById("resultadoMedia");
const finalizacaoMedia = document.getElementById("finalizacaoMedia");

botaoCalcularMedia.addEventListener("click", function () {
    finalizacaoMedia.textContent = "";
    try {
        const textoNota1 = document.getElementById("nota1").value;
        const textoNota2 = document.getElementById("nota2").value;
        const textoNota3 = document.getElementById("nota3").value;

        if (textoNota1 === "" || textoNota2 === "" || textoNota3 === "") {
            throw new Error("Preencha todas as caixas.");
        }

        const nota1 = Number(textoNota1);
        const nota2 = Number(textoNota2);
        const nota3 = Number(textoNota3);

        if (!Number.isFinite(nota1) || !Number.isFinite(nota2) || !Number.isFinite(nota3)) {
            throw new Error("As notas devem ser números válidos.");
        }

        if (
    nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    throw new Error("As notas devem estar entre 0 e 10.");
}

        const media = (nota1 + nota2 + nota3) / 3;
        let situacao;

        if (media >= 7) {
            situacao = "Aprovado.";
        } else if (media >= 5) {
            situacao = "Recuperação.";
        } else {
            situacao = "Reprovado.";
        }

        resultadoMedia.textContent = "Média:" + media + " Situação: " + situacao;
    } catch (error) {
        resultadoMedia.textContent = "Erro: " + error.message;
    } finally {
        finalizacaoMedia.textContent = "Verificação finalizada.";
    }
});
