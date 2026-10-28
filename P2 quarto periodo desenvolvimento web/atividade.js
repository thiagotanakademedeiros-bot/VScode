
const botao = document.getElementById("gerar")
const numeroInput = document.getElementById("numero")
const lista = document.getElementById("lista")

botao.addEventListener("click", function() {
    const numero = Number(numeroInput.value);

    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

        const item = document.createElement("li");

        item.textContent = `${numero} x ${i} = ${numero * i}`;

        lista.appendChild(item)
    }
    
})