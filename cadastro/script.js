const formulario = document.getElementById("formulario");
const json = document.getElementById("json");
const tabelaCorpo = document.getElementById("tabela-corpo");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dadosFormulario = new FormData(formulario);

    const objeto = {};

    for (const [chave, valor] of dadosFormulario) {
        objeto[chave] = valor;
    }

    json.textContent = JSON.stringify(objeto, null, 2);

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${objeto.nome}</td>
        <td>${objeto.email}</td>
        <td>${objeto.idade}</td>
        <td>${objeto.curso}</td>
    `;

    tabelaCorpo.appendChild(linha);

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    formulario.reset();
});